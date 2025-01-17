/**
 * Transactional Email
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
* A request object to create a SMTP API token
*/
export class SmtpApiTokenRequestEgg {
    /**
    * Indicates whether a contact should be created for recipients of emails.
    */
    'createContact': boolean;
    /**
    * A name for the campaign tied to the SMTP API token.
    */
    'campaignName': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "createContact",
            "baseName": "createContact",
            "type": "boolean"
        },
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SmtpApiTokenRequestEgg.attributeTypeMap;
    }
}

