/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
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
* Representation of payment terms that are defined in the external accounting system. One of \'dueDays\' or \'dueDate\' is required.
*/
export class AccountingExtensionTerm {
    /**
    * The due date for payment of the invoice, in ISO-8601 date format (yyyy-MM-dd)
    */
    'dueDate'?: string;
    /**
    * The display name of the payment terms.
    */
    'name': string;
    /**
    * The ID of the payment terms in the external accounting system.
    */
    'id': string;
    /**
    * The number of days that these payment terms represent.
    */
    'dueDays'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "dueDays",
            "baseName": "dueDays",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AccountingExtensionTerm.attributeTypeMap;
    }
}
