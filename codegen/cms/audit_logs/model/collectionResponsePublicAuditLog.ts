/**
 * CMS Audit Logs
 * Use this endpoint to query audit logs of CMS changes that occurred on your HubSpot account.
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
import { PublicAuditLog } from './publicAuditLog';

/**
* The collection of audit logs.
*/
export class CollectionResponsePublicAuditLog {
    'results': Array<PublicAuditLog>;
    'paging'?: Paging;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicAuditLog>"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging"
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicAuditLog.attributeTypeMap;
    }
}

