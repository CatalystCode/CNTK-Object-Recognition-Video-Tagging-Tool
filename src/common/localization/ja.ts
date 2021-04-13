import { IAppStrings } from "../strings";

/**
 * App Strings for Japanese language from Google Translate
 */
export const japanese: IAppStrings = {
    appName: "ビジュアル オブジェクトタグ付けツール", // Visual Object Tagging Tool,
    common: {
        displayName: "表示名", // Display Name,
        description: "説明", // Description,
        submit: "送信", // Submit,
        cancel: "キャンセル", // Cancel,
        save: "保存", // Save,
        delete: "削除", // Delete,
        provider: "プロバイダー", // Provider,
        homePage: "ホーム ページ",  // Home Page"
    },
    titleBar: {
        help: "ヘルプ", // Help,
        minimize: "最小化", // Minimize,
        maximize: "最大化", // Maximize,
        restore: "戻す", // Restore,
        close: "閉じる", // Close"
    },
    homePage: {
        newProject: "新規プロジェクト", // New Project,
        openLocalProject: {
            title: "ローカルプロジェクトを開く", // Open Local Project"
        },
        openCloudProject: {
            title: "クラウドプロジェクトを開く", // Open Cloud Project,
            selectConnection: "接続を選択", // Select a Connection"
        },
        recentProjects: "最近のプロジェクト", // Recent Projects,
        deleteProject: {
            title: "プロジェクトを削除", // Delete Project,
            confirmation: "プロジェクトを削除してもいいですか", // Are you sure you want to delete project"
        },
        importProject: {
            title: "プロジェクトをインポート",  // Import Project,
            confirmation: "プロジェクト ${project.file.name} プロジェクト設定を v2 形式に変換してもいいですか",
            // Are you sure you want to conver project ${project.file.name} project settings to v2 format?
            // We recommend you backup the project file first."
        },
        messages: {
            deleteSuccess: "${project.name} を削除しました",  // Successfully deleted ${project.name}"
        },
    },
    appSettings: {
        title: "アプリケーション設定", // Application Settings,
        storageTitle: "ストレージ設定", // Storage Settings,
        uiHelp: "設定の保存場所", // Where your settings are stored,
        save: "設定の保存", // Save Settings,
        securityToken: {
            name: {
                title: "名前", // Name"
            },
            key: {
                title: "キー", // Key"
            },
        },
        securityTokens: {
            title: "セキュリティ トークン",  // Security Tokens,
            description: "セキュリティ トークンは、プロジェクト構成内の機密データを暗号化するために使用されます",
            // Security tokens are used to encrypt sensitive data within your project configuration"
        },
        version: {
            description: "バージョン：", // Version"
        },
        commit: "SHA をコミット",  // Commit SHA,
        devTools: {
            description: "問題の診断に役立つアプリケーション開発者ツールを開く", // Open application developer tools to help diagnose issues,
            button: "開発者ツールを開く", // Toggle Developer Tools"
        },
        reload: {
            description: "現在の変更をすべて破棄して、アプリをリロード", // Reload the app discarding all current changes,
            button: "アプリケーションをリフレッシュ", // Refresh Application"
        },
        messages: {
            saveSuccess: "アプリケーション設定を正常に保存しました", // Successfully saved application settings"
        },
    },
    projectSettings: {
        title: "プロジェクト設定", // Project Settings,
        securityToken: {
            title: "セキュリティ トークン",  // Security Token,
            description: "プロジェクト ファイル内の機密データを暗号化するために使用されます",  // Used to encrypt sensitive data within project file"
        },
        useSecurityToken: {
            title: "セキュリティ トークン", // Use Security Token
            description: "有効にすると、プロバイダー構成内の機密データが暗号化されます。",
            // When enabled will encrypt sensitive data within provider configuration
        },
        save: "プロジェクトを保存", // Save Project,
        sourceConnection: {
            title: "ソース接続", // Source Connection,
            description: "アセットのロード元", // Where to load assets fro"
        },
        targetConnection: {
            title: "ターゲット接続", // Target Connection,
            description: "プロジェクトとエクスポートされたデータの保存場所",  // Where to save the project and exported dat"
        },
        videoSettings: {
            title: "ビデオ設定", // Video Settings,
            description: "タグ付けにおけるフレームの抽出割合",  // The rate at which frames are extracted for tagging.,
            frameExtractionRate: "フレーム抽出率（ビデオ 1 秒あたりのフレーム数）",  // Frame Extraction Rate (frames per a video second)"
        },
        addConnection: "接続を追加", // Add Connection,
        messages: {
            saveSuccess: "${project.name} プロジェクト設定を正常に保存しました", // Successfully saved ${project.name} project settings"
        },
    },
    projectMetrics: {
        title: "プロジェクト メトリック",  // Project Metrics,
        assetsSectionTitle: "アセット",  // Assets,
        totalAssetCount: "すべてのアセット",  // Total Assets,
        visitedAssets: "訪問済みアセット（${count}）", // Visited Assets (${count}),
        taggedAssets: "タグ付きアセット（${count}）", // Tagged Assets (${count}),
        nonTaggedAssets: "タグ付けされていないアセット（${count}）", // Not Tagged Assets (${count}),
        nonVisitedAssets: "未訪問ないアセット（${count}）", // Not Visited Assets (${count}),
        tagsSectionTitle: "タグ", // Tags & Labels,
        totalRegionCount: "タグ付けされたすべての領域",  // Total Tagged Regions,
        totalTagCount: "すべてのタグ",  // Total Tags,
        avgTagCountPerAsset: "アセットごとの平均タグ", // Average tags per asset"
    },
    tags: {
        title: "タグ", // Tags,
        placeholder: "新しいタグを追加", // Add new tag,
        editor: "タグ エディター",  // Tags Editor,
        modal: {
            name: "タグ名", // Tag Name,
            color: "タグの色", // Tag Color"
        },
        colors: {
            white: "白",  // White,
            gray: "グレー", // Gray,
            red: "赤", // Red,
            maroon: "マルーン", // Maroon,
            yellow: "黄", // Yellow,
            olive: "オリーブ", // Olive,
            lime: "ライム", // Lime,
            green: "緑", // Green,
            aqua: "アクア", // Aqua,
            teal: "ティール", // Teal,
            blue: "青", // Blue,
            navy: "濃紺",  // Navy,
            fuschia: "赤紫",  // Fuschia,
            purple: "紫",  // Purple"
        },
        warnings: {
            existingName: "タグ名が既に存在します。別の名前を選んでください",  // Tag name already exists. Choose another name,
            emptyName: "空のタグ名を持つことはできません", // Cannot have an empty tag name,
            unknownTagName: "不明",  // Unknown"
        },
        toolbar: {
            add: "新しいタグを追加", // Add new tag,
            search: "タグを検索",  // Search tags,
            edit: "タグを編集", // Edit tag,
            lock: "タグをロック",  // Lock tag,
            moveUp: "タグを上に移動", // Move tag up,
            moveDown: "タグを下に移動", // Move tag down,
            delete: "タグを削除", // Delete tag"
        },
    },
    connections: {
        title: "接続", // Connections,
        details: "接続の詳細", // Connection Details,
        settings: "接続設定", // Connection Settings,
        instructions: "編集する接続を選択してください", // Please select a connection to edit,
        save: "接続を保存", // Save Connection,
        messages: {
            saveSuccess: "${connection.name} を保存しました",  // Successfully saved ${connection.name},
            deleteSuccess: "${connection.name} を削除しました",  // Successfully deleted ${connection.name}"
        },
        imageCorsWarning: "警告：Web ブラウザーで VoTT を使用する場合、CORS（クロス オリジン リソース共有）の制限により、" +
            "Bing 画像検索の一部のアセットが正しくエクスポートされない場合があります。",
        // Warning: When using VoTT in a Web browser, some assets from Bing Image Search may no export
        // correctly due to CORS (Cross Origin Resource Sharing) restrictions.",
        blobCorsWarning: "警告：ソースまたはターゲット接続として使用するには、Azure Blob Storage アカウントで CORS（クロス オリジン リソース共有）を有効にする必要があります。 ",
        // Warning: CORS (Cross Domain Resource Sharing) must be enabled on the Azure Blob Storage account, in order
        // to use i as a source or target connection. More information on enabling CORS can be found in the {0}",
        azDocLinkText: "Azure ドキュメント",  // Azure Documentation.,
        providers: {
            azureBlob: {
                title: "Azure Blob Storage", // Azure Blob Storage,
                description: "",
                accountName: {
                    title: "アカウント名", // Account Name,
                    description: "",
                },
                containerName: {
                    title: "コンテナー名",  // Container Name,
                    description: "",
                },
                sas: {
                    title: "SAS", // SAS,
                    description: "Blob Storage アカウントの認証に使用される共有アクセス署名",
                    // Shared access signature used to authenticate to the blob storage account"
                },
                createContainer: {
                    title: "コンテナーを作成",  // Create Container,
                    description: "Blob Storage コンテナーがまだ存在しない場合は作成します",
                    // Creates the blob container if it does not already exist"
                },
            },
            bing: {
                title: "Bing 画像検索",  // Bing Image Search,
                options: {
                    title: "Bing 画像検索のオプション",
                },  // Bing Image Search Options,
                endpoint: {
                    title: "エンドポイント", // Endpoint
                    description: "Bing検索 Azure リソース内に一覧表示されるエンドポイント",
                },
                apiKey: {
                    title: "APIキー", // API Key
                    description: "Bing検索 Azure リソース内に表示される API キー",
                },
                query: {
                    title: "クエリ", // Query
                    description: "接続の設定に使用する検索クエリ",
                },
                aspectRatio: {
                    title: "アスペクト比", // Aspect Ratio,
                    description: "指定した縦横比で結果をフィルター処理します。",
                    options: {
                        all: "すべて", // All,
                        square: "正方形", // Square,
                        wide: "横長", // Wide,
                        tall: "縦長", // Tall"
                    },
                },
                licenseType: {
                    title: "ライセンスの種類",
                    description: "指定したライセンスの種類で結果をフィルター処理します。",
                    options: {
                        all: "すべて (画像をフィルター処理しません)",
                        any: "任意のライセンスタイプの画像",
                        public: "パブリック ドメイン",
                        share: "無料で共有・使用",
                        shareCommercially: "無料で共有し、商業的に使用する",
                        modify: "変更、共有、使用が無料",
                        modifyCommercially: "無料で変更、共有、および商用で使用",
                    },
                },
                size: {
                    title: "サイズ",
                    description: "結果を指定したサイズでフィルター処理します。",
                    options: {
                        all: "すべての",
                        small: "小 (200x200 未満)",
                        medium: "中 (500x500 未満)",
                        large: "大 (500x500 より大きい)",
                        wallpaper: "壁紙(特大画像)",
                    },
                },
            },
            local: {
                title: "ローカル ファイル システム",  // Local File System,
                folderPath: "フォルダー パス",  // Folder Path,
                selectFolder: "フォルダーを選択", // Select Folder,
                chooseFolder: "フォルダーを選択", // Choose Folder"
            },
        },
    },
    editorPage: {
        width: "幅", // Width,
        height: "高さ", // Height,
        tagged: "タグ付き", // Tagged,
        visited: "訪問済み", // Visited,
        toolbar: {
            select: "選択（V）", // Select (V),
            pan: "パン", // Pan,
            drawRectangle: "長方形を描く", // Draw Rectangle,
            drawPolygon: "ポリゴンを描く", // Draw Polygon,
            copyRectangle: "長方形をコピー", // Copy Rectangle,
            copy: "領域をコピー", // Copy Regions,
            cut: "領域をカット",  // Cut Regions,
            paste: "領域を貼り付け", // Paste Regions,
            removeAllRegions: "すべてのリージョンを削除", // Remove All Regions,
            previousAsset: "前のアセット",  // Previous Asset,
            nextAsset: "次のアセット",  // Next Asset,
            saveProject: "プロジェクトを保存", // Save Project,
            exportProject: "プロジェクトをエクスポート",  // Export Project,
            activeLearning: "アクティブ ラーニング",  // Active Learning"
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "前のタグ付きフレーム", // Previous Tagged Frame"
            },
            nextTaggedFrame: {
                tooltip: "次のタグ付きフレーム", // Next Tagged Frame"
            },
            previousExpectedFrame: {
                tooltip: "前のフレーム", // Previous Frame"
            },
            nextExpectedFrame: {
                tooltip: "次のフレーム", // Next Frame"
            },
        },
        help: {
            title: "ヘルプ メニューの切り替え",  // Toggle Help Menu,
            escape: "ヘルプメニューを抜ける",  // Escape Help Menu"
        },
        assetError: "アセットを読み込めません", // Unable to load asset,
        tags: {
            hotKey: {
                apply: "ホット キーでタグを適用",  // Apply Tag with Hot Key,
                lock: "ホット キーでタグをロック",  // Lock Tag with Hot Key"
            },
            rename: {
                title: "タグの名前を変更", // Rename Tag,
                confirmation: "このタグの名前を変更してもいいですか",
                // Are you sure you want to rename this tag? It will be renamed throughout all assets"
            },
            delete: {
                title: "タグを削除", // Delete Tag,
                confirmation: "このタグを削除してもいいですか。このタグはすべてのアセットで削除され、このタグのみのあらゆる領域も削除されます",
                // Are you sure you want to delete this tag? It will be deleted throughout all assets
                // and any regions where this is the only tag will also be deleted"
            },
        },
        canvas: {
            removeAllRegions: {
                title: "すべてのリージョンを削除", // Remove All Regions,
                confirmation: "すべてのリージョンを削除してもいいですか",  // Are you sure you want to remove all regions"
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "無効な領域が検出されました",  // Invalid region(s) detected,
                description: "1 つ以上の領域にタグが付けられていません。次のアセットに進む前に、すべての領域をタグ付けしてください。",
                // 1 or more regions have not been tagged. Ensure all regions ar tagged before continuing to next asset"
            },
        },
    },
    export: {
        title: "エクスポート",  // Export,
        settings: "エクスポート設定", // Export Settings,
        saveSettings: "エクスポート設定を保存", // Save Export Settings,
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "アセットの状態",  // Asset State,
                        description: "エクスポートに含めるアセット", // Which assets to include in the export,
                        options: {
                            all: "すべてのアセット",  // All Assets,
                            visited: "訪問済みのアセットのみ", // Only Visited Assets,
                            tagged: "タグ付きアセットのみ", // Only tagged Assets"
                        },
                    },
                    testTrainSplit: {
                        title: "テスト/トレーニング分割", // Test / Train Split,
                        description: "エクスポートされたデータに使用するテスト/トレーニングの分割",
                        // The test train split to use for exported data"
                    },
                    includeImages: {
                        title: "画像を含める", // Include Images,
                        description: "ターゲット接続にバイナリ画像アセットを含めるかどうか",
                        // Whether or not to include binary image assets in target connection"
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON", // VoTT JSO"
            },
            azureCV: {
                displayName: "Azure Custom Vision サービス",  // Azure Custom Vision Service,
                regions: {
                    australiaEast: "オーストラリア東部", // Australia East,
                    centralIndia: "インド中部", // Central India,
                    eastUs: "米国東部", // East US,
                    eastUs2: "米国東部 2",  // East US 2,
                    japanEast: "東日本", // Japan East,
                    northCentralUs: "米国中北部", // North Central US,
                    northEurope: "北ヨーロッパ", // North Europe,
                    southCentralUs: "アメリカ中南部", // South Central US,
                    southeastAsia: "東南アジア", // Southeast Asia,
                    ukSouth: "英国南部", // UK South,
                    westUs2: "米国西部 2",  // West US 2,
                    westEurope: "西ヨーロッパ", // West Europe"
                },
                properties: {
                    apiKey: {
                        title: "API キー",  // API Key"
                    },
                    region: {
                        title: "領域", // Region,
                        description: "サービスがデプロイされている Azure リージョン",  // The Azure region where your service is deployed"
                    },
                    classificationType: {
                        title: "分類タイプ", // Classification Type,
                        options: {
                            multiLabel: "画像ごとに複数のタグ", // Multiple tags per image,
                            multiClass: "画像ごとに単一のタグ", // Single tag per image"
                        },
                    },
                    name: {
                        title: "プロジェクト名", // Project Name"
                    },
                    description: {
                        title: "プロジェクトの説明", // Project Description"
                    },
                    domainId: {
                        title: "ドメイン", // Domain"
                    },
                    newOrExisting: {
                        title: "新規または既存プロジェクト",  // New or Existing Project,
                        options: {
                            new: "新規プロジェクト",  // New Project,
                            existing: "既存プロジェクト",  // Existing Project"
                        },
                    },
                    projectId: {
                        title: "プロジェクト名", // Project Name"
                    },
                    projectType: {
                        title: "プロジェクトの種類", // Project Type,
                        options: {
                            classification: "分類", // Classification,
                            objectDetection: "物体検出", // Object Detection"
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "TensorFlow レコード",  // Tensorflow Record"
            },
            pascalVoc: {
                displayName: "Pascal VOC",  // Pascal VOC,
                exportUnassigned: {
                    title: "未割り当てをエクスポート",  // Export Unassigned,
                    description: "エクスポートされたデータに未割り当てのタグを含めるかどうか",
                    // Whether or not to include unassigned tags in exported data"
                },
            },
            yolo: {
                displayName: "YOLO",  // YOLO
            },
            cntk: {
                displayName: "Microsoft Cognitive Toolkit（CNTK）", // Microsoft Cognitive Toolkit (CNTK)"
            },
            csv: {
                displayName: "コンマ区切り値（CSV）", // Comma Separated Values (CSV)"
            },
        },
        messages: {
            saveSuccess: "エクスポート設定を保存しました", // Successfully saved export settings"
        },
    },
    activeLearning: {
        title: "アクティブ ラーニング",  // Active Learning,
        form: {
            properties: {
                modelPathType: {
                    title: "モデル プロバイダー",  // Model Provider,
                    description: "トレーニング モデルのロード元",  // Where to load the training model from,
                    options: {
                        preTrained: "事前トレーニング済みの Coco SSD", // Pre-trained Coco SSD,
                        customFilePath: "カスタム（ファイル パス）",  // Custom (File path),
                        customWebUrl: "カスタム（URL）",  // Custom (Url)"
                    },
                },
                autoDetect: {
                    title: "自動検出", // Auto Detect,
                    description: "アセット間を移動するときに自動的に予測を行うかどうか",
                    // Whether or not to automatically make predictions as you navigate between assets"
                },
                modelPath: {
                    title: "モデル パス",  // Model path,
                    description: "ローカル ファイル システムからモデルを選択します",  // Select a model from your local file system"
                },
                modelUrl: {
                    title: "モデルURL", // Model URL,
                    description: "公開 Web URL からモデルを読み込む",  // Load your model from a public web URL"
                },
                predictTag: {
                    title: "予測タグ", // Predict Tag,
                    description: "予測にタグを自動的に含めるかどうか", // Whether or not to automatically include tags in predictions"
                },
            },
        },
        messages: {
            loadingModel: "アクティブ ラーニング モデルを読み込んでいます...", // Loading active learning model...,
            errorLoadModel: "アクティブ ラーニング モデルの読み込みエラー", // Error loading active learning model,
            saveSuccess: "アクティブ ラーニング設定を保存しました",  // Successfully saved active learning settings"
        },
    },
    profile: {
        settings: "プロファイル設定", // Profile Settings"
    },
    errors: {
        unknown: {
            title: "不明なエラー", // Unknown Error,
            message: "アプリで不明なエラーが発生しました。", // The app encountered an unknown error. Please try again"
        },
        projectUploadError: {
            title: "ファイルのアップロード エラー",  // Error Uploading File,
            message: "ファイルのアップロード中にエラーが発生しました。",
            // There was an error uploading the file. Please verify the file is of the correct format and try again."
        },
        genericRenderError: {
            title: "アプリケーションの読み込みエラー", // Error Loading Application,
            message: "アプリケーションのレンダリング中にエラーが発生しました。",
            // An error occured while rendering the application. Please try again"
        },
        projectInvalidSecurityToken: {
            title: "プロジェクト ファイルの読み込みエラー",  // Error loading project file,
            message: "プロジェクトが参照するセキュリティ トークンが無効です。",
            // The security token referenced by the project is invalid.
            // Verify that the security token for the project has been set correctly within your application settings"
        },
        projectInvalidJson: {
            title: "プロジェクト ファイルの解析エラー",  // Error parsing project file,
            message: "選択したプロジェクト ファイルに有効なJSONが含まれていません。",
            // The selected project files does not contain valid JSON Please check the file any try again."
        },
        projectDeleteError: {
            title: "プロジェクトの削除エラー", // Error deleting project,
            message: "プロジェクトの削除中にエラーが発生しました。",
            // An error occured while deleting the project.
            // Validate the project file an security token exist and try again"
        },
        securityTokenNotFound: {
            title: "プロジェクト ファイルの読み込みエラー",  // Error loading project file,
            message: "プロジェクトが参照するセキュリティ トークンが現在のアプリケーション設定に見つかりません。",
            // The security token referenced by the project cannot be found in your current application settings.
            // Verify the security token exists and try to reload the project."
        },
        canvasError: {
            title: "キャンバスの読み込みエラー", // Error loading canvas,
            message: "キャンバスのロード中にエラーが発生しました。プロジェクトのアセットを確認して、再試行してください。",
            // There was an error loading the canvas, check the project's assets and try again."
        },
        importError: {
            title: "V1 プロジェクトのインポート エラー",  // Error importing V1 project,
            message: "V1 プロジェクトのインポート中にエラーが発生しました。",
            // There was an error importing the V1 project. Check the project file and try again"
        },
        pasteRegionTooBigError: {
            title: "領域の貼り付けエラー", // Error pasting region,
            message: "このアセットに対して領域が大きすぎます。別のリージョンをコピーしてください",
            // Region too big for this asset. Try copying another region"
        },
        exportFormatNotFound: {
            title: "プロジェクトのエクスポート エラー",  // Error exporting project,
            message: "プロジェクトにエクスポート形式がありません。",
            // Project is missing export format. Please select an export format in the export setting page."
        },
        activeLearningPredictionError: {
            title: "アクティブ ラーニングのエラー",  // Active Learning Error,
            message: "現在のアセットの領域を予測中にエラーが発生しました。",
            // An error occurred while predicting regions in the current asset.
            // Please verify your active learning configuration and try again"
        },
    },
};
