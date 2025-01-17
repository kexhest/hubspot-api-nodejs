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
import { Tax } from './tax';

/**
* A response to a search for taxes.
*/
export class TaxSearchResponse {
    /**
    * Designates if the response is a success (\'OK\') or failure (\'ERR\').
    */
    'result'?: TaxSearchResponse.ResultEnum;
    /**
    * The list of taxes that matched the search criteria
    */
    'taxes': Array<Tax>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "@result",
            "type": "TaxSearchResponse.ResultEnum"
        },
        {
            "name": "taxes",
            "baseName": "taxes",
            "type": "Array<Tax>"
        }    ];

    static getAttributeTypeMap() {
        return TaxSearchResponse.attributeTypeMap;
    }
}

export namespace TaxSearchResponse {
    export enum ResultEnum {
        Ok = <any> 'OK',
        Err = <any> 'ERR'
    }
}
