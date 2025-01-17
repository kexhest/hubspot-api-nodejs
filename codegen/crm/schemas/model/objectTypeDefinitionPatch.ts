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
import { ObjectTypeDefinitionLabels } from './objectTypeDefinitionLabels';

/**
* Defines attributes to update on an object type.
*/
export class ObjectTypeDefinitionPatch {
    'labels'?: ObjectTypeDefinitionLabels;
    /**
    * The names of properties that should be **required** when creating an object of this type.
    */
    'requiredProperties'?: Array<string>;
    /**
    * Names of properties that will be indexed for this object type in by HubSpot\'s product search.
    */
    'searchableProperties'?: Array<string>;
    /**
    * The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.
    */
    'primaryDisplayProperty'?: string;
    /**
    * The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.
    */
    'secondaryDisplayProperties'?: Array<string>;
    'restorable'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "labels",
            "baseName": "labels",
            "type": "ObjectTypeDefinitionLabels"
        },
        {
            "name": "requiredProperties",
            "baseName": "requiredProperties",
            "type": "Array<string>"
        },
        {
            "name": "searchableProperties",
            "baseName": "searchableProperties",
            "type": "Array<string>"
        },
        {
            "name": "primaryDisplayProperty",
            "baseName": "primaryDisplayProperty",
            "type": "string"
        },
        {
            "name": "secondaryDisplayProperties",
            "baseName": "secondaryDisplayProperties",
            "type": "Array<string>"
        },
        {
            "name": "restorable",
            "baseName": "restorable",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ObjectTypeDefinitionPatch.attributeTypeMap;
    }
}

