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
import { AccountingAppUrls } from './accountingAppUrls';
import { AccountingFeatures } from './accountingFeatures';

/**
* The URL Settings, which defines the URL endpoints that HubSpot will send requests to an external accounting application for certain actions.
*/
export class AccountingAppSettings {
    /**
    * The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
    */
    'appId': number;
    'urls': AccountingAppUrls;
    'features'?: AccountingFeatures;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "number"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "AccountingAppUrls"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "AccountingFeatures"
        }    ];

    static getAttributeTypeMap() {
        return AccountingAppSettings.attributeTypeMap;
    }
}

