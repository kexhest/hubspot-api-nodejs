/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Singular and plural labels for the object. Used in CRM display.
*/
export class ObjectTypeDefinitionLabels {
    /**
    * The word for one object. (There’s no way to change this later.)
    */
    'singular'?: string;
    /**
    * The word for multiple objects. (There’s no way to change this later.)
    */
    'plural'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "singular",
            "baseName": "singular",
            "type": "string"
        },
        {
            "name": "plural",
            "baseName": "plural",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ObjectTypeDefinitionLabels.attributeTypeMap;
    }
}

