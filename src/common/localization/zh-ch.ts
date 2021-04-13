import { IAppStrings } from "../strings";

/**
 * App Strings for Simplified Chinese (zh-ch)
 */
export const chinese: IAppStrings = {
    appName: "视觉对象标记工具", // Visual Object Tagging Tool
    common: {
        displayName: "显示名称", // Display Name
        description: "描述", // Description
        submit: "提交", // Submit
        cancel: "取消", // Cancel
        save: "保存", // Save
        delete: "删除", // Delete
        provider: "提供者", // Provider
        homePage: "主页", // Home Page
    },
    titleBar: {
        help: "帮助", // Help
        minimize: "最小化", // Minimize
        maximize: "最大化", // Maximize
        restore: "复原", // Restore
        close: "关闭", // Close
    },
    homePage: {
        newProject: "新项目", // New Project
        openLocalProject: {
            title: "打开本地项目", // Open Local Project
        },
        openCloudProject: {
            title: "打开云端项目", // Open Cloud Project
            selectConnection: "选择一个连接", // Select a Connection
        },
        recentProjects: "最近的项目", // Recent Projects
        deleteProject: {
            title: "删除项目", // Delete Project
            confirmation: "确定要删除项目吗", // Are you sure you want to delete project
        },
        importProject: {
            title: "导入项目", // Import Project
            confirmation: "您确定要将项目${project.file.name}设置转换为v2格式吗？我们建议您首先备份项目文件。",
            // Are you sure you want to convert project ${project.file.name} project settings to v2 format?
            // We recommend you backup the project file first.
        },
        messages: {
            deleteSuccess: "已成功删除${project.name}", // Successfully deleted ${project.name}
        },
    },
    appSettings: {
        title: "应用程序设置", // Application Settings
        storageTitle: "储存设置", // Storage Settings
        uiHelp: "您的设置储存在哪里", // Where your settings are stored
        save: "保存设置", // Save Settings
        securityToken: {
            name: {
                title: "名称", // Name
            },
            key: {
                title: "密钥", // Key
            },
        },
        securityTokens: {
            title: "安全令牌", // Security Tokens
            description: "安全令牌用于加密项目配置中的敏感数据",
            // Security tokens are used to encrypt sensitive data within your project configuration
        },
        version: {
            description: "版本：", // Version:
        },
        commit: "提交SHA", // Commit SHA
        devTools: {
            description: "打开应用程序开发者工具以帮助诊断问题", // Open application developer tools to help diagnose issues
            button: "切换至开发者工具", // Toggle Developer Tools
        },
        reload: {
            description: "重新加载应用，放弃当前所有更改", // Reload the app discarding all current changes
            button: "刷新应用", // Refresh Application
        },
        messages: {
            saveSuccess: "成功保存应用程序设置", // Successfully saved application settings
        },
    },
    projectSettings: {
        title: "项目设定", // Project Settings
        securityToken: {
            title: "安全令牌", // Security Token
            description: "用于加密项目文件中的敏感数据", // Used to encrypt sensitive data within project files
        },
        useSecurityToken: {
            title: "使用安全令牌", // Use Security Token
            description: "启用后将在提供者配置内加密敏感数据",
            // When enabled will encrypt sensitive data within provider configuration
        },
        save: "保存项目", // Save Project
        sourceConnection: {
            title: "源连接", // Source Connection
            description: "从何处加载素材", // Where to load assets from
        },
        targetConnection: {
            title: "目标连接", // Target Connection
            description: "在哪里保存项目和导出数据", // Where to save the project and exported data
        },
        videoSettings: {
            title: "视频设定", // Video Settings
            description: "提取帧以进行标记的速率", // The rate at which frames are extracted for tagging.
            frameExtractionRate: "帧提取率（每视频每秒的帧数）", // Frame Extraction Rate (frames per a video second)
        },
        addConnection: "添加连接", // Add Connection
        messages: {
            saveSuccess: "成功保存${project.name}项目设置", // Successfully saved ${project.name} project settings
        },
    },
    projectMetrics: {
        title: "项目指标", // Project Metrics
        assetsSectionTitle: "素材", // Assets
        totalAssetCount: "素材总数", // Total Assets
        visitedAssets: "已访问素材（${count}）", // Visited Assets (${count})
        taggedAssets: "已标记素材（${count}）", // Tagged Assets (${count})
        nonTaggedAssets: "未标记素材（${count}）", // Not Tagged Assets (${count})
        nonVisitedAssets: "未访问素材（${count}）", // Not Visited Assets (${count})
        tagsSectionTitle: "标记与标签", // Tags & Labels
        totalRegionCount: "标记区域总数", // Total Tagged Regions
        totalTagCount: "标签总数", // Total Tags
        avgTagCountPerAsset: "每个素材的平均标签数", // Average tags per asset
    },
    tags: {
        title: "标签", // Tags
        placeholder: "添加标签", // Add new tag
        editor: "编辑标签", // Tags Editor
        modal: {
            name: "标签名称", // Tag Name
            color: "标签颜色", // Tag Color
        },
        colors: {
            white: "白色", // White
            gray: "灰色", // Gray
            red: "红色", // Red
            maroon: "栗色", // Maroon
            yellow: "黄色", // Yellow
            olive: "橄榄色", // Olive
            lime: "青色", // Lime
            green: "绿色", // Green
            aqua: "浅绿色", // Aqua
            teal: "蓝绿色", // Teal
            blue: "蓝色", // Blue
            navy: "海军蓝色", // Navy
            fuschia: "紫红色", // Fuschia
            purple: "紫色", // Purple
        },
        warnings: {
            existingName: "标签名称已存在。请选择另一个名字", // Tag name already exists. Choose another name
            emptyName: "标签名称不能为空", // Cannot have an empty tag name
            unknownTagName: "未知", // Unknown
        },
        toolbar: {
            add: "添加标签", // Add new tag
            search: "搜索标签", // Search tags
            edit: "编辑标签", // Edit tag
            lock: "锁定标签", // Lock tag
            moveUp: "向上移动标签", // Move tag up
            moveDown: "向下移动标签", // Move tag down
            delete: "删除标签", // Delete tag
        },
    },
    connections: {
        title: "连接数", // Connections
        details: "连接详细信息", // Connection Details
        settings: "连接设定", // Connection Settings
        instructions: "请选择一个连接进行编辑", // Please select a connection to edit
        save: "保存连接", // Save Connection
        messages: {
            saveSuccess: "已成功保存${connection.name}", // Successfully saved ${connection.name}
            deleteSuccess: "已成功删除${connection.name}", // Successfully deleted ${connection.name}
        },
        imageCorsWarning: "警告：在Web浏览器中使用VoTT时，由于CORS（跨源资源共享）限制，来自Bing Image Search的某些素材可能无法正确导出。",
        // Warning: When using VoTT in a Web browser, some assets from Bing Image Search may not export correctly
        // due to CORS (Cross Origin Resource Sharing) restrictions.
        blobCorsWarning: "警告：必须在Azure Blob存储帐户上启用CORS（跨域资源共享），才能将其用作源或目标连接。 {0}中提供了有关启用CORS的更多信息。",
        // Warning: CORS (Cross Domain Resource Sharing) must be enabled on the Azure Blob Storage account,
        // in order to use it as a source or target connection.
        // More information on enabling CORS can be found in the {0}
        azDocLinkText: "Azure文档", // Azure Documentation.
        providers: {
            azureBlob: {
                title: "Azure Blob存储", // Azure Blob Storage
                description: "",
                accountName: {
                    title: "用户名", // Account Name
                    description: "",
                },
                containerName: {
                    title: "容器名称", // Container Name
                    description: "",
                },
                sas: {
                    title: "SAS", // SAS
                    description: "用于验证Blob存储帐户的共享访问签名",
                    // Shared access signature used to authenticate to the blob storage account
                },
                createContainer: {
                    title: "创建容器", // Create Container
                    description: "创建blob容器（如果尚不存在）",
                    // Creates the blob container if it does not already exist
                },
            },
            bing: {
                title: "必应图片搜索", // Bing Image Search
                options: {
                    title: "必应图像搜索选项",
                }, // Bing Image Search Options
                endpoint: {
                    title: "端点",
                    description: "必应搜索 Azure 资源中列出的终结点",
                },
                apiKey: {
                    title: "API密钥",
                    description: "必应搜索 Azure 资源中列出的 API 密钥",
                }, // API Key
                query: {
                    title: "查询",
                    description: "用于填充连接的搜索查询",
                }, // Query
                aspectRatio: {
                    title: "长宽比", // Aspect Ratio
                    description: "按指定的纵横比筛选结果",
                    options: {
                        all: "所有", // All
                        square: "正方形", // Square
                        wide: "宽", // Wide
                        tall: "高", // Tall
                    },
                },
                licenseType: {
                    title: "许可证类型",
                    description: "按指定的许可证类型筛选结果",
                    options: {
                        all: "全部（不过滤任何图像）",
                        any: "任何许可证类型的图像",
                        public: "公有领域",
                        share: "免费分享和使用",
                        shareCommercially: "免费共享和使用商业",
                        modify: "免费修改、共享和使用",
                        modifyCommercially: "可自由修改、共享和在商业上使用",
                    },
                },
                size: {
                    title: "大小",
                    description: "按指定大小筛选结果",
                    options: {
                        all: "所有",
                        small: "小（小于200x200）",
                        medium: "中等（小于 500x500）",
                        large: "大（大于 500x500）",
                        wallpaper: "壁纸（超大图像）",
                    },
                },
            },
            local: {
                title: "本地文件系统", // Local File System
                folderPath: "文件夹路径", // Folder Path
                selectFolder: "选择文件夹", // Select Folder
                chooseFolder: "选择文件夹", // Choose Folder
            },
        },
    },
    editorPage: {
        width: "宽度", // Width
        height: "高度", // Height
        tagged: "已标记", // Tagged
        visited: "已访问", // Visited
        toolbar: {
            select: "选择[V]", // Select (V)
            pan: "泛", // Pan
            drawRectangle: "绘制矩形", // Draw Rectangle
            drawPolygon: "绘制多边形", // Draw Polygon
            copyRectangle: "复制矩形", // Copy Rectangle
            copy: "复制区域", // Copy Regions
            cut: "剪切区域", // Cut Regions
            paste: "粘贴区域", // Paste Regions
            removeAllRegions: "删除所有区域", // Remove All Regions
            previousAsset: "以前的素材", // Previous Asset
            nextAsset: "下一项素材", // Next Asset
            saveProject: "保存项目", // Save Project
            exportProject: "导出项目", // Export Project
            activeLearning: "主动学习", // Active Learning
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "上一个已标记的帧", // Previous Tagged Frame
            },
            nextTaggedFrame: {
                tooltip: "下一个已标记的帧", // Next Tagged Frame
            },
            previousExpectedFrame: {
                tooltip: "上一帧", // Previous Frame
            },
            nextExpectedFrame: {
                tooltip: "下一帧", // Next Frame
            },
        },
        help: {
            title: "切换帮助菜单", // Toggle Help Menu
            escape: "退出帮助菜单", // Escape Help Menu
        },
        assetError: "无法加载素材", // Unable to load asset
        tags: {
            hotKey: {
                apply: "使用快捷键应用标签", // Apply Tag with Hot Key
                lock: "使用快捷键锁定标签", // Lock Tag with Hot Key
            },
            rename: {
                title: "重新命名标签", // Rename Tag
                confirmation: "您确定要重新命名此标签吗？它将在所有素材中被重新命名",
                // Are you sure you want to rename this tag? It will be renamed throughout all assets
            },
            delete: {
                title: "删除标签", // Delete Tag
                confirmation: "您确定要删除此标签吗？它将在所有素材中被删除，并且仅使用此标签标记的任何区域也将被删除",
                // Are you sure you want to delete this tag? It will be deleted throughout all assets
                // and any regions where this is the only tag will also be deleted
            },
        },
        canvas: {
            removeAllRegions: {
                title: "删除所有区域", // Remove All Regions
                confirmation: "您确定要删除所有区域吗？", // Are you sure you want to remove all regions?
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "检测到无效的区域", // Invalid region(s) detected
                description: "1个或多个区域尚未被标记。在继续下一个素材之前，请确保所有区域均已标记。",
                // 1 or more regions have not been tagged.
                // Ensure all regions are tagged before continuing to next asset.
            },
        },
    },
    export: {
        title: "导出", // Export
        settings: "导出设置", // Export Settings
        saveSettings: "保存导出设置", // Save Export Settings
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "素材状态", // Asset State
                        description: "导出中包括哪些素材", // Which assets to include in the export
                        options: {
                            all: "所有素材", // All Assets
                            visited: "仅已访问素材", // Only Visited Assets
                            tagged: "仅已标记素材", // Only tagged Assets
                        },
                    },
                    testTrainSplit: {
                        title: "测试/训练用数据分离", // Test / Train Split
                        description: "导出时分离测试/训练用数据", // The test train split to use for exported data
                    },
                    includeImages: {
                        title: "包含图片", // Include Images
                        description: "是否在目标连接中包括二值化图像素材",
                        // Whether or not to include binary image assets in target connection
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON", // VoTT JSON
            },
            azureCV: {
                displayName: "Azure自定义视觉服务", // Azure Custom Vision Service
                regions: {
                    australiaEast: "澳大利亚东部", // Australia East
                    centralIndia: "印度中部", // Central India
                    eastUs: "美国东部", // East US
                    eastUs2: "美国东部2", // East US 2
                    japanEast: "日本东部", // Japan East
                    northCentralUs: "美国中北部", // North Central US
                    northEurope: "欧州北部", // North Europe
                    southCentralUs: "美国中南部", // South Central US
                    southeastAsia: "东南亚", // Southeast Asia
                    ukSouth: "英国南部", // UK South
                    westUs2: "美国西部2", // West US 2
                    westEurope: "欧州西部", // West Europe
                },
                properties: {
                    apiKey: {
                        title: "API密钥", // API Key
                    },
                    region: {
                        title: "区域", // Region
                        description: "部署服务的Azure区域", // The Azure region where your service is deployed
                    },
                    classificationType: {
                        title: "分类类型", // Classification Type
                        options: {
                            multiLabel: "每个图像多个标签", // Multiple tags per image
                            multiClass: "每个图像一个标签", // Single tag per image
                        },
                    },
                    name: {
                        title: "项目名", // Project Name
                    },
                    description: {
                        title: "项目简介", // Project Description
                    },
                    domainId: {
                        title: "域", // Domain
                    },
                    newOrExisting: {
                        title: "新项目或现有项目", // New or Existing Project
                        options: {
                            new: "新项目", // New Project
                            existing: "现有项目", // Existing Project
                        },
                    },
                    projectId: {
                        title: "项目名", // Project Name
                    },
                    projectType: {
                        title: "项目类型", // Project Type
                        options: {
                            classification: "分类", // Classification
                            objectDetection: "物体识别", // Object Detection
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "Tensorflow记录", // Tensorflow Records
            },
            pascalVoc: {
                displayName: "Pascal VOC", // Pascal VOC
                exportUnassigned: {
                    title: "导出未分配", // Export Unassigned
                    description: "是否在导出的数据中包括未被分配的标签", // Whether or not to include unassigned tags in exported data
                },
            },
            yolo: {
                displayName: "YOLO", // YOLO
            },
            cntk: {
                displayName: "Microsoft Cognitive Toolkit（CNTK)", // Microsoft Cognitive Toolkit (CNTK)
            },
            csv: {
                displayName: "逗号分隔值 (CSV)", // Comma Separated Values (CSV)
            },
        },
        messages: {
            saveSuccess: "成功保存导出设置", // Successfully saved export settings
        },
    },
    activeLearning: {
        title: "主动学习", // Active Learning
        form: {
            properties: {
                modelPathType: {
                    title: "模型提供者", // Model Provider
                    description: "从何处加载训练模型", // Where to load the training model from
                    options: {
                        preTrained: "预先训练 Coco SSD", // Pre-trained Coco SSD
                        customFilePath: "自定义（文件路径）", // Custom (File path)
                        customWebUrl: "自定义 (URL)", // Custom (Url)
                    },
                },
                autoDetect: {
                    title: "自动识别", // Auto Detect
                    description: "在素材之间导航时是否自动进行预测",
                    // Whether or not to automatically make predictions as you navigate between assets
                },
                modelPath: {
                    title: "模型路径", // Model path
                    description: "从本地文件系统中选择模型", // Select a model from your local file system
                },
                modelUrl: {
                    title: "模型 URL", // Model URL
                    description: "从公共网址加载模型", // Load your model from a public web URL
                },
                predictTag: {
                    title: "预测标签", // Predict Tag
                    description: "是否在预测中自动包含标签", // Whether or not to automatically include tags in predictions
                },
            },
        },
        messages: {
            loadingModel: "正在加载主动学习模型...", // Loading active learning model...
            errorLoadModel: "加载主动学习模型时出错", // Error loading active learning model
            saveSuccess: "成功保存了主动学习设置", // Successfully saved active learning settings
        },
    },
    profile: {
        settings: "个人资料设置", // Profile Settings
    },
    errors: {
        unknown: {
            title: "未知错误", // Unknown Error
            message: "该应用程序遇到未知错误。请重试。", // The app encountered an unknown error. Please try again.
        },
        projectUploadError: {
            title: "上传文件时出错", // Error Uploading File
            message: "上传文件时出错。请确认文件格式正确，然后重试。",
            // There was an error uploading the file. Please verify the file is of the correct format and try again.
        },
        genericRenderError: {
            title: "加载应用程序时出错", // Error Loading Application
            message: "呈现应用程序时发生错误。请重试",
            // An error occured while rendering the application. Please try again
        },
        projectInvalidSecurityToken: {
            title: "加载项目文件时出错", // Error loading project file
            message: "项目引用的安全令牌无效。请验证是否在您的应用程序设置中正确设置了项目的安全令牌",
            // The security token referenced by the project is invalid.
            // Verify that the security token for the project has been set correctly within your application settings
        },
        projectInvalidJson: {
            title: "解析项目文件时出错", // Error parsing project file
            message: "所选的项目文件不包含有效的JSON。请检查该文件, 然后重试。",
            // The selected project files does not contain valid JSON. Please check the file any try again.
        },
        projectDeleteError: {
            title: "删除项目时出错", // Error deleting project
            message: "删除项目时发生错误。验证项目文件和安全令牌是否存在，然后重试",
            // An error occured while deleting the project.
            // Validate the project file and security token exist and try again
        },
        securityTokenNotFound: {
            title: "加载项目文件时出错", // Error loading project file
            message: "在当前的应用程序设置中找不到该项目引用的安全令牌。验证安全令牌是否存在，然后尝试重新加载项目。",
            // The security token referenced by the project cannot be found in your current application settings.
            // Verify the security token exists and try to reload the project.
        },
        canvasError: {
            title: "加载画布时出错", // Error loading canvas
            message: "加载画布时发生错误，请检查项目的素材，然后重试。",
            // There was an error loading the canvas, check the project's assets and try again.
        },
        importError: {
            title: "导入V1项目时出错", // Error importing V1 project
            message: "导入V1项目时出错。检查项目文件，然后重试",
            // There was an error importing the V1 project. Check the project file and try again
        },
        pasteRegionTooBigError: {
            title: "粘贴区域时出错", // Error pasting region
            message: "区域对于该素材过大。请尝试复制其他区域", // Region too big for this asset. Try copying another region
        },
        exportFormatNotFound: {
            title: "导出项目时出错", // Error exporting project
            message: "项目缺少导出格式。请在导出设置页面中选择一种导出格式。",
            // Project is missing export format.  Please select an export format in the export setting page.
        },
        activeLearningPredictionError: {
            title: "主动学习错误", // Active Learning Error
            message: "预测当前素材中的区域时发生错误。请验证您的主动学习配置，然后重试",
            // An error occurred while predicting regions in the current asset.
            // Please verify your active learning configuration and try again
        },
    },
};
