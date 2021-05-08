import { IAppStrings } from "../strings";

/**
 * App Strings for German language
 */
export const german: IAppStrings = {
    appName: "Visual Object Tagging Tool",
    common: {
        displayName: "Anzeigename",
        description: "Beschreibung",
        submit: "Abschicken",
        cancel: "Abbrechen",
        save: "Speichern",
        delete: "Entfernen",
        provider: "Anbieter",
        homePage: "Startseite",
    },
    titleBar: {
        help: "Hilfe",
        minimize: "Minimieren",
        maximize: "Maximieren",
        restore: "Wiederherstellen",
        close: "Schließen",
    },
    homePage: {
        newProject: "Neues Projekt",
        openLocalProject: {
            title: "Lokales Projekt öffnen",
        },
        openCloudProject: {
            title: "Cloud Projekt öffnen",
            selectConnection: "Verbindung auswählen",
        },
        recentProjects: "Neuste Projekte",
        deleteProject: {
            title: "Projekt löschen",
            confirmation: "Möchten Sie das Projekt wirklich löschen?",
        },
        importProject: {
            title: "Projekt importieren",
            confirmation: "Möchten Sie die Einstellungen für das Projekt ${project.file.name}" +
                "in das v2 Format konvertieren? Wir empfehlen Ihnen, zuvor ein Backup des Projektes zu machen.",
        },
        messages: {
            deleteSuccess: "${project.name} wurde erfolgreich gelöscht",
        },
    },
    appSettings: {
        title: "Anwendungs-Einstellungen",
        storageTitle: "Speicher-Einstellungen",
        uiHelp: "Wo Ihre Einstellungen gespeichert werden",
        save: "Einstellungen speichern",
        securityToken: {
            name: {
                title: "Name",
            },
            key: {
                title: "Schlüssel",
            },
        },
        securityTokens: {
            title: "Sicherheits-Token",
            description: "Sicherheits-Token verschlüsseln sensible Daten Ihrer Projektkonfiguration",
        },
        version: {
            description: "Version:",
        },
        commit: "Commit SHA",
        devTools: {
            description: "Öffnet Entwicklerwerkzeuge zur Unterstützung bei der Fehlerdiagnose",
            button: "Entwicklerwerkzeuge ein/ausblenden",
        },
        reload: {
            description: "Anwendung neu laden und alle aktuellen Änderungen verwerfen",
            button: "Anwendung neu laden",
        },
        messages: {
            saveSuccess: "Anwendungs-Einstellungen erfolgreich gespeichert",
        },
    },
    projectSettings: {
        title: "Anwendungs-Einstellungen",
        securityToken: {
            title: "Sicherheits-Token",
            description: "Wird zur Verschlüsselung sensibler Daten in Projektdateien verwendet",
        },
        save: "Projekt speichern",
        sourceConnection: {
            title: "Datenquelle",
            description: "Speicherort der zu ladenden Inhalte",
        },
        targetConnection: {
            title: "Datenzielort",
            description: "Speicherort des Projektes und der exportierten Dateien",
        },
        videoSettings: {
            title: "Video Einstellungen",
            description: "Die Rate, mit der Frames für das Tagging extrahiert werden.",
            frameExtractionRate: "Bildextraktionsrate (Bilder pro Videosekunde)",
        },
        addConnection: "Verbindung hinzufügen",
        messages: {
            saveSuccess: "Projekt-Einstellungen für ${project.name} erfolgreich gespeichert",
        },
    },
    projectMetrics: {
        title: "Projekt-Metriken",
        assetsSectionTitle: "Objekte",
        totalAssetCount: "Objektanzahl",
        visitedAssets: "Angeschaute Objekte (${count})",
        taggedAssets: "Objekte mit Tags (${count})",
        nonTaggedAssets: "Objekte ohne Tags (${count})",
        nonVisitedAssets: "Nicht angeschaute Objekte (${count})",
        tagsSectionTitle: "Tags & Label",
        totalRegionCount: "Regionen mit Tags",
        totalTagCount: "Tags",
        avgTagCountPerAsset: "Tags pro Objekt",
    },
    tags: {
        title: "Tags",
        placeholder: "Neuen Tag hinzufügen",
        editor: "Tag Editor",
        modal: {
            name: "Tag Name",
            color: "Tag Farbe",
        },
        colors: {
            white: "Weiß",
            gray: "Grau",
            red: "Rot",
            maroon: "Kastanienbraun",
            yellow: "Gelb",
            olive: "Olivgrün",
            lime: "Gelbgrün",
            green: "Grün",
            aqua: "Grünblau",
            teal: "Blaugrün",
            blue: "Blau",
            navy: "Marineblau",
            fuschia: "Magenta",
            purple: "Lila",
        },
        warnings: {
            existingName: "Tag Name existiert bereits. Wählen Sie einen anderen Namen",
            emptyName: "Tag Name kann nicht leer sein",
            unknownTagName: "Unbekannt",
        },
        toolbar: {
            add: "Neuer Tag",
            search: "Tags suchen",
            edit: "Tag bearbeiten",
            lock: "Tag einfrieren",
            moveUp: "Tag nach oben verschieben",
            moveDown: "Tag nach unten verschieben",
            delete: "Tag entfernen",
        },
    },
    connections: {
        title: "Verbindungen",
        details: "Verbinungs-Details",
        settings: "Verbindungs-Einstellungen",
        instructions: "Bitte wählen Sie eine Verbindung zum Bearbeiten aus",
        save: "Verbindung speichern",
        messages: {
            saveSuccess: "${connection.name} erfolgreich gespeichert",
            deleteSuccess: "${connection.name} erfolgreich entfernt",
        },
        imageCorsWarning: "Warnung: Wenn VoTT im Internetbrowser verwendet wird, können einige Objekte von Bing Bilder \
                          ggf. wegen CORS (Cross Origin Resource Sharing) Beschränkungen nicht exportiert werden.",
        blobCorsWarning: "Warnung: CORS (Cross Domain Resource Sharing) muss im Azure Blob Speicher aktiviert sein, \
                          damit es als Quell- oder Zielverbindung genutzt werden kann. Mehr Informationen zum \
                          Aktivieren von CORS finden Sie hier: {0}",
        azDocLinkText: "Azure Documentation.",
        providers: {
            azureBlob: {
                title: "Azure Blob Speicher",
                description: "",
                accountName: {
                    title: "Account Name",
                    description: "",
                },
                containerName: {
                    title: "Container Name",
                    description: "",
                },
                sas: {
                    title: "SAS",
                    description: "Shared access signature zur Authentifizierung mit dem Blob Speicher Account",
                },
                createContainer: {
                    title: "Container erstellen",
                    description: "Erstellt den Blob Container wenn er nicht schon existiert",
                },
            },
            bing: {
                title: "Bing Bildersuche",
                options: "Bing Bildersuche Optionen",
                apiKey: "API Schlüssel",
                query: "Query",
                aspectRatio: {
                    title: "Aspect Ratio",
                    all: "All",
                    square: "Square",
                    wide: "Wide",
                    tall: "Tall",
                },
            },
            local: {
                title: "Lokales Dateisystem",
                folderPath: "Ordner Pfad",
                selectFolder: "Ordner markieren",
                chooseFolder: "Ordner auswählen",
            },
        },
    },
    editorPage: {
        width: "Breite",
        height: "Höhe",
        tagged: "Getagged",
        visited: "Angesehen",
        toolbar: {
            select: "Auswählen (V)",
            pan: "verschieben",
            drawRectangle: "Rechteck zeichnen",
            drawPolygon: "Polygon zeichnen",
            copyRectangle: "Rechteck kopieren",
            copy: "Regionen kopieren",
            cut: "Regionen ausschneiden",
            paste: "Regionen einfügen",
            removeAllRegions: "Alle Regionen entfernen",
            previousAsset: "Vorheriges Objekt",
            nextAsset: "Nächstes Objekt",
            saveProject: "Projekt speichern",
            exportProject: "Projekt exportieren",
            activeLearning: "Active Learning",
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "Vorheriges getaggtes Frame",
            },
            nextTaggedFrame: {
                tooltip: "Nächstes getaggtes Frame",
            },
            previousExpectedFrame: {
                tooltip: "Vorheriges Frame",
            },
            nextExpectedFrame: {
                tooltip: "Nächstes Frame",
            },
        },
        help: {
            title: "Hilfe Menü anzeigen",
            escape: "Hilfe Menü beenden",
        },
        assetError: "Objekt kann nicht geladen werden",
        tags: {
            hotKey: {
                apply: "Tag mit Hot Key anwenden",
                lock: "Tag mit Hot Key einfrieren",
            },
            rename: {
                title: "Tag umbenennen",
                confirmation: "Möchten Sie den Tag wirklich umbenennen? Er wird in allen Objekten umbenannt.",
            },
            delete: {
                title: "Tag entfernen",
                confirmation: "Sind Sie sicher, dass Sie den Tag löschen möchten? Er wird in allen Objekten gelöscht \
                und jede Region die nur diesen einen Tag hat, wird gelöscht",
            },
        },
        canvas: {
            removeAllRegions: {
                title: "Alle Regionen entfernen",
                confirmation: "Sind Sie sicher, dass Sie alle Regionen entfernen möchten?",
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "Ungültige Region(en) entdeckt",
                description: "1 oder mehr Regionen haben keinen Tag.  Alle Regionen müssen getaggt sein, \
                    bevor Sie zum nächsten Objekt gehen.",
            },
        },
    },
    export: {
        title: "Exportieren",
        settings: "Einstellungen exportieren",
        saveSettings: "Export Einstellugnen speichern",
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "Objekt Status",
                        description: "Welche Objekte exportiert werden sollen",
                        options: {
                            all: "Alle Objekte",
                            visited: "Nur besuchte Objekte",
                            tagged: "Nur Objekte mit Tag",
                        },
                    },
                    testTrainSplit: {
                        title: "Test / Training Einteilung",
                        description: "Die Test und Training Einteilung für die zu exportierenden Dateien",
                    },
                    includeImages: {
                        title: "Bilder einschließen",
                        description: "Ob die binären Bildobjekte auch in die Zielverbindung gespeichert werden sollen",
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON",
            },
            azureCV: {
                displayName: "Azure Custom Vision Service",
                regions: {
                    australiaEast: "Australia East",
                    centralIndia: "Central India",
                    eastUs: "East US",
                    eastUs2: "East US 2",
                    japanEast: "Japan East",
                    northCentralUs: "North Central US",
                    northEurope: "North Europe",
                    southCentralUs: "South Central US",
                    southeastAsia: "Southeast Asia",
                    ukSouth: "UK South",
                    westUs2: "West US 2",
                    westEurope: "West Europe",
                },
                properties: {
                    apiKey: {
                        title: "API Schlüssel",
                    },
                    region: {
                        title: "Region",
                        description: "Die Azure in der Ihr Dienst bereitgestellt wird",
                    },
                    classificationType: {
                        title: "Klassifikationstyp",
                        options: {
                            multiLabel: "Mehrere Tags pro Bild",
                            multiClass: "Einzelner Tag pro Bild",
                        },
                    },
                    name: {
                        title: "Projekt Name",
                    },
                    description: {
                        title: "Projekt Beschreibung",
                    },
                    domainId: {
                        title: "Domain",
                    },
                    newOrExisting: {
                        title: "Neues oder bestehendes Projekt",
                        options: {
                            new: "Neues Projekt",
                            existing: "Bestehendes Projekt",
                        },
                    },
                    projectId: {
                        title: "Projekt Name",
                    },
                    projectType: {
                        title: "Projekt Type",
                        options: {
                            classification: "Klassifikation",
                            objectDetection: "Objekterkennung",
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "Tensorflow Records",
            },
            pascalVoc: {
                displayName: "Pascal VOC",
                exportUnassigned: {
                    title: "Nicht zugewiesene Tags exportieren",
                    description: "Ob nicht zugewiesene Tags mit exportiert werden sollen",
                },
            },
            cntk: {
                displayName: "Microsoft Cognitive Toolkit (CNTK)",
            },
            csv: {
                displayName: "Komma getrennte Werte (CSV)",
            },
        },
        messages: {
            saveSuccess: "Export-Einstellungen erfolgreich gespeichert",
        },
    },
    activeLearning: {
        title: "Active Learning",
        form: {
            properties: {
                modelPathType: {
                    title: "Modell-Anbieter",
                    description: "Von wo das Modell geladen werden soll",
                    options: {
                        preTrained: "Pre-trained Coco SSD",
                        customFilePath: "Nutzerdefiniert (Dateipfad)",
                        customWebUrl: "Nutzerdefiniert (Url)",
                    },
                },
                autoDetect: {
                    title: "Automatische Erkennung",
                    description: "Beim Navigieren zwischen Anlagen automatisch Vorhersagen machen",
                },
                modelPath: {
                    title: "Modellpfad",
                    description: "Wählen Sie ein Modell aus Ihrem lokalen Dateisystem aus",
                },
                modelUrl: {
                    title: "Modell URL",
                    description: "Laden Sie Ihr Modell von einer öffentlichen Web-URL",
                },
                predictTag: {
                    title: "Tag vorhersagen",
                    description: "Ob Tags automatisch in Vorhersagen einbezogen werden sollen oder nicht",
                },
            },
        },
        messages: {
            loadingModel: "Active Learning Modell wird geladen...",
            errorLoadModel: "Fehler beim Laden des Active Learning Modells",
            saveSuccess: "Active Learning Einstellungen erfolgreich gespeichert",
        },
    },
    profile: {
        settings: "Profil-Einstellungen",
    },
    errors: {
        unknown: {
            title: "Unbekannter Fehler",
            message: "Die Anwendung ist auf einen unbekannten Fehler gestoßen. Bitte versuchen Sie es erneut.",
        },
        projectUploadError: {
            title: "Fehler beim Hochladen der Datei",
            message: `Beim Hochladen der Datei ist ein Fehler aufgetreten.
                Bitte überprüfen Sie, ob die Datei das richtige Format hat und versuchen Sie es erneut.`,
        },
        genericRenderError: {
            title: "Fehler beim Laden der Anwendung",
            message: "Beim Rendern der Anwendung ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut",
        },
        projectInvalidSecurityToken: {
            title: "Fehler beim Laden der Projektdatei",
            message: `Der Sicherheits-Token der im Projekt referenziert wird ist ungültig.
                Prüfen Sie, dass der Sicherheits-Token richtig in den Programmeinstellungen hinterlegt ist`,
        },
        projectInvalidJson: {
            title: "Fehler beim Lesen der Projektdatei",
            message: "Das ist keine gültige JSON Datei. Bitte prüfen Sie die Datei und versuchen es erneut.",
        },
        projectDeleteError: {
            title: "Fehler beim Löschen des Projektes",
            message: `Es gab einen Fehler beim Löschen des Projektes.
                Prüfen Sie, ob die Projektdatei und der Sicherheitstoken existieren und versuchen es erneut`,
        },
        securityTokenNotFound: {
            title: "Fehler beim Laden der Projektdatei",
            message: `Der Sicherheitstoken die in dem Projekt referenziert ist, kann nicht gefunden werden.
                Stellen Sie sicher, dass der Sicherheitstoken existiert und versuchen es erneut`,
        },
        canvasError: {
            title: "Fehler beim Laden des Canvas",
            message: "Es gab einen Fehler beim Laden des Canvas, prüfen Sie die Objekte und versuchen es erneut.",
        },
        importError: {
            title: "Fehler beim Importieren des V1 Projektes",
            message: "Fehler beim Importieren des V1 Projektes. Prüfen Sie die Projektdatei und versuchen es erneut",
        },
        pasteRegionTooBigError: {
            title: "Fehler beim Region Einfügen",
            message: "Region zu groß für dieses Objekt. Versuchen Sie eine andere Region zu kopieren",
        },
        exportFormatNotFound: {
            title: "Fehler beim Exportieren des projektes",
            message: "Dem Projekt fehlt das Exportformat.  Bitte wählen Sie ein Exportformat in den Einstellungen aus.",
        },
        activeLearningPredictionError: {
            title: "Active Learning Error",
            message: "Ein Fehler ist beim vorhersagen einer Region im aktuellen Objekt aufgetreten. \
                Prüfen Sie die Active Learning Konfiguration und versuchen es erneut",
        },
    },
};
