"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[74271],{770:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});a(96540);var n=a(15680),i=a(53720),r=a(5400);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const p={sidebar_position:27,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},g="JSON Schemas",c={unversionedId:"docs/generated/ingestion/sources/json-schema",id:"docs/generated/ingestion/sources/json-schema",title:"JSON Schemas",description:"Incubating",source:"@site/genDocs/docs/generated/ingestion/sources/json-schema.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/json-schema",permalink:"/docs/generated/ingestion/sources/json-schema",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md",tags:[],version:"current",sidebarPosition:27,frontMatter:{sidebar_position:27,title:"JSON Schemas",slug:"/generated/ingestion/sources/json-schema",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/json-schema.md"},sidebar:"overviewSidebar",previous:{title:"Iceberg",permalink:"/docs/generated/ingestion/sources/iceberg"},next:{title:"Kafka",permalink:"/docs/generated/ingestion/sources/kafka"}},m={},d=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Configuration Notes",id:"configuration-notes",level:4},{value:"Code Coordinates",id:"code-coordinates",level:3}],u={toc:d},y="wrapper";function h(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(y,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){s(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"json-schemas"},"JSON Schemas"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Descriptions"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Extracts descriptions at top level and field level")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"With stateful ingestion enabled, will remove entities from DataHub if they are no longer present in the source")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,n.yg)("td",{parentName:"tr",align:null},"\u274c"),(0,n.yg)("td",{parentName:"tr",align:null},"Does not currently support extracting ownership")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Extract Tags"),(0,n.yg)("td",{parentName:"tr",align:null},"\u274c"),(0,n.yg)("td",{parentName:"tr",align:null},"Does not currently support extracting tags")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Supports platform instance via config")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Schema Metadata"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Extracts schemas, following references")))),(0,n.yg)("p",null,"This source extracts metadata from a single JSON Schema or multiple JSON Schemas rooted at a particular path.\nIt performs reference resolution based on the ",(0,n.yg)("inlineCode",{parentName:"p"},"$ref")," keyword."),(0,n.yg)("p",null,"Metadata mapping:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Schemas are mapped to Datasets with sub-type Schema"),(0,n.yg)("li",{parentName:"ul"},"The name of the Schema (Dataset) is inferred from the ",(0,n.yg)("inlineCode",{parentName:"li"},"$id")," property and if that is missing, the file name."),(0,n.yg)("li",{parentName:"ul"},"Browse paths are minted based on the path")),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"json-schema")," source works out of the box with ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,n.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"pipeline_name: json_schema_ingestion\nsource:\n  type: json-schema\n  config:\n    path: <path_to_json_file_or_directory or url> # e.g. https://json.schemastore.org/petstore-v1.0.json\n    platform: <choose a platform that you want schemas to live under> # e.g. schemaregistry\n    # platform_instance: <add a platform_instance if there are multiple schema repositories>\n    stateful_ingestion:\n      enabled: true # recommended to have this turned on\n\n# sink configs if needed\n")),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(r.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"path"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"One of string(file-path), string(directory-path), string(uri)"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. ",(0,n.yg)("a",{parentName:"td",href:"https://json.schemastore.org/petstore-v1.0.json"},"https://json.schemastore.org/petstore-v1.0.json"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform"),"\xa0",(0,n.yg)("abbr",{title:"Required"},"\u2705"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to. This should be unique within the platform. See ",(0,n.yg)("a",{parentName:"td",href:"https://datahubproject.io/docs/platform-instances/"},"https://datahubproject.io/docs/platform-instances/")," for more details.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"use_id_as_base_uri"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"When enabled, uses the ",(0,n.yg)("inlineCode",{parentName:"td"},"$id")," field in the json schema as the base uri for following references. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"uri_replace_pattern"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"URIReplacePattern"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"uri_replace_pattern."),(0,n.yg)("span",{className:"path-main"},"match"),"\xa0",(0,n.yg)("abbr",{title:"Required if uri_replace_pattern is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Pattern to match on uri-s as part of reference resolution. See replace field")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"uri_replace_pattern."),(0,n.yg)("span",{className:"path-main"},"replace"),"\xa0",(0,n.yg)("abbr",{title:"Required if uri_replace_pattern is set"},"\u2753"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Pattern to replace with as part of reference resolution. See match field")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or ",(0,n.yg)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))))))),(0,n.yg)(r.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "JsonSchemaSourceConfig",\n  "description": "Base configuration class for stateful ingestion for source configs to inherit from.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to. This should be unique within the platform. See https://datahubproject.io/docs/platform-instances/ for more details.",\n      "type": "string"\n    },\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "path": {\n      "title": "Path",\n      "description": "Set this to a single file-path or a directory-path (for recursive traversal) or a remote url. e.g. https://json.schemastore.org/petstore-v1.0.json",\n      "anyOf": [\n        {\n          "type": "string",\n          "format": "file-path"\n        },\n        {\n          "type": "string",\n          "format": "directory-path"\n        },\n        {\n          "type": "string",\n          "minLength": 1,\n          "maxLength": 65536,\n          "format": "uri"\n        }\n      ]\n    },\n    "platform": {\n      "title": "Platform",\n      "description": "Set this to a platform that you want all schemas to live under. e.g. schemaregistry / schemarepo etc.",\n      "type": "string"\n    },\n    "use_id_as_base_uri": {\n      "title": "Use Id As Base Uri",\n      "description": "When enabled, uses the `$id` field in the json schema as the base uri for following references.",\n      "default": false,\n      "type": "boolean"\n    },\n    "uri_replace_pattern": {\n      "title": "Uri Replace Pattern",\n      "description": "Use this if URI-s need to be modified during reference resolution. Simple string match - replace capabilities are supported.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/URIReplacePattern"\n        }\n      ]\n    }\n  },\n  "required": [\n    "path",\n    "platform"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "URIReplacePattern": {\n      "title": "URIReplacePattern",\n      "type": "object",\n      "properties": {\n        "match": {\n          "title": "Match",\n          "description": "Pattern to match on uri-s as part of reference resolution. See replace field",\n          "type": "string"\n        },\n        "replace": {\n          "title": "Replace",\n          "description": "Pattern to replace with as part of reference resolution. See match field",\n          "type": "string"\n        }\n      },\n      "required": [\n        "match",\n        "replace"\n      ],\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h4",{id:"configuration-notes"},"Configuration Notes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You must provide a ",(0,n.yg)("inlineCode",{parentName:"li"},"platform")," field. Most organizations have custom project names for their schema repositories, so you can pick whatever name makes sense. For example, you might want to call your schema platform ",(0,n.yg)("strong",{parentName:"li"},"schemaregistry"),". After picking a custom platform, you can use the ",(0,n.yg)("a",{parentName:"li",href:"/docs/cli#put-platform"},"put platform")," command to register your custom platform into DataHub.")),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.schema.json_schema.JsonSchemaSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/schema/json_schema.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for JSON Schemas, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}h.isMDXComponent=!0}}]);