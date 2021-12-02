/**
 * URL redirects
 * URL redirect operations
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Paging } from './paging';
import { UrlMapping } from './urlMapping';

export class CollectionResponseWithTotalUrlMapping {
    /**
    * The number of available results.
    */
    'total': number;
    /**
    * Matched URLs.
    */
    'results': Array<UrlMapping>;
    'paging'?: Paging;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<UrlMapping>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging"
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalUrlMapping.attributeTypeMap;
    }
}
