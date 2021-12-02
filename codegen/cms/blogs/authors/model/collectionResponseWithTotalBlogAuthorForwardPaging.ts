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
import { BlogAuthor } from './blogAuthor';
import { ForwardPaging } from './forwardPaging';

export class CollectionResponseWithTotalBlogAuthorForwardPaging {
    'total': number;
    'results': Array<BlogAuthor>;
    'paging'?: ForwardPaging;

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
            "type": "Array<BlogAuthor>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging"
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalBlogAuthorForwardPaging.attributeTypeMap;
    }
}
