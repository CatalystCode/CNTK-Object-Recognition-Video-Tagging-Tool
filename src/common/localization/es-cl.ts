import { IAppStrings } from "../strings";

/**
 * App Strings for Spanish language
 */
export const spanish: IAppStrings = {
    appName: "Herramienta Visual de Etiquetado de Objetos",
    common: {
        displayName: "Nombre para Mostrar",
        description: "Descripción",
        submit: "Enviar",
        cancel: "Cancelar",
        save: "Guardar",
        delete: "Borrar",
        provider: "Proveedor",
        homePage: "Página de Inicio",
    },
    titleBar: {
        help: "Ayuda",
        minimize: "Minimizar",
        maximize: "Maximizar",
        restore: "Restaurar",
        close: "Cerrar",
    },
    homePage: {
        newProject: "Nuevo Proyecto",
        recentProjects: "Proyectos Recientes",
        openLocalProject: {
            title: "Abrir Proyecto Local",
        },
        openCloudProject: {
            title: "Abrir Proyecto de la Nube",
            selectConnection: "Select a Connection",
        },
        deleteProject: {
            title: "Borrar Proyecto",
            confirmation: "¿Está seguro que quiere borrar el proyecto",
        },
        importProject: {
            title: "Importar Proyecto",
            confirmation: "¿Está seguro que quiere convertir el proyecto ${project.file.name} " +
                "a formato v2? Le recomendamos que haga una copia de seguridad de su archivo de proyecto.",
        },
        messages: {
            deleteSuccess: "${project.name} eliminado correctamente",
        },
    },
    appSettings: {
        title: "Configuración de Aplicación",
        storageTitle: "Configuración de Almacenamiento",
        uiHelp: "Donde se guardan sus configuraciones",
        save: "Guardar configuración",
        securityToken: {
            name: {
                title: "Nombre",
            },
            key: {
                title: "Clave",
            },
        },
        securityTokens: {
            title: "Tokens de seguridad",
            description: "Los tokens de seguridad se utilizan para cifrar datos confidenciales \
                dentro de la configuración del proyecto",
        },
        version: {
            description: "Versión:",
        },
        commit: "Cometer SHA",
        devTools: {
            description: "Abrir herramientas de desarrollo de aplicaciones para ayudar a diagnosticar problemas.",
            button: "Alternar Herramientas de Desarrollo",
        },
        reload: {
            description: "Recargar la aplicación descartando todos los cambios actuales",
            button: "Recargar la aplicación",
        },
        messages: {
            saveSuccess: "Configuración de la aplicación guardada correctamente",
        },
    },
    projectSettings: {
        title: "Configuración de Proyecto",
        securityToken: {
            title: "Token de seguridad",
            description: "Se utiliza para cifrar datos confidenciales dentro de archivos de proyecto",
        },
        useSecurityToken: {
            title: "Usar Token de Seguridad",
            description: "Si está habilitado, los datos confidenciales se cifrarán",
        },
        save: "Guardar el Proyecto",
        sourceConnection: {
            title: "Conexión de Origen",
            description: "De donde se gargan sus activos",
        },
        targetConnection: {
            title: "Conexión de Destino",
            description: "Donde se guarda su proyecto y sus datos exportados",
        },
        videoSettings: {
            title: "Ajustes de video",
            description: "La velocidad a la que se extraen los marcos para el etiquetado.",
            frameExtractionRate: "Tasa de extracción de cuadros (cuadros por segundo de video)",
        },
        addConnection: "Agregar Conexión",
        messages: {
            saveSuccess: "Guardado correctamente ${project.name} configuración del proyecto",
        },
    },
    projectMetrics: {
        title: "Métricas del proyecto",
        assetsSectionTitle: "Activos",
        totalAssetCount: "Total de activos",
        visitedAssets: "Activos visitados (${count})",
        taggedAssets: "Activos etiquetados (${count})",
        nonTaggedAssets: "Activos no etiquetados (${count})",
        nonVisitedAssets: "Activos no visitados (${count})",
        tagsSectionTitle: "Etiquetas & etiquetas",
        totalRegionCount: "Total de regiones",
        totalTagCount: "Total de etiquetas",
        avgTagCountPerAsset: "Recuento promedio de etiquetas por activo",
    },
    tags: {
        title: "Etiquetas",
        placeholder: "Agregar nuevo etiqueta",
        editor: "Editor de Etiquetas",
        modal: {
            name: "Nombre de Etiqueta",
            color: "Color de Etiqueta",
        },
        colors: {
            white: "Blanco",
            gray: "Gris",
            red: "Rojo",
            maroon: "Granate",
            yellow: "Amarillo",
            olive: "Olivo",
            lime: "Lima",
            green: "Verde",
            aqua: "Aqua",
            teal: "Trullo",
            blue: "Azul",
            navy: "Azul Marino",
            fuschia: "Fuschia",
            purple: "Púrpura",
        },
        warnings: {
            existingName: "Nombre de etiqueta ya existe. Elige otro nombre",
            emptyName: "El nombre de etiqueta no puede ser vacío",
            unknownTagName: "Desconocido",
        },
        toolbar: {
            add: "Agregar nueva etiqueta",
            search: "Buscar entre etiquetas",
            edit: "Editar etiqueta",
            lock: "Bloquear etiqueta",
            moveDown: "Mover etiqueta hacia abajo",
            moveUp: "Mover etiqueta hacia arriba",
            delete: "Borrar etiqueta",
        },
    },
    connections: {
        title: "Conexiones",
        save: "Guardar Conexión",
        details: "Detalles de Conexión",
        settings: "Configuración de Conexión",
        instructions: "Por favor seleccione una conexión para editar",
        messages: {
            saveSuccess: "${connection.name} guardado correctamente",
            deleteSuccess: "${connection.name} eliminado correctamente",
        },
        imageCorsWarning: "Advertencia: Cuando se usa VoTT en un navegador web, es posible que algunos activos de este \
                          Búsqueda de Imágenes Bing no se exporten correctamente debido a las restricciones de CORS \
                          (Recursos de Origen Cruzado).",
        blobCorsWarning: "Advertencia: CORS (Recursos de Origen Cruzado) debe estar habilitado en la \
                          cuenta de Azure Blob Storage para poder usarlo como una conexión de origen o destino. Puede \
                          encontrar más información sobre cómo habilitar CORS en la {0}.",
        azDocLinkText: "documentación de Azure.",
        providers: {
            azureBlob: {
                title: "Azure Blob Storage",
                description: "",
                accountName: {
                    title: "Nombre de cuenta",
                    description: "",
                },
                containerName: {
                    title: "Nombre del contenedor",
                    description: "",
                },
                sas: {
                    title: "SAS",
                    description: "Firma de acceso compartido utilizada para autenticarse en la cuenta de BLOB Storage",
                },
                createContainer: {
                    title: "Crear contenedor",
                    description: "Crea el contenedor de blobs si aún no existe",
                },
            },
            bing: {
                title: "Búsqueda de Imágenes Bing",
                options: {
                    title: "Opciones de Búsqueda de Imágenes Bing",
                },
                endpoint: {
                    title: "Extremo",
                    description: "El punto de conexión que aparece en el recurso de Bing Search Azure",
                },
                apiKey: {
                    title: "Clave API",
                    description: "Una clave de API que aparece en el recurso de Bing Search Azure",
                },
                query: {
                    title: "Consulta",
                    description: "La consulta de búsqueda utilizada para rellenar la conexión",
                },
                aspectRatio: {
                    title: "Relación de Aspecto",
                    description: "Filtra los resultados por la relación de aspecto especificada",
                    options: {
                        all: "Todos",
                        square: "Cuadrado",
                        wide: "Ancho",
                        tall: "Alto",
                    },
                },
                licenseType: {
                    title: "Tipo de licencia",
                    description: "Filtra los resultados según el tipo de licencia especificado",
                    options: {
                        all: "Todos (no filtra ninguna imagen)",
                        any: "Cualquier imagen con cualquier tipo de licencia",
                        public: "Dominio público",
                        share: "Libre para compartir y usar",
                        shareCommercially: "Libre para compartir y usar comercialmente",
                        modify: "Libre de modificar, compartir y usar",
                        modifyCommercially: "Libre de modificar, compartir y ues comercialmente",
                    },
                },
                size: {
                    title: "Tamaño",
                    description: "Filtra los resultados según el tamaño especificado",
                    options: {
                        all: "Todo",
                        small: "Pequeño (Menos de 200x200)",
                        medium: "Medio (Menos de 500x500)",
                        large: "Grande (mayor de 500x500)",
                        wallpaper: "Fondo de pantalla (imágenes extra grandes)",
                    },
                },
            },
            local: {
                title: "Sistema de Archivos Local",
                folderPath: "Ruta de la carpeta",
                selectFolder: "Seleccionar la carpeta",
                chooseFolder: "Elijir la carpeta",
            },
        },
    },
    editorPage: {
        width: "Anchura",
        height: "Altura",
        tagged: "Etiquetado",
        visited: "Visitado",
        toolbar: {
            select: "Seleccionar",
            pan: "Pan",
            drawRectangle: "Dibujar Rectángulo",
            drawPolygon: "Dibujar Polígono",
            copyRectangle: "Copia rectángulo",
            copy: "Copiar regiones",
            cut: "Cortar regiones",
            paste: "Pegar regiones",
            removeAllRegions: "Eliminar Todas Las Regiones",
            previousAsset: "Activo anterior",
            nextAsset: "Siguiente activo",
            saveProject: "Guardar Proyecto",
            exportProject: "Exprtar Proyecto",
            activeLearning: "Aprendizaje Activo",
        },
        videoPlayer: {
            previousTaggedFrame: {
                tooltip: "Fotograma etiquetado anterior",
            },
            nextTaggedFrame: {
                tooltip: "Siguiente marco etiquetado",
            },
            previousExpectedFrame: {
                tooltip: "Fotograma anterior",
            },
            nextExpectedFrame: {
                tooltip: "Siguiente marco",
            },
        },
        help: {
            title: "Abrir/cerrar el menú de ayuda",
            escape: "Escapar el menú de ayuda",
        },
        assetError: "No se puede mostrar el activo",
        tags: {
            hotKey: {
                apply: "Aplicar etiqueta con tecla de acceso rápido",
                lock: "Bloquear etiqueta con tecla de acceso rápido",
            },
            rename: {
                title: "Cambiar el nombre de la etiqueta",
                confirmation: "¿Está seguro que quiere cambiar el nombre de esta etiqueta? \
                Será cambiada en todos los activos",
            },
            delete: {
                title: "Delete Tag",
                confirmation: "¿Está seguro que quiere borrar esta etiqueta? Será borrada en todos \
                los activos y en las regiones donde esta etiqueta sea la única, la region también será borrada",
            },
        },
        canvas: {
            removeAllRegions: {
                title: "Borrar Regiones",
                confirmation: "¿Está seguro que quiere borrar todas las regiones?",
            },
        },
        messages: {
            enforceTaggedRegions: {
                title: "Las regiones no válidas detectadas",
                description: "1 o más regiones no se han etiquetado.  \
                    Por favor, etiquete todas las regiones antes de continuar con el siguiente activo.",
            },
        },
    },
    export: {
        title: "Exportar",
        settings: "Configuración de Exportación",
        saveSettings: "Guardar Configuración de Exportación",
        providers: {
            common: {
                properties: {
                    assetState: {
                        title: "Estado del activo",
                        description: "Qué activos incluir en la exportación",
                        options: {
                            all: "Todos los activos",
                            visited: "Solo activos visitados",
                            tagged: "Solo activos etiquetados",
                        },
                    },
                    testTrainSplit: {
                        title: "La división para entrenar y comprobar",
                        description: "La división de datos para utilizar entre el entrenamiento y la comprobación",
                    },
                    includeImages: {
                        title: "Incluir imágenes",
                        description: "Si desea o no incluir activos de imagen binaria en la conexión de destino",
                    },
                },
            },
            vottJson: {
                displayName: "VoTT JSON",
            },
            azureCV: {
                displayName: "Servicio de Visión Personalizada Azure",
                regions: {
                    australiaEast: "Australia este",
                    centralIndia: "Centro de la India",
                    eastUs: "Este de EE.",
                    eastUs2: "Este US 2",
                    japanEast: "Japón este",
                    northCentralUs: "Centro norte de EE.",
                    northEurope: "Europa del norte",
                    southCentralUs: "Centro sur de EE.",
                    southeastAsia: "Sudeste asiático",
                    ukSouth: "UK sur",
                    westUs2: "West US 2",
                    westEurope: "Europa occidental",
                },
                properties: {
                    apiKey: {
                        title: "Clave de API",
                    },
                    region: {
                        title: "Región",
                        description: "La región de Azure donde se implementa el servicio",
                    },
                    classificationType: {
                        title: "Tipo de clasificación",
                        options: {
                            multiLabel: "Varias etiquetas por imagen",
                            multiClass: "Una sola etiqueta por imagen",
                        },
                    },
                    name: {
                        title: "Nombre del proyecto",
                    },
                    description: {
                        title: "Descripción del proyecto",
                    },
                    domainId: {
                        title: "Dominio",
                    },
                    newOrExisting: {
                        title: "Proyecto nuevo o existente",
                        options: {
                            new: "Nuevo proyecto",
                            existing: "Proyecto existente",
                        },
                    },
                    projectId: {
                        title: "Nombre del proyecto",
                    },
                    projectType: {
                        title: "Tipo de proyecto",
                        options: {
                            classification: "Clasificación",
                            objectDetection: "Detección de objetos",
                        },
                    },
                },
            },
            tfRecords: {
                displayName: "Registros de Tensorflow",
            },
            pascalVoc: {
                displayName: "Pascal VOC",
                exportUnassigned: {
                    title: "Exportar sin asignar",
                    description: "Si se incluyen o no etiquetas no asignadas en los datos exportados",
                },
            },
            yolo: {
                displayName: "YOLO",
            },
            cntk: {
                displayName: "Microsoft Cognitive Toolkit (CNTK)",
            },
            csv: {
                displayName: "Los valores separados por comas (CSV)",
            },
        },
        messages: {
            saveSuccess: "Configuración de exportación guardada correctamente",
        },
    },
    activeLearning: {
        title: "Aprendizaje Activo",
        form: {
            properties: {
                modelPathType: {
                    title: "Proveedor del modelo",
                    description: "Fuente desde la cual cargar el modelo",
                    options: {
                        preTrained: "SSD de coco pre-entrenado",
                        customFilePath: "Personalizado (ruta de archivo)",
                        customWebUrl: "Personalizado (URL)",
                    },
                },
                autoDetect: {
                    title: "Detección automática",
                    description: "Si desea o no realizar automáticamente predicciones a \
                        medida que navega entre activos",
                },
                modelPath: {
                    title: "Ruta de modelo",
                    description: "Seleccione un modelo de su sistema de archivos local",
                },
                modelUrl: {
                    title: "URL del modelo",
                    description: "Cargue el modelo desde una URL web pública",
                },
                predictTag: {
                    title: "Predecir etiqueta",
                    description: "Si se incluirán o no automáticamente las etiquetas en las predicciones",
                },
            },
        },
        messages: {
            loadingModel: "Cargando modelo...",
            errorLoadModel: "Error al cargar el modelo",
            saveSuccess: "La configuración de aprendizaje activa se ha guardada correctamente",
        },
    },
    profile: {
        settings: "Configuración de Perfíl",
    },
    errors: {
        unknown: {
            title: "Error desconocido",
            message: "La aplicación contó un error desconocido.  Por favor inténtalo de nuevo.",
        },
        projectUploadError: {
            title: "Error al cargar el archivo",
            message: `Se ha cargado un error al cargar el archivo.
                Compruebe que el archivo es del tipo correcto e inténtelo de nuevo.`,
        },
        genericRenderError: {
            title: "Error desconocido",
            message: "La aplicación contó un error desconocido.  Por favor inténtalo de nuevo.",
        },
        projectInvalidSecurityToken: {
            title: "Error al cargar el archivo de proyecto",
            message: "Asegúrese de que el token de seguridad del proyecto existe",
        },
        projectInvalidJson: {
            title: "Error al analizar el archivo de proyecto",
            message: "El archivo de proyecto no es válido JSON",
        },
        projectDeleteError: {
            title: "Error al eliminar el proyecto",
            message: `Se ha producido un error al eliminar el proyecto.
                Validar el archivo de proyecto y el token de seguridad existen e inténtelo de nuevo`,
        },
        securityTokenNotFound: {
            title: "Error al cargar el archivo del proyecto",
            message: `El token de seguridad al que hace referencia el proyecto no se encuentra en la
                configuración de la aplicación actual. Compruebe que existe el token de seguridad e intente
                volver a cargar el proyecto.`,
        },
        canvasError: {
            title: "Error al cargar el lienzo",
            message: `Se produjo un error al cargar el lienzo, verifique los activos del
                proyecto y vuelva a intentarlo.`,
        },
        importError: {
            title: "Error al importar el proyecto V1",
            message: "Hubo un error al importar el proyecto V1. Revisa el archivo del proyecto y vuelve a intentarlo",
        },
        pasteRegionTooBigError: {
            title: "Error al pegar region al activo",
            message: "Hubo un error al pagar el region al activo. Intenta copiar otra region",
        },
        exportFormatNotFound: {
            title: "Error exportando proyecto",
            message: `Proyecto falta el formato de exportación. Seleccione un formato de exportación en la página
            de configuración de exportación.`,
        },
        activeLearningPredictionError: {
            title: "Error de aprendizaje",
            message: "Se ha producido un error al predecir regiones en el activo actual. \
                Compruebe la configuración de aprendizaje activa y vuelva a intentarlo",
        },
    },
};
