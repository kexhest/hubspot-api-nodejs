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
import { CreateInvoiceFeature } from './createInvoiceFeature';
import { ImportInvoiceFeature } from './importInvoiceFeature';
import { ObjectSyncFeature } from './objectSyncFeature';

/**
* Outlines the features that are supported by the external accounting system.
*/
export class AccountingFeatures {
    'createInvoice': CreateInvoiceFeature;
    'importInvoice': ImportInvoiceFeature;
    /**
    * Indicates if syncing objects from the external account system into HubSpot is supported for the integration. This is a map, where the key is one of `CONTACT` or `PRODUCT`, to indicate which type of object you do or don\'t support syncing. For example: ```   \"sync\": {     \"CONTACT\": {       \"toHubSpot\": true     },     \"PRODUCT\": {       \"toHubSpot\": true     }   } ``` 
    */
    'sync': { [key: string]: ObjectSyncFeature; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createInvoice",
            "baseName": "createInvoice",
            "type": "CreateInvoiceFeature"
        },
        {
            "name": "importInvoice",
            "baseName": "importInvoice",
            "type": "ImportInvoiceFeature"
        },
        {
            "name": "sync",
            "baseName": "sync",
            "type": "{ [key: string]: ObjectSyncFeature; }"
        }    ];

    static getAttributeTypeMap() {
        return AccountingFeatures.attributeTypeMap;
    }
}

