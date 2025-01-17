/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { TimelineEventTemplateToken } from './timelineEventTemplateToken';

/**
* State of the template definition being updated.
*/
export class TimelineEventTemplateUpdateRequest {
    /**
    * The template name.
    */
    'name': string;
    /**
    * This uses Markdown syntax with Handlebars and event-specific data to render HTML on a timeline as a header.
    */
    'headerTemplate'?: string;
    /**
    * This uses Markdown syntax with Handlebars and event-specific data to render HTML on a timeline when you expand the details.
    */
    'detailTemplate'?: string;
    /**
    * A collection of tokens that can be used as custom properties on the event and to create fully fledged CRM objects.
    */
    'tokens': Array<TimelineEventTemplateToken>;
    /**
    * The template ID.
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "headerTemplate",
            "baseName": "headerTemplate",
            "type": "string"
        },
        {
            "name": "detailTemplate",
            "baseName": "detailTemplate",
            "type": "string"
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<TimelineEventTemplateToken>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventTemplateUpdateRequest.attributeTypeMap;
    }
}

