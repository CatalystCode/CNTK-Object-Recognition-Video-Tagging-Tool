import { YOLOExportProvider} from "./yolo";
import { ExportAssetState } from "./exportProvider";
import registerProviders from "../../registerProviders";
import { ExportProviderFactory } from "./exportProviderFactory";
import {
    IAssetMetadata, AssetState, IExportProviderOptions,
} from "../../models/applicationState";
import MockFactory from "../../common/mockFactory";

jest.mock("../../services/assetService");
import { AssetService } from "../../services/assetService";

jest.mock("../storage/localFileSystemProxy");
import { LocalFileSystemProxy } from "../storage/localFileSystemProxy";
import registerMixins from "../../registerMixins";
import HtmlFileReader from "../../common/htmlFileReader";
import { appInfo } from "../../common/appInfo";
import { AssetProviderFactory } from "../storage/assetProviderFactory";

registerMixins();

describe("YOLO Format Export Provider", () => {
    const testAssets = MockFactory.createTestAssets(10, 1);
    const baseTestProject = MockFactory.createTestProject("Test Project");
    baseTestProject.assets = {
        "asset-1": MockFactory.createTestAsset("1", AssetState.Tagged),
        "asset-2": MockFactory.createTestAsset("2", AssetState.Tagged),
        "asset-3": MockFactory.createTestAsset("3", AssetState.Visited),
    };
    baseTestProject.sourceConnection = MockFactory.createTestConnection("test", "localFileSystemProxy");
    baseTestProject.targetConnection = MockFactory.createTestConnection("test", "localFileSystemProxy");

    HtmlFileReader.getAssetArray = jest.fn(() => {
        return Promise.resolve(new Uint8Array([1, 2, 3]).buffer);
    });

    beforeAll(() => {
        AssetProviderFactory.create = jest.fn(() => {
            return {
                getAssets: jest.fn(() => Promise.resolve(testAssets)),
            };
        });
    });

    beforeEach(() => {
        registerProviders();
    });

    it("Is defined", () => {
        expect(YOLOExportProvider).toBeDefined();
    });

    it("Can be instantiated through the factory", () => {
        const options: IExportProviderOptions = {
            assetState: ExportAssetState.All,
        };
        const exportProvider = ExportProviderFactory.create("yolo", baseTestProject, options);
        expect(exportProvider).not.toBeNull();
        expect(exportProvider).toBeInstanceOf(YOLOExportProvider);
    });

    describe("Export variations", () => {
        beforeEach(() => {
            const assetServiceMock = AssetService as jest.Mocked<typeof AssetService>;
            assetServiceMock.prototype.getAssetMetadata = jest.fn((asset) => {
                const isOdd = Number(asset.id.split("-")[1]) % 2 === 0;
                const mockTag1 = MockFactory.createTestTag(isOdd ? "1" : "2");
                const mockTag2 = MockFactory.createTestTag(isOdd ? "2" : "1");
                const mockTag3 = MockFactory.createTestTag("3");
                const mockRegion1 = MockFactory.createTestRegion("region-1", [mockTag1.name]);
                const mockRegion2 = MockFactory.createTestRegion("region-2", [mockTag2.name]);
                const mockRegion3 = MockFactory.createTestRegion("region-3", [mockTag3.name]);

                const assetMetadata: IAssetMetadata = {
                    asset,
                    regions: [mockRegion1, mockRegion2, mockRegion3],
                    version: appInfo.version,
                };

                return Promise.resolve(assetMetadata);
            });

            const storageProviderMock = LocalFileSystemProxy as jest.Mock<LocalFileSystemProxy>;
            storageProviderMock.mockClear();
        });

        it("Exports all assets", async () => {
            const options: IExportProviderOptions = {
                assetState: ExportAssetState.All,
            };

            const testProject = { ...baseTestProject };
            testProject.tags = MockFactory.createTestTags(4);

            const exportProvider = new YOLOExportProvider(testProject, options);
            await exportProvider.export();

            const storageProviderMock = LocalFileSystemProxy as any;
            const createContainerCalls = storageProviderMock.mock.instances[0].createContainer.mock.calls;

            expect(createContainerCalls.length).toEqual(3);
            expect(createContainerCalls[1][0].endsWith("/JPEGImages")).toEqual(true);
            expect(createContainerCalls[2][0].endsWith("/labels")).toEqual(true);

            const writeBinaryCalls = storageProviderMock.mock.instances[0].writeBinary.mock.calls;
            expect(writeBinaryCalls.length).toEqual(testAssets.length);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < testAssets.length; i++) {
                expect(writeBinaryCalls[i][0].endsWith(`/JPEGImages/Asset ${i + 1}.jpg`)).toEqual(true);
            }

            const writeTextFileCalls = storageProviderMock.mock.instances[0].writeText.mock.calls as any[];
            // We write an annotation txt file per asset and 1 names file
            expect(writeTextFileCalls.length).toEqual(testAssets.length + 1);

            const assetServiceMock = AssetService as any;
            const assetServiceLastIndex = assetServiceMock.mock.instances.length - 1;
            const getAssetMetadataResults =
                await Promise.all(
                    (assetServiceMock.mock.instances[assetServiceLastIndex]
                        .getAssetMetadata.mock.results as any[]).map((x) => x.value),
                );
            expect(getAssetMetadataResults.length).toEqual(testAssets.length);

            // tslint:disable-next-line:prefer-for-of
            for (let assetIndex = 0; assetIndex < testAssets.length; assetIndex++) {
                const asset = testAssets[assetIndex];
                const assetId = assetIndex + 1;
                const labelIndex =
                    writeTextFileCalls.findIndex((args) => args[0].endsWith(`/labels/Asset ${assetId}.txt`));
                expect(labelIndex).toBeGreaterThanOrEqual(0);
                const labelRecords = writeTextFileCalls[labelIndex][1].split("\n");

                const isAssetIdOdd = assetId % 2 === 0;

                const assetMetadataResultIndex =
                    getAssetMetadataResults.findIndex((args) => args.asset.id === `asset-${assetId}`);
                expect(assetMetadataResultIndex).toBeGreaterThanOrEqual(0);
                const regions = getAssetMetadataResults[assetMetadataResultIndex].regions;
                expect(labelRecords.length).toEqual(regions.length);

                // tslint:disable-next-line:prefer-for-of
                for (let recordIndex = 0; recordIndex < labelRecords.length; recordIndex++) {
                    const fields = labelRecords[recordIndex].split(" ");
                    expect(fields.length).toEqual(5);

                    const bbox = regions[recordIndex].boundingBox;

                    const oddId = recordIndex === 0 ? 1 : 2;
                    const evenId = recordIndex === 0 ? 2 : 1;

                    expect(fields[0]).toEqual((recordIndex === 2 ? 3 : isAssetIdOdd ? oddId : evenId).toString());
                    expect(fields[1]).toEqual(((2 * bbox.left + bbox.width) / (2 * asset.size.width)).toString());
                    expect(fields[2]).toEqual(((2 * bbox.top + bbox.height) / (2 * asset.size.height)).toString());
                    expect(fields[3]).toEqual((bbox.width / asset.size.width).toString());
                    expect(fields[4]).toEqual((bbox.height / asset.size.height).toString());
                }
            }

            expect(writeTextFileCalls[0][0].endsWith("yolo.names")).toEqual(true);
            const nameRecords = writeTextFileCalls[0][1].split("\n");
            expect(nameRecords.length).toEqual(testProject.tags.length);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < testProject.tags.length; i++) {
                expect(nameRecords[i]).toEqual(`Tag ${i}`);
            }
        });

        it("Exports only visited assets (includes tagged)", async () => {
            const options: IExportProviderOptions = {
                assetState: ExportAssetState.Visited,
            };

            const testProject = { ...baseTestProject };
            testProject.tags = MockFactory.createTestTags(4);

            const exportProvider = new YOLOExportProvider(testProject, options);
            await exportProvider.export();

            const storageProviderMock = LocalFileSystemProxy as any;
            const createContainerCalls = storageProviderMock.mock.instances[0].createContainer.mock.calls;

            expect(createContainerCalls.length).toEqual(3);
            expect(createContainerCalls[1][0].endsWith("/JPEGImages")).toEqual(true);
            expect(createContainerCalls[2][0].endsWith("/labels")).toEqual(true);

            const numWriteBinaryCalls = Object.keys(testProject.assets).length;

            const writeBinaryCalls = storageProviderMock.mock.instances[0].writeBinary.mock.calls;
            expect(writeBinaryCalls.length).toEqual(numWriteBinaryCalls);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < numWriteBinaryCalls; i++) {
                expect(writeBinaryCalls[i][0].endsWith(`/JPEGImages/Asset ${i + 1}.jpg`)).toEqual(true);
            }

            const writeTextFileCalls = storageProviderMock.mock.instances[0].writeText.mock.calls as any[];
            expect(writeTextFileCalls.length).toEqual(numWriteBinaryCalls + 1);

            const assetServiceMock = AssetService as any;
            const assetServiceLastIndex = assetServiceMock.mock.instances.length - 1;
            const getAssetMetadataResults =
                await Promise.all(
                    (assetServiceMock.mock.instances[assetServiceLastIndex]
                        .getAssetMetadata.mock.results as any[]).map((x) => x.value),
                );
            expect(getAssetMetadataResults.length).toEqual(numWriteBinaryCalls);

            // tslint:disable-next-line:prefer-for-of
            for (let assetIndex = 0; assetIndex < numWriteBinaryCalls; assetIndex++) {
                const asset = testAssets[assetIndex];
                const assetId = assetIndex + 1;
                const labelIndex =
                    writeTextFileCalls.findIndex((args) => args[0].endsWith(`/labels/Asset ${assetId}.txt`));
                expect(labelIndex).toBeGreaterThanOrEqual(0);
                const labelRecords = writeTextFileCalls[labelIndex][1].split("\n");

                const isAssetIdOdd = assetId % 2 === 0;

                const assetMetadataResultIndex =
                    getAssetMetadataResults.findIndex((args) => args.asset.id === `asset-${assetId}`);
                expect(assetMetadataResultIndex).toBeGreaterThanOrEqual(0);
                const regions = getAssetMetadataResults[assetMetadataResultIndex].regions;
                expect(labelRecords.length).toEqual(regions.length);

                // tslint:disable-next-line:prefer-for-of
                for (let recordIndex = 0; recordIndex < labelRecords.length; recordIndex++) {
                    const fields = labelRecords[recordIndex].split(" ");
                    expect(fields.length).toEqual(5);

                    const bbox = regions[recordIndex].boundingBox;

                    const oddId = recordIndex === 0 ? 1 : 2;
                    const evenId = recordIndex === 0 ? 2 : 1;

                    expect(fields[0]).toEqual((recordIndex === 2 ? 3 : isAssetIdOdd ? oddId : evenId).toString());
                    expect(fields[1]).toEqual(((2 * bbox.left + bbox.width) / (2 * asset.size.width)).toString());
                    expect(fields[2]).toEqual(((2 * bbox.top + bbox.height) / (2 * asset.size.height)).toString());
                    expect(fields[3]).toEqual((bbox.width / asset.size.width).toString());
                    expect(fields[4]).toEqual((bbox.height / asset.size.height).toString());
                }
            }

            expect(writeTextFileCalls[0][0].endsWith("yolo.names")).toEqual(true);
            const nameRecords = writeTextFileCalls[0][1].split("\n");
            expect(nameRecords.length).toEqual(testProject.tags.length);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < testProject.tags.length; i++) {
                expect(nameRecords[i]).toEqual(`Tag ${i}`);
            }
        });

        it("Exports only tagged assets", async () => {
            const options: IExportProviderOptions = {
                assetState: ExportAssetState.Tagged,
            };

            const testProject = { ...baseTestProject };
            testProject.tags = MockFactory.createTestTags(4);

            const exportProvider = new YOLOExportProvider(testProject, options);
            await exportProvider.export();

            const storageProviderMock = LocalFileSystemProxy as any;
            const createContainerCalls = storageProviderMock.mock.instances[0].createContainer.mock.calls;

            expect(createContainerCalls.length).toEqual(3);
            expect(createContainerCalls[1][0].endsWith("/JPEGImages")).toEqual(true);
            expect(createContainerCalls[2][0].endsWith("/labels")).toEqual(true);

            const numWriteBinaryCalls = 2;

            const writeBinaryCalls = storageProviderMock.mock.instances[0].writeBinary.mock.calls;
            expect(writeBinaryCalls.length).toEqual(numWriteBinaryCalls);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < 2; i++) {
                expect(writeBinaryCalls[i][0].endsWith(`/JPEGImages/Asset ${i + 1}.jpg`)).toEqual(true);
            }

            const writeTextFileCalls = storageProviderMock.mock.instances[0].writeText.mock.calls as any[];
            expect(writeTextFileCalls.length).toEqual(numWriteBinaryCalls + 1);

            const assetServiceMock = AssetService as any;
            const assetServiceLastIndex = assetServiceMock.mock.instances.length - 1;
            const getAssetMetadataResults =
                await Promise.all(
                    (assetServiceMock.mock.instances[assetServiceLastIndex]
                        .getAssetMetadata.mock.results as any[]).map((x) => x.value),
                );
            expect(getAssetMetadataResults.length).toEqual(numWriteBinaryCalls);

            // tslint:disable-next-line:prefer-for-of
            for (let assetIndex = 0; assetIndex < numWriteBinaryCalls; assetIndex++) {
                const asset = testAssets[assetIndex];
                const assetId = assetIndex + 1;
                const labelIndex =
                    writeTextFileCalls.findIndex((args) => args[0].endsWith(`/labels/Asset ${assetId}.txt`));
                expect(labelIndex).toBeGreaterThanOrEqual(0);
                const labelRecords = writeTextFileCalls[labelIndex][1].split("\n");

                const isAssetIdOdd = assetId % 2 === 0;

                const assetMetadataResultIndex =
                    getAssetMetadataResults.findIndex((args) => args.asset.id === `asset-${assetId}`);
                expect(assetMetadataResultIndex).toBeGreaterThanOrEqual(0);
                const regions = getAssetMetadataResults[assetMetadataResultIndex].regions;
                expect(labelRecords.length).toEqual(regions.length);

                // tslint:disable-next-line:prefer-for-of
                for (let recordIndex = 0; recordIndex < labelRecords.length; recordIndex++) {
                    const fields = labelRecords[recordIndex].split(" ");
                    expect(fields.length).toEqual(5);

                    const bbox = regions[recordIndex].boundingBox;

                    const oddId = recordIndex === 0 ? 1 : 2;
                    const evenId = recordIndex === 0 ? 2 : 1;

                    expect(fields[0]).toEqual((recordIndex === 2 ? 3 : isAssetIdOdd ? oddId : evenId).toString());
                    expect(fields[1]).toEqual(((2 * bbox.left + bbox.width) / (2 * asset.size.width)).toString());
                    expect(fields[2]).toEqual(((2 * bbox.top + bbox.height) / (2 * asset.size.height)).toString());
                    expect(fields[3]).toEqual((bbox.width / asset.size.width).toString());
                    expect(fields[4]).toEqual((bbox.height / asset.size.height).toString());
                }
            }

            expect(writeTextFileCalls[0][0].endsWith("yolo.names")).toEqual(true);
            const nameRecords = writeTextFileCalls[0][1].split("\n");
            expect(nameRecords.length).toEqual(testProject.tags.length);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < testProject.tags.length; i++) {
                expect(nameRecords[i]).toEqual(`Tag ${i}`);
            }
        });
    });
});
