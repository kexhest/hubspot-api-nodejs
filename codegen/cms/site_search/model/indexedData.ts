/**
 * CMS Site Search
 * Use these endpoints for searching content on your HubSpot hosted CMS website(s).
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SearchHitField } from './searchHitField';

/**
* The indexed data in HubSpot
*/
export class IndexedData {
    /**
    * The ID of the document in HubSpot.
    */
    'id': string;
    /**
    * The type of document. Can be `SITE_PAGE`, `LANDING_PAGE`, `BLOG_POST`, `LISTING_PAGE`, or `KNOWLEDGE_ARTICLE`.
    */
    'type': IndexedData.TypeEnum;
    /**
    * The indexed fields in HubSpot.
    */
    'fields': { [key: string]: SearchHitField; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IndexedData.TypeEnum"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: SearchHitField; }"
        }    ];

    static getAttributeTypeMap() {
        return IndexedData.attributeTypeMap;
    }
}

export namespace IndexedData {
    export enum TypeEnum {
        LandingPage = <any> 'LANDING_PAGE',
        BlogPost = <any> 'BLOG_POST',
        SitePage = <any> 'SITE_PAGE',
        KnowledgeArticle = <any> 'KNOWLEDGE_ARTICLE',
        ListingPage = <any> 'LISTING_PAGE'
    }
}
