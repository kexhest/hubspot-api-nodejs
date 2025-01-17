/**
 * Webhooks API
 * Provides a way for apps to subscribe to certain change events in HubSpot. Once configured, apps will receive event payloads containing details about the changes at a specified target URL. There can only be one target URL for receiving event notifications per app.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ThrottlingSettings } from './throttlingSettings';

/**
* Webhook settings for an app.
*/
export class SettingsResponse {
    /**
    * A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
    */
    'targetUrl': string;
    'throttling': ThrottlingSettings;
    /**
    * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
    */
    'createdAt': Date;
    /**
    * When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#).
    */
    'updatedAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "targetUrl",
            "baseName": "targetUrl",
            "type": "string"
        },
        {
            "name": "throttling",
            "baseName": "throttling",
            "type": "ThrottlingSettings"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SettingsResponse.attributeTypeMap;
    }
}

