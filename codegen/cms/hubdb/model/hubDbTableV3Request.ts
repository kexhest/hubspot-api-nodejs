/**
 * HubDB endpoints
 * HubDB is a relational data store that presents data as rows, columns, and cells in a table, much like a spreadsheet. HubDB tables can be added or modified [in the HubSpot CMS](https://knowledge.hubspot.com/cos-general/how-to-edit-hubdb-tables), but you can also use the API endpoints documented here. For more information on HubDB tables and using their data on a HubSpot site, see the [CMS developers site](https://designers.hubspot.com/docs/tools/hubdb). You can also see the [documentation for dynamic pages](https://designers.hubspot.com/docs/tutorials/how-to-build-dynamic-pages-with-hubdb) for more details about the `useForPages` field.  HubDB tables support `draft` and `published` versions. This allows you to update data in the table, either for testing or to allow for a manual approval process, without affecting any live pages using the existing data. Draft data can be reviewed, and published by a user working in HubSpot or published via the API. Draft data can also be discarded, allowing users to go back to the published version of the data without disrupting it. If a table is set to be `allowed for public access`, you can access the published version of the table and rows without any authentication by specifying the portal id via the query parameter `portalId`.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ColumnRequest } from './columnRequest';

export class HubDbTableV3Request {
    /**
    * Name of the table
    */
    'name': string;
    /**
    * Label of the table
    */
    'label': string;
    /**
    * Specifies whether the table can be used for creation of dynamic pages
    */
    'useForPages'?: boolean;
    /**
    * Specifies whether the table can be read by public without authorization
    */
    'allowPublicApiAccess'?: boolean;
    /**
    * Specifies whether child tables can be created
    */
    'allowChildTables'?: boolean;
    /**
    * Specifies creation of multi-level dynamic pages using child tables
    */
    'enableChildTablePages'?: boolean;
    /**
    * List of columns in the table
    */
    'columns'?: Array<ColumnRequest>;
    /**
    * Specifies the key value pairs of the metadata fields with the associated column ids
    */
    'dynamicMetaTags'?: { [key: string]: number; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "useForPages",
            "baseName": "useForPages",
            "type": "boolean"
        },
        {
            "name": "allowPublicApiAccess",
            "baseName": "allowPublicApiAccess",
            "type": "boolean"
        },
        {
            "name": "allowChildTables",
            "baseName": "allowChildTables",
            "type": "boolean"
        },
        {
            "name": "enableChildTablePages",
            "baseName": "enableChildTablePages",
            "type": "boolean"
        },
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<ColumnRequest>"
        },
        {
            "name": "dynamicMetaTags",
            "baseName": "dynamicMetaTags",
            "type": "{ [key: string]: number; }"
        }    ];

    static getAttributeTypeMap() {
        return HubDbTableV3Request.attributeTypeMap;
    }
}

