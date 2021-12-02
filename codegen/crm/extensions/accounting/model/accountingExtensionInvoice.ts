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
* Representation of an invoice in the external accounting system.
*/
export class AccountingExtensionInvoice {
    /**
    * The total amount due.
    */
    'amountDue': number;
    /**
    * The remaining outstanding balance due.
    */
    'balance'?: number;
    /**
    * The due date for payment of the invoice, in ISO-8601 date format (yyyy-MM-dd)
    */
    'dueDate': string;
    /**
    * The invoice number
    */
    'invoiceNumber'?: string;
    /**
    * The ID of the customer that this invoice is for.
    */
    'customerId'?: string;
    /**
    * The ISO 4217 currency code that represents the currency of this invoice.
    */
    'currency': string;
    /**
    * A link to the invoice in the external accounting system.
    */
    'invoiceLink': string;
    /**
    * The name of the customer that this invoice is for.
    */
    'customerName': string;
    /**
    * The currency status of the invoice.
    */
    'status': AccountingExtensionInvoice.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountDue",
            "baseName": "amountDue",
            "type": "number"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "dueDate",
            "baseName": "dueDate",
            "type": "string"
        },
        {
            "name": "invoiceNumber",
            "baseName": "invoiceNumber",
            "type": "string"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "invoiceLink",
            "baseName": "invoiceLink",
            "type": "string"
        },
        {
            "name": "customerName",
            "baseName": "customerName",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountingExtensionInvoice.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return AccountingExtensionInvoice.attributeTypeMap;
    }
}

export namespace AccountingExtensionInvoice {
    export enum StatusEnum {
        Created = <any> 'CREATED',
        Sent = <any> 'SENT',
        Paid = <any> 'PAID',
        Closed = <any> 'CLOSED',
        Overdue = <any> 'OVERDUE',
        Voided = <any> 'VOIDED'
    }
}