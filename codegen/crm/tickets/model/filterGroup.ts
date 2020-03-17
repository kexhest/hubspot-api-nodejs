/**
 * Tickets
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { Filter } from './filter';

export class FilterGroup {
    'filters': Array<Filter>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<Filter>"
        }    ];

    static getAttributeTypeMap() {
        return FilterGroup.attributeTypeMap;
    }
}

