/**
 * Subscriptions
 * Subscriptions allow contacts to control what forms of communications they receive. Contacts can decide whether they want to receive communication pertaining to a specific topic, brand, or an entire HubSpot account.
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
* The status of a subscription for a contact.
*/
export class PublicSubscriptionStatus {
    /**
    * The ID for the subscription.
    */
    'id': string;
    /**
    * The name of the subscription.
    */
    'name': string;
    /**
    * A description of the subscription.
    */
    'description': string;
    /**
    * Whether the contact is subscribed.
    */
    'status': PublicSubscriptionStatus.StatusEnum;
    /**
    * Where the status is determined from e.g. PORTAL_WIDE_STATUS if the contact opted out from the portal.
    */
    'sourceOfStatus': PublicSubscriptionStatus.SourceOfStatusEnum;
    /**
    * The ID of the brand that the subscription is associated with, if there is one.
    */
    'brandId'?: number;
    /**
    * The name of the preferences group that the subscription is associated with.
    */
    'preferenceGroupName'?: string;
    /**
    * The legal reason for the current status of the subscription.
    */
    'legalBasis'?: PublicSubscriptionStatus.LegalBasisEnum;
    /**
    * A more detailed explanation to go with the legal basis.
    */
    'legalBasisExplanation'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PublicSubscriptionStatus.StatusEnum"
        },
        {
            "name": "sourceOfStatus",
            "baseName": "sourceOfStatus",
            "type": "PublicSubscriptionStatus.SourceOfStatusEnum"
        },
        {
            "name": "brandId",
            "baseName": "brandId",
            "type": "number"
        },
        {
            "name": "preferenceGroupName",
            "baseName": "preferenceGroupName",
            "type": "string"
        },
        {
            "name": "legalBasis",
            "baseName": "legalBasis",
            "type": "PublicSubscriptionStatus.LegalBasisEnum"
        },
        {
            "name": "legalBasisExplanation",
            "baseName": "legalBasisExplanation",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicSubscriptionStatus.attributeTypeMap;
    }
}

export namespace PublicSubscriptionStatus {
    export enum StatusEnum {
        Subscribed = <any> 'SUBSCRIBED',
        NotSubscribed = <any> 'NOT_SUBSCRIBED'
    }
    export enum SourceOfStatusEnum {
        PortalWideStatus = <any> 'PORTAL_WIDE_STATUS',
        BrandWideStatus = <any> 'BRAND_WIDE_STATUS',
        SubscriptionStatus = <any> 'SUBSCRIPTION_STATUS'
    }
    export enum LegalBasisEnum {
        LegitimateInterestPql = <any> 'LEGITIMATE_INTEREST_PQL',
        LegitimateInterestClient = <any> 'LEGITIMATE_INTEREST_CLIENT',
        PerformanceOfContract = <any> 'PERFORMANCE_OF_CONTRACT',
        ConsentWithNotice = <any> 'CONSENT_WITH_NOTICE',
        NonGdpr = <any> 'NON_GDPR',
        ProcessAndStore = <any> 'PROCESS_AND_STORE',
        LegitimateInterestOther = <any> 'LEGITIMATE_INTEREST_OTHER'
    }
}
