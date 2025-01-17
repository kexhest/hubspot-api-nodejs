/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Tag } from './tag';

export class BatchInputTag {
    'inputs': Array<Tag>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<Tag>"
        }    ];

    static getAttributeTypeMap() {
        return BatchInputTag.attributeTypeMap;
    }
}

