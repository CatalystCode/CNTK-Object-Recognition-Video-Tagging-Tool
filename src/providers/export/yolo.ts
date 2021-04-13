import _ from "lodash";
import { ExportProvider } from "./exportProvider";
import { IProject, IAssetMetadata, ITag, IExportProviderOptions } from "../../models/applicationState";
import Guard from "../../common/guard";
import HtmlFileReader from "../../common/htmlFileReader";
import json2csv, { Parser } from "json2csv";
import {ISize} from "vott-react";

interface IObjectInfo {
    id: number;
    xcenter: number;
    ycenter: number;
    width: number;
    height: number;
}

/**
 * @name - YOLO Export Provider
 * @description - Exports a project into a YOLO
 */
export class YOLOExportProvider extends ExportProvider<IExportProviderOptions> {
    private labelsInfo = new Map<string, IObjectInfo[]>();
    private nameMap = new Map<string, number>();

    constructor(project: IProject, options: IExportProviderOptions) {
        super(project, options);
        Guard.null(options);
    }

    /**
     * Export project to YOLO
     */
    public async export(): Promise<void> {
        const allAssets = await this.getAssetsForExport();
        const exportObject: any = { ...this.project };
        exportObject.assets = _.keyBy(allAssets, (assetMetadata) => assetMetadata.asset.id);

        // Create Export Folder
        const exportFolderName = `${this.project.name.replace(/\s/g, "-")}-YOLO-export`;
        await this.storageProvider.createContainer(exportFolderName);

        await this.exportNames(exportFolderName);
        await this.exportImages(exportFolderName, allAssets);
        await this.exportLabels(exportFolderName, allAssets);
    }

    private async exportImages(exportFolderName: string, allAssets: IAssetMetadata[]) {
        // Create JPEGImages Sub Folder
        const jpegImagesFolderName = `${exportFolderName}/JPEGImages`;
        await this.storageProvider.createContainer(jpegImagesFolderName);

        await allAssets.mapAsync(async (assetMetadata) => {
            await this.exportSingleImage(jpegImagesFolderName, assetMetadata);
        });
    }

    private async exportSingleImage(jpegImagesFolderName: string, assetMetadata: IAssetMetadata): Promise<void> {
        try {
            const arrayBuffer = await HtmlFileReader.getAssetArray(assetMetadata.asset);
            const buffer = Buffer.from(arrayBuffer);
            const imageFileName = assetMetadata.asset.name;
            const imageFilePath = `${jpegImagesFolderName}/${imageFileName}`;

            // Write Binary
            await this.storageProvider.writeBinary(imageFilePath, buffer);

            const imageSize = await this.getImageSize(arrayBuffer, imageFilePath, assetMetadata);

            // Get Array of all Box shaped tag for the Asset
            const tagObjects = this.getAssetTagArray(assetMetadata, imageSize);
            const labelFileName = `${imageFileName.substr(0, imageFileName.lastIndexOf("."))
            || imageFileName}.txt`;
            this.labelsInfo.set(labelFileName, tagObjects);
        } catch (err) {
            // Ignore the error at the moment
            // TODO: Refactor ExportProvider abstract class export() method
            //       to return Promise<object> with an object containing
            //       the number of files successfully exported out of total
            console.log(`Error downloading asset ${assetMetadata.asset.path} - ${err}`);
        }
    }

    private getAssetTagArray(element: IAssetMetadata, imageSize: ISize): IObjectInfo[] {
        const tagObjects = [];
        element.regions.forEach((region) => {
            region.tags.forEach((tagName) => {
                const objectInfo: IObjectInfo = {
                    id: this.nameMap.get(tagName),
                    xcenter: (2 * region.boundingBox.left + region.boundingBox.width) / (2 * imageSize.width),
                    ycenter: (2 * region.boundingBox.top + region.boundingBox.height) / (2 * imageSize.height),
                    width: region.boundingBox.width / imageSize.width,
                    height: region.boundingBox.height / imageSize.height,
                };

                tagObjects.push(objectInfo);
            });
        });

        return tagObjects;
    }

    private async getImageSize(imageBuffer: ArrayBuffer, imageFilePath: string, assetMetadata: IAssetMetadata)
        : Promise<ISize> {
        if (assetMetadata.asset.size &&
            assetMetadata.asset.size.width !== 0 &&
            assetMetadata.asset.size.height !== 0) {
            return assetMetadata.asset.size;
        }

        // Get Base64
        const image64 = btoa(new Uint8Array(imageBuffer).
        reduce((data, byte) => data + String.fromCharCode(byte), ""));

        if (image64.length < 10) {
            // Ignore the error at the moment
            // TODO: Refactor ExportProvider abstract class export() method
            //       to return Promise<object> with an object containing
            //       the number of files successfully exported out of total
            console.log(`Image not valid ${imageFilePath}`);
        } else {
            const assetProps = await HtmlFileReader.readAssetAttributesWithBuffer(image64);
            if (assetProps) {
                return assetProps;
            }

            console.log(`imageInfo for element ${assetMetadata.asset.name} not found (${assetProps})`);
        }

        return {width: 1, height: 1};
    }

    private async exportNames(exportFolderName: string) {
        if (!this.project.tags) {
            return;
        }

        const namesFileName = `${exportFolderName}/yolo.names`;

        let id = 0;
        const dataItems = this.project.tags.map((element) => {
            const objectName = element.name;
            this.nameMap.set(objectName, id++);
            return  {name: objectName};
        });

        // Configure CSV options
        const csvOptions: json2csv.Options<{}> = {
            fields: ["name"],
            header: false,
            delimiter: "",
            quote: "",
            doubleQuote: "",
            eol: "\n",
        };
        const csvParser = new Parser(csvOptions);
        const csvData = csvParser.parse(dataItems);

        await this.storageProvider.writeText(namesFileName, csvData);
    }

    private async exportLabels(exportFolderName: string, allAssets: IAssetMetadata[]) {
        // Create Labels Sub Folder
        const labelsFolderName = `${exportFolderName}/labels`;
        await this.storageProvider.createContainer(labelsFolderName);

        try {
            // Save Labels
            await this.labelsInfo.forEachAsync(async (objectsInfo, labelFileName) => {
                const labelFilePath = `${labelsFolderName}/${labelFileName}`;

                const csvOptions: json2csv.Options<{}> = {
                    fields: ["id", "xcenter", "ycenter", "width", "height"],
                    header: false,
                    delimiter: " ",
                    quote: "",
                    doubleQuote: "",
                    eol: "\n",
                };
                const csvParser = new Parser(csvOptions);
                const csvData = csvParser.parse(objectsInfo);

                await this.storageProvider.writeText(labelFilePath, csvData);
            });
        } catch (err) {
            console.log("Error writing YOLO annotation file");
        }
    }
}
