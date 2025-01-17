/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are standard objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Filter {
    'value'?: string;
    'propertyName': string;
    /**
    * null
    */
    'operator': Filter.OperatorEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "propertyName",
            "baseName": "propertyName",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "Filter.OperatorEnum"
        }    ];

    static getAttributeTypeMap() {
        return Filter.attributeTypeMap;
    }
}

export namespace Filter {
    export enum OperatorEnum {
        Eq = <any> 'EQ',
        Neq = <any> 'NEQ',
        Lt = <any> 'LT',
        Lte = <any> 'LTE',
        Gt = <any> 'GT',
        Gte = <any> 'GTE',
        Between = <any> 'BETWEEN',
        In = <any> 'IN',
        NotIn = <any> 'NOT_IN',
        HasProperty = <any> 'HAS_PROPERTY',
        NotHasProperty = <any> 'NOT_HAS_PROPERTY',
        ContainsToken = <any> 'CONTAINS_TOKEN',
        NotContainsToken = <any> 'NOT_CONTAINS_TOKEN'
    }
}
