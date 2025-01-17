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

export class InvoiceCreatePaymentRequest {
    /**
    * The amount that this payment is for.
    */
    'amountPaid': number;
    /**
    * The ISO 4217 currency code that represents the currency of the payment.
    */
    'currencyCode': string;
    /**
    * The datetime that this payment was received.
    */
    'paymentDateTime': Date;
    /**
    * The id of this payment in the external accounting system.
    */
    'externalPaymentId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountPaid",
            "baseName": "amountPaid",
            "type": "number"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "paymentDateTime",
            "baseName": "paymentDateTime",
            "type": "Date"
        },
        {
            "name": "externalPaymentId",
            "baseName": "externalPaymentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceCreatePaymentRequest.attributeTypeMap;
    }
}

