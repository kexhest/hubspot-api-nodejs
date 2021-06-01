/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Object for updating folders.
*/
export class FolderUpdateInput {
    /**
    * Id of the folder to change.
    */
    'id': string;
    /**
    * New name. If specified the folder's name and fullPath will change. All children of the folder will be updated accordingly.
    */
    'name'?: string;
    /**
    * New parent folder ID. If changed, the folder and all it's children will be moved into the specified folder. parentFolderId and parentFolderPath cannot be specified at the same time.
    */
    'parentFolderId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return FolderUpdateInput.attributeTypeMap;
    }
    
    public constructor() {
    }
}
