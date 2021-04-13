import { IAppStrings } from "../strings";

/**
 * App Strings for Korean language from Google Translate
 */
export const korean: IAppStrings = {
    appName: "비주얼 객체 태깅 도구", // Visual Object Tagging Tool,
    common: {
        displayName: "프로젝트 이름", // Display Name,
        description: "설명", // Description,
        submit: "제출", // Submit,
        cancel: "취소", // Cancel,
        save: "저장", // Save,
        delete: "삭제", // Delete,
        provider: "공급자", // Provider,
        homePage: "홈페이지",  // Home Page"
    },
    titleBar: {
        help: "도움", // Help,
        minimize: "최소화", // Minimize,
        maximize: "최대화", // Maximize,
        restore: "되돌리기", // Restore,
        close: "닫기", // Close"
    },
    homePage: {
        newProject: "새로운 프로젝트", // New Project,
        openLocalProject: {
            title: "로컬 프로젝트 열기", // Open Local Project"
        },
        openCloudProject: {
            title: "클라우드 프로젝트 열기", // Open Cloud Project,
            selectConnection: "Connection 선택", // Select a Connection
        },
        recentProjects: "최근 프로젝트", // Recent Projects,
        deleteProject: {
            title: "프로젝트 삭제", // Delete Project,
            confirmation: "프로젝트를 삭제 하시겠습니까?", // Are you sure you want to delete project
        },
        importProject: {
            title: "프로젝트 가져 오기",  // Import Project,
            confirmation: "${project.file.name} 프로젝트 설정을 v2 형식으로 수정 하시겠습니까? 수정하시기 전에 프로젝트 파일을 백업해두시기 바랍니다.",
            // Are you sure you want to conver project ${project.file.name} project settings to v2 format?
            // We recommend you backup the project file first."
        },
        messages: {
            deleteSuccess: "${project.name}을 삭제했습니다",  // Successfully deleted ${project.name}"
        },
    },
    appSettings: {
        title: "애플리케이션 설정", // Application Settings,
        storageTitle: "저장소 설정", // Storage Settings,
        uiHelp: "설정이 저장된 위치", // Where your settings are stored,
        save: "설정 저장", // Save Settings,
        securityToken: {
            name: {
                title: "이름", // Name
            },
            key: {
                title: "키", // Key
            },
        },
        securityTokens: {
            title: "보안 토큰",  // Security Tokens,
            description: "보안 토큰은 프로젝트 구성 내에서 중요한 데이터를 암호화하는 데 사용됩니다",
            // Security tokens are used to encryp sensitive data within your project configuration"
        },
        version: {
            description: "버전：", // Version"
        },
        commit: "커밋 SHA",  // Commit SHA,
        devTools: {
            description: "이슈 진단을 돕기 위한 개발자 도구 열기", // Open application developer tools to help diagnose issues,
            button: "개발자 도구 전환", // Toggle Developer Tools
        },
        reload: {
            description: "모든 변경사항을 버리고 애플리케이션을 재시작 합니다", // Reload the app discarding all current changes,
            button: "애플리케이션 새로고침", // Refresh Application
        },
        messages: {
            saveSuccess: "애플리케이션 설정이 성공적으로 저장되었습니다", // Successfully saved application settings
        },
    },
    projectSettings: {
        title: "프로젝트 설정", // Project Settings,
        securityToken: {
            title: "보안 토큰",  // Security Token,
            description: "프로젝트 파일 내에서 중요한 데이터를 암호화하는 데 사용",  // Used to encrypt sensitive data within project file
        },
        useSecurityToken: {
            title: "보안 토큰 사용", // Use Security Token
            description: "활성화되면 공급자 구성 내에서 중요한 데이터를 암호화합니다.",
            // When enabled will encrypt sensitive data within provider configuration
        },
        save: "프로젝트 저장", // Save Project,
        sourceConnection: {
            title: "소스 연결", // Source Connection,
            description: "Asset 저장 경로", // Where to load assets from
        },
        targetConnection: {
            title: "대상 연결", // Target Connection,
            description: "프로젝트 및 내 보낸 데이터를 저장할 위치",  // Where to save the project and exported data
        },
        videoSettings: {
            title: "비디오 설정", // Video Settings,
            description: "태그 지정을 위해 프레임을 추출하는 비율",  // The rate at which frames are extracted for tagging
            frameExtractionRate: "프레임 추출 속도 (비디오 초당 프레임)",  // Frame Extraction Rate (frames per a video second)
        },
        addConnection: "연결 추가", // Add Connection,
        messages: {
            saveSuccess: "${project.name} 프로젝트 설정을 성공적으로 저장했습니다", // Successfully saved ${project.name} project settings
        },
    },
    projectMetrics: {
        title: "프로젝트 매트릭",  // Project Metrics,
        assetsSectionTitle: "Asset",  // Assets,
        totalAssetCount: "총 Asset",  // Total Assets,
        visitedAssets: "검토한 Asset (${count})", // Visited Assets (${count}),
        taggedAssets: "태그된 Asset (${count})", // Tagged Assets (${count}),
        nonTaggedAssets: "태그가 없는 Asset (${count})", // Not Tagged Assets (${count}),
        nonVisitedAssets: "검토하지 않은 Asset (${count})", // Not Visited Assets (${count}),
        tagsSectionTitle: "태그", // Tags & Labels,
        totalRegionCount: "태그된 지역 수",  // Total Tagged Regions,
        totalTagCount: "태그 숫자",  // Total Tags,
        avgTagCountPerAsset: "Asset 당 평균 태그 숫자", // Average tags per asset"
    },
    tags: {
        title: "태그", // Tags,
        placeholder: "새 태그 추가", // Add new tag,
        editor: "태그 편집기",  // Tags Editor,
        modal: {
            name: "태그 이름", // Tag Name,
            color: "태그 색상", // Tag Color"
        },
        colors: {
            white: "하얀색",  // White,
            gray: "회색", // Gray,
            red: "빨간색", // Red,
            maroon: "밤색", // Maroon,
            yellow: "노랑색", // Yellow,
            olive: "올리브색", // Olive,
            lime: "라임색", // Lime,
            green: "초록색", // Green,
            aqua: "아쿠아", // Aqua,
            teal: "물오리", // Teal,
            blue: "파랑색", // Blue,
            navy: "군청색",  // Navy,
            fuschia: "푸시아",  // Fuschia,
            purple: "보라색",  // Purple"
        },
        warnings: {
            existingName: "태그 이름이 이미 존재합니다. 다른 이름을 입력하십시오",  // Tag name already exists. Choose another name,
            emptyName: "빈 태그 이름을 가질 수 없습니다", // Cannot have an empty tag name,
            unknownTagName: "알 수 없는 태그 이름",  // Unknown"
        },
        toolbar: {
            add: "새 태그 추가", // Add new tag,
            search: "태크 검색",  // Search tags,
            edit: "태그 편집", // Edit tag,
            lock: "태그 잠금",  // Lock tag,
            moveUp: "태그를 위로 이동", // Move tag up,
            moveDown: "태그를 아래로 이동", // Move tag down,
            delete: "태그 삭제", // Delete tag"
        },
    },
    connections: {
        title: "연결 설정", // Connections,
        details: "설명", // Connection Details,
        settings: "설정", // Connection Settings,
        instructions: "편집 할 연결 정보를 선택하십시오", // Please select a connection to edit,
        save: "저장", // Save Connection,
        messages: {
            saveSuccess: "${connection.name}을 성공적으로 저장했습니다",  // Successfully saved ${connection.name},
            deleteSuccess: "${connection.name}을 삭제했습니다.",  // Successfully deleted ${connection.name}"
        },
        imageCorsWarning: "경고 : 웹 브라우저에서 VoTT를 사용하는 경우 CORS (Cross Origin Resource Sharing) " +
            "제한으로 인해 Bing Image Search의 일부 정보가 제대로 내보내지지 않을 수 있습니다.",
        // Warning: When using VoTT in a Web browser, some assets from Bing Image Search may no export
        // correctly due to CORS (Cross Origin Resource Sharing) restrictions.",
        blobCorsWarning: "경고 : 소스 또는 대상 연결로 사용하려면, Azure Blob Storage 계정에서 CORS(Cross Domain Resource Sharing) " +
            "설정을 활성화 해야 합니다. CORS 설정에 대한 자세한 정보는 {0}에서 찾을 수 있습니다.",
        // Warning: CORS (Cross Domain Resource Sharing) must be enabled on the Azure Blob Storage account, in order
        // to use i as a source or target connection. More information on enabling CORS can be found in the {0}",
        azDocLinkText: "Azure 설명서.",  // Azure Documentation.,
        providers: {
            azureBlob: {
                title: "Azure Blob 저장소", // Azure Blob Storage,
                description: "",
                accountName: {
                    title: "계정 이름", // Account Name,
                    description: "",
                },
                containerName: {
                    title: "컨테이너 이름",  // Container Name,
                    description: "",
                },
                sas: {
                    title: "SAS", // SAS,
                    description: "Blob Storage 계정을 인증하는 데 사용되는 공유 액세스 서명",
                    // Shared access signature used to authenticate to the blob storage account"
                },
                createContainer: {
                    title: "컨테이너 만들기",  // Create Container,
                    description: "Blob 컨테이너가 없으면 새로 생성합니다.",
                    // Creates the blob container if it does not already exist"
                },
            },
            bing: {
                title: "Bing 이미지 검색",  // Bing Image Search,
                options: {
                    title: "Bing 이미지 검색 옵션",
                },  // Bing Image Search Options,
                endpoint: {
                    title: "끝점",
                    description: "Bing 검색 Azure 리소스 내에 나열된 끝점",
                },
                apiKey: {
                    title: "API 키",
                    description: "Bing 검색 Azure 리소스 내에 나열된 API 키",
                }, // API Key,
                query: {
                    title: "쿼리",
                    description: "연결을 채우는 데 사용되는 검색 쿼리",
                },  // Query,
                aspectRatio: {
                    title: "종횡비", // Aspect Ratio,
                    description: "지정된 종횡비로 결과를 필터링합니다.",
                    options: {
                        all: "모두", // All,
                        square: "정사각형", // Square,
                        wide: "넓은", // Wide,
                        tall: "긴", // Tall"
                    },
                },
                licenseType: {
                    title: "라이센스 유형",
                    description: "지정된 라이센스 유형으로 결과 필터링",
                    options: {
                        all: "모든 (이미지를 필터링하지 않음)",
                        any: "라이센스 유형이 있는 모든 이미지",
                        public: "퍼블릭 도메인",
                        share: "무료 공유 및 사용",
                        shareCommercially: "상업적으로 자유롭게 공유하고 사용할 수 있습니다.",
                        modify: "자유롭게 수정, 공유 및 사용",
                        modifyCommercially: "상업적으로 자유롭게 수정, 공유 및 사용",
                    },
                },
                size: {
                    title: "크기",
                    description: "지정된 크기로 결과를 필터링합니다.",
                    options: {
                        all: "모든",
                        small: "스몰(200x200 미만)",
                        medium: "중간(500x500 미만)",
                        large: "대형(500x500 이상)",
                        wallpaper: "배경 화면 (초대형 이미지)",
                    },
                },
            },
            local: {
                title: "로컬 파일 시스템",  // Local File System,
                folderPath: "경로",  // Folder Path,
                selectFolder: "폴더 선택", // Select Folder,
                chooseFolder: "선택", // Choose Folder"
            },
        },
    },
    editorPage: {
        width: "너비", // Width,
        height: "높이", // Height,
        tagged: "태그", // Tagged,
        visited: "방문", // Visited,
        toolbar: {
            select: "선택 (V)", // Select (V),
            pan: "팬", // Pan,
            drawRectangle: "사각형 그리기", // Draw Rectangle,
            drawPolygon: "다각형 그리기", // Draw Polygon,
            copyRectangle: "사각형 복사", // Copy Rectangle,
            copy: "영역 복사", // Copy Regions,
            cut: "영역 잘라내기",  // Cut Regions,
            paste: "영역 붙여 넣기", // Paste Regions,
            removeAllRegions: "모든 지역 제거", // Remove All Regions,
            previousAsset: "이전 Asset",  // Previous Asset,
            nextAsset: "다음 Asset",  // Next Asset,
            saveProject: "프로젝트 저장", // Save Project,
            exportProject: "프로젝트 내보내기",  // Export Project,
            activeLearning: "Active Learning",  // Active Learning"
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "이전 태그 된 프레임", // Previous Tagged Frame"
            },
            nextTaggedFrame: {
                tooltip: "다음 태그 된 프레임", // Next Tagged Frame"
            },
            previousExpectedFrame: {
                tooltip: "이전 프레임", // Previous Frame"
            },
            nextExpectedFrame: {
                tooltip: "다음 프레임", // Next Frame"
            },
        },
        help: {
            title: "도움말",  // Toggle Help Menu,
            escape: "나가기",  // Escape Help Menu"
        },
        assetError: "Asset을 불러올 수 없습니다", // Unable to load asset,
        tags: {
            hotKey: {
                apply: "단축키로 태그 적용",  // Apply Tag with Hot Key,
                lock: "단축키가 있는 태그 잠금",  // Lock Tag with Hot Key"
            },
            rename: {
                title: "태그 이름 바꾸기", // Rename Tag,
                confirmation: "이 태그의 이름을 바꾸시겠습니까? 모든 Asset에서 이름이 변경됩니다",
                // Are you sure you want to rename this tag? It will be renamed throughout all assets"
            },
            delete: {
                title: "태그 삭제", // Delete Tag,
                confirmation: "이 태그를 삭제 하시겠습니까? 모든 Asset 및 태그가 유일한 지역 인 모든 지역에서 삭제됩니다.",
                // Are you sure you want to delete this tag? It will be deleted throughout all assets
                // and any regions where this is the only tag will also be deleted"
            },
        },
        canvas: {
            removeAllRegions: {
                title: "모든 지역 제거", // Remove All Regions,
                confirmation: "모든 지역을 삭제 하시겠습니까?",  // Are you sure you want to remove all regions"
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "유효하지 않은 지역이 감지되었습니다.",  // Invalid region(s) detected,
                description: "1 개 이상의 지역이 태그되어야 합니다. 다음 작업을 계속 진행하기 위해 모든 지역에 태그가 지정되어 있는지 확인하십시오.",
                // 1 or more regions have not been tagged. Ensure all regions ar tagged before continuing to next asset"
            },
        },
    },
    export: {
        title: "내보내기",  // Export,
        settings: "내보내기 설정", // Export Settings,
        saveSettings: "내보내기 설정 저장", // Save Export Settings,
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "Asset 상태",  // Asset State,
                        description: "내보내기에 포함 할 Asset", // Which assets to include in the export,
                        options: {
                            all: "모든 Asset",  // All Assets,
                            visited: "방문한 Asset만", // Only Visited Assets,
                            tagged: "태그된 Asset만", // Only tagged Assets"
                        },
                    },
                    testTrainSplit: {
                        title: "테스트용 / 학습용 분할", // Test / Train Split,
                        description: "내보내는 데이터에 테스트용 / 학습용 분할",
                        // The test train split to use for exported data"
                    },
                    includeImages: {
                        title: "이미지 포함", // Include Images,
                        description: "대상 연결에 이진 이미지 Asset을 포함할지 여부",
                        // Whether or not to include binary image assets in target connection"
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON", // VoTT JSON
            },
            azureCV: {
                displayName: "Azure Custom Vision 서비스",  // Azure Custom Vision Service,
                regions: {
                    australiaEast: "호주 동부", // Australia East,
                    centralIndia: "중앙 인도", // Central India,
                    eastUs: "미국 동부", // East US,
                    eastUs2: "미국 동부 2",  // East US 2,
                    japanEast: "일본 동부", // Japan East,
                    northCentralUs: "미국 중북부", // North Central US,
                    northEurope: "북유럽", // North Europe,
                    southCentralUs: "미국 중남부", // South Central US,
                    southeastAsia: "동남아시아", // Southeast Asia,
                    ukSouth: "영국 남부", // UK South,
                    westUs2: "미국 서부 2",  // West US 2,
                    westEurope: "서유럽", // West Europe"
                },
                properties: {
                    apiKey: {
                        title: "API 키",  // API Key"
                    },
                    region: {
                        title: "지역", // Region,
                        description: "서비스가 배포 된 Azure 지역",  // The Azure region where your service is deployed"
                    },
                    classificationType: {
                        title: "분류 유형", // Classification Type,
                        options: {
                            multiLabel: "이미지 당 여러 태그", // Multiple tags per image,
                            multiClass: "이미지 당 단일 태그", // Single tag per image"
                        },
                    },
                    name: {
                        title: "프로젝트 이름", // Project Name"
                    },
                    description: {
                        title: "설명", // Project Description"
                    },
                    domainId: {
                        title: "도메인", // Domain"
                    },
                    newOrExisting: {
                        title: "신규 또는 기존 프로젝트",  // New or Existing Project,
                        options: {
                            new: "새로운 프로젝트",  // New Project,
                            existing: "기존 프로젝트",  // Existing Project"
                        },
                    },
                    projectId: {
                        title: "프로젝트 이름", // Project Name"
                    },
                    projectType: {
                        title: "프로젝트 유형", // Project Type,
                        options: {
                            classification: "분류", // Classification,
                            objectDetection: "물체 감지", // Object Detection"
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "TensorFlow 기록",  // Tensorflow Record"
            },
            pascalVoc: {
                displayName: "Pascal VOC",  // Pascal VOC,
                exportUnassigned: {
                    title: "할당되지 않은 태그 내보내기",  // Export Unassigned,
                    description: "내보내는 데이터에 할당되지 않은 태그를 포함할지 여부",
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
                displayName: "쉼표로 구분 된 값（CSV）", // Comma Separated Values (CSV)"
            },
        },
        messages: {
            saveSuccess: "내보내기 설정이 성공적으로 저장되었습니다", // Successfully saved export settings"
        },
    },
    activeLearning: {
        title: "Active Learning",  // Active Learning,
        form: {
            properties: {
                modelPathType: {
                    title: "모델 제공자",  // Model Provider,
                    description: "학습 모델을 불러올 위치",  // Where to load the training model from,
                    options: {
                        preTrained: "미리 학습된 Coco SSD", // Pre-trained Coco SSD,
                        customFilePath: "사용자 정의 (파일 경로)",  // Custom (File path),
                        customWebUrl: "사용자 정의 (URL)",  // Custom (Url)"
                    },
                },
                autoDetect: {
                    title: "자동 감지", // Auto Detect,
                    description: "Asset 간을 탐색 할 때 자동 예측 여부",
                    // Whether or not to automatically make predictions as you navigate between assets"
                },
                modelPath: {
                    title: "모델 경로",  // Model path,
                    description: "로컬 파일 시스템에서 모델을 선택하십시오.",  // Select a model from your local file system"
                },
                modelUrl: {
                    title: "모델 URL", // Model URL,
                    description: "URL에서 모델 불러오기",  // Load your model from a public web URL"
                },
                predictTag: {
                    title: "태그 예측", // Predict Tag,
                    description: "예측에 태그를 자동으로 포함할지 여부", // Whether or not to automatically include tags in predictions"
                },
            },
        },
        messages: {
            loadingModel: "Active Learning 모델 불러오는 중 ...", // Loading active learning model...,
            errorLoadModel: "Active Learning 모델을 불러오는 중 오류가 발생했습니다", // Error loading active learning model,
            saveSuccess: "Active Learning 모델 설정을 성공적으로 저장했습니다",  // Successfully saved active learning settings"
        },
    },
    profile: {
        settings: "프로필 설정", // Profile Settings"
    },
    errors: {
        unknown: {
            title: "알 수 없는 오류", // Unknown Error,
            message: "애플리케이션에 알 수 없는 오류가 발생했습니다. 다시 시도하십시오.", // The app encountered an unknown error. Please try again"
        },
        projectUploadError: {
            title: "파일 업로드 오류",  // Error Uploading File,
            message: "파일을 업로드하는 중에 오류가 발생했습니다. 파일이 올바른 형식인지 확인한 후 다시 시도하십시오.",
            // There was an error uploading the file. Please verify the file is of the correct format and try again."
        },
        genericRenderError: {
            title: "응용 프로그램 로딩 오류", // Error Loading Application,
            message: "응용 프로그램을 렌더링하는 중에 오류가 발생했습니다. 다시 시도하십시오",
            // An error occured while rendering the application. Please try again"
        },
        projectInvalidSecurityToken: {
            title: "프로젝트 파일을 로드하는 중 오류가 발생했습니다",  // Error loading project file,
            message: "프로젝트에서 참조한 보안 토큰이 유효하지 않습니다.응용 프로그램 설정 내에서 프로젝트의 보안 토큰이 올바르게 설정되었는지 확인하십시오",
            // The security token referenced by the project is invalid.
            // Verify that the security token for the project has been set correctly within your application settings"
        },
        projectInvalidJson: {
            title: "프로젝트 파일 파싱 오류",  // Error parsing project file,
            message: "선택한 프로젝트 파일에 유효한 JSON이 포함되어 있지 않습니다. 파일을 다시 확인하십시오.",
            // The selected project files does not contain valid JSON Please check the file any try again."
        },
        projectDeleteError: {
            title: "프로젝트 삭제 오류", // Error deleting project,
            message: "프로젝트를 삭제하는 중에 오류가 발생했습니다. 프로젝트 파일에 보안 토큰이 존재하는지 확인한 후 다시 시도하십시오.",
            // An error occured while deleting the project.
            // Validate the project file an security token exist and try again"
        },
        securityTokenNotFound: {
            title: "프로젝트 파일을 로드하는 중 오류가 발생했습니다",  // Error loading project file,
            message: "프로젝트가 참조하는 보안 토큰을 현재 애플리케이션 설정에서 찾을 수 없습니다. 보안 토큰이 있는지 확인하고 프로젝트를 다시로드하십시오.",
            // The security token referenced by the project cannot be found in your current application settings.
            // Verify the security token exists and try to reload the project."
        },
        canvasError: {
            title: "캔버스 불러 오기 오류", // Error loading canvas,
            message: "캔버스를 로드하는 중에 오류가 발생했습니다. 프로젝트 Asset을 확인한 후 다시 시도하십시오.",
            // There was an error loading the canvas, check the project's assets and try again."
        },
        importError: {
            title: "V1 프로젝트 가져 오기 오류",  // Error importing V1 project,
            message: "V1 프로젝트를 가져 오는 중에 오류가 발생했습니다. 프로젝트 파일을 확인하고 다시 시도하십시오.",
            // There was an error importing the V1 project. Check the project file and try again"
        },
        pasteRegionTooBigError: {
            title: "지역 붙여 넣기 오류", // Error pasting region,
            message: "이 Asset에 비해 지역이 너무 큽니다. 다른 지역을 복사 해보십시오.",
            // Region too big for this asset. Try copying another region"
        },
        exportFormatNotFound: {
            title: "프로젝트 내보내기 오류",  // Error exporting project,
            message: "프로젝트에 내보내기 형식이 없습니다. 내보내기 설정 페이지에서 내보내기 형식을 선택하십시오.",
            // Project is missing export format. Please select an export format in the export setting page."
        },
        activeLearningPredictionError: {
            title: "Active Learning 오류",  // Active Learning Error,
            message: "현재 Asset의 지역을 예측하는 동안 오류가 발생했습니다. Active Learning 구성을 확인하고 다시 시도하십시오",
            // An error occurred while predicting regions in the current asset.
            // Please verify your active learning configuration and try again"
        },
    },
};
