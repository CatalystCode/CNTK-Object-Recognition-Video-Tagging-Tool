import { strings, addLocValues, IAppStrings, interpolate, interpolateJson } from "./strings";
import { english } from "./localization/en-us";
import { spanish } from "./localization/es-cl";
import { japanese } from "./localization/ja";
import { chinesetw } from "./localization/zh-tw";
import { korean } from "./localization/ko-kr";
import { chinese } from "./localization/zh-ch";
import { german } from "./localization/de-de";

const languages = [
  "en",
  "es",
  "ja",
  "tw",
  "ko",
  "ch",
  "de",
];

describe("Localization tests", () => {

    function getLanguageJson(language: string): IAppStrings {
        return {
            en: english,
            es: spanish,
            ja: japanese,
            tw: chinesetw,
            ko: korean,
            ch: chinese,
            de: german,
        }[language];
    }

    describe("JSON Form Schemas", () => {
        it("Connection Form", () => {
            for (const language of languages) {
                const languageJson = getLanguageJson(language);
                // tslint:disable-next-line:no-var-requires
                const formJson = require("../react/components/pages/connections/connectionForm.json");
                strings.setLanguage(language);
                const lConn = languageJson.connections;
                const common = languageJson.common;
                const newFormJson = addLocValues(formJson);
                const formProps = newFormJson.properties;

                expect(formProps.name.title).toEqual(common.displayName);
                expect(formProps.description.title).toEqual(common.description);
                expect(formProps.providerType.title).toEqual(common.provider);
            }
        });

        it("App Settings Form", () => {
            for (const language of languages) {
                const languageJson = getLanguageJson(language);
                // tslint:disable-next-line:no-var-requires
                const formJson = require("../react/components/pages/appSettings/appSettingsForm.json");
                strings.setLanguage(language);
                const appSettings = languageJson.appSettings;
                const newFormJson = addLocValues(formJson);
                const formProps = newFormJson.properties;
                const securityTokenProps = formProps.securityTokens.items.properties;

                expect(formProps.securityTokens.title).toEqual(appSettings.securityTokens.title);
                expect(formProps.securityTokens.description).toEqual(appSettings.securityTokens.description);
                expect(securityTokenProps.name.title).toEqual(appSettings.securityToken.name.title);
                expect(securityTokenProps.key.title).toEqual(appSettings.securityToken.key.title);
            }
        });

        it("Export Form", () => {
            for (const language of languages) {
                const languageJson = getLanguageJson(language);
                // tslint:disable-next-line:no-var-requires
                const formJson = require("../react/components/pages/export/exportForm.json");
                strings.setLanguage(language);
                const newFormJson = addLocValues(formJson);
                const formProps = newFormJson.properties;
                const common = languageJson.common;

                const lExp = languageJson.export;

                expect(formProps.providerType.title).toEqual(common.provider);
            }
        });

        it("Project Settings Form", () => {
            for (const language of languages) {
                const languageJson = getLanguageJson(language);
                // tslint:disable-next-line:no-var-requires
                const formJson = require("../react/components/pages/projectSettings/projectForm.json");
                strings.setLanguage(language);
                const newFormJson = addLocValues(formJson);
                const formProps = newFormJson.properties;
                const common = languageJson.common;

                const lProj = languageJson.projectSettings;

                expect(formProps.name.title).toEqual(common.displayName);
                expect(formProps.sourceConnection.title).toEqual(lProj.sourceConnection.title);
                expect(formProps.sourceConnection.description).toEqual(lProj.sourceConnection.description);
                expect(formProps.targetConnection.title).toEqual(lProj.targetConnection.title);
                expect(formProps.targetConnection.description).toEqual(lProj.targetConnection.description);
                expect(formProps.videoSettings.title).toEqual(lProj.videoSettings.title);
                expect(formProps.videoSettings.properties.frameExtractionRate.description).toEqual(
                    lProj.videoSettings.description);
                expect(formProps.videoSettings.properties.frameExtractionRate.title).toEqual(
                    lProj.videoSettings.frameExtractionRate);
                expect(formProps.description.title).toEqual(common.description);
                expect(formProps.tags.title).toEqual(languageJson.tags.title);
            }
        });

        it("Interpolate processing string template correctly", () => {
            const template = "Hello ${user.name}, my name is ${bot.handle}";
            const params = {
                user: {
                    name: "John Doe",
                },
                bot: {
                    handle: "VoTT bot",
                },
            };

            const result = interpolate(template, params);
            expect(result).toEqual(`Hello ${params.user.name}, my name is ${params.bot.handle}`);
        });

        it("Interpolate processes a JSON object template correctly", () => {
            const template = {
                user: {
                    firstName: "${user.firstName}",
                    lastName: "${user.lastName}",
                },
                address: {
                    street: "${address.street}",
                    city: "${address.city}",
                    state: "${address.state}",
                    zipCode: "${address.zipCode}",
                },
            };
            const params = {
                user: {
                    firstName: "John",
                    lastName: "Doe",
                },
                address: {
                    street: "1 Microsoft Way",
                    city: "Redmond",
                    state: "WA",
                    zipCode: "98052",
                },
            };

            const result = interpolateJson(template, params);
            expect(result).toEqual(params);
        });
    });
});
