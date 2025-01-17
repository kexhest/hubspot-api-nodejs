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

/**
* New webhook settings for an app.
*/
export class SubscriptionCreateRequest {
    /**
    * Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.
    */
    'eventType': SubscriptionCreateRequest.EventTypeEnum;
    /**
    * The internal name of the property to monitor for changes. Only applies when `eventType` is `propertyChange`.
    */
    'propertyName'?: string;
    /**
    * Determines if the subscription is active or paused. Defaults to false.
    */
    'active'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "SubscriptionCreateRequest.EventTypeEnum"
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionCreateRequest.attributeTypeMap;
    }
}

export namespace SubscriptionCreateRequest {
    export enum EventTypeEnum {
        ContactPropertyChange = <any> 'contact.propertyChange',
        CompanyPropertyChange = <any> 'company.propertyChange',
        DealPropertyChange = <any> 'deal.propertyChange',
        ContactCreation = <any> 'contact.creation',
        ContactDeletion = <any> 'contact.deletion',
        ContactPrivacyDeletion = <any> 'contact.privacyDeletion',
        CompanyCreation = <any> 'company.creation',
        CompanyDeletion = <any> 'company.deletion',
        DealCreation = <any> 'deal.creation',
        DealDeletion = <any> 'deal.deletion'
    }
}
