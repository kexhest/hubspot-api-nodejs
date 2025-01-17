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
import { StandardError } from './standardError';
import { TimelineEventResponse } from './timelineEventResponse';

export class BatchResponseTimelineEventResponseWithErrors {
    'status': BatchResponseTimelineEventResponseWithErrors.StatusEnum;
    'results': Array<TimelineEventResponse>;
    'numErrors'?: number;
    'errors'?: Array<StandardError>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
    'links'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseTimelineEventResponseWithErrors.StatusEnum"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<TimelineEventResponse>"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date"
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseTimelineEventResponseWithErrors.attributeTypeMap;
    }
}

export namespace BatchResponseTimelineEventResponseWithErrors {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Processing = <any> 'PROCESSING',
        Canceled = <any> 'CANCELED',
        Complete = <any> 'COMPLETE'
    }
}
