/**
 * CRM Pipelines
 * Pipelines represent distinct stages in a workflow, like closing a deal or servicing a support ticket. These endpoints provide access to read and modify pipelines in HubSpot. Pipelines support `deals` and `tickets` object types.  ## Pipeline ID validation  When calling endpoints that take pipelineId as a parameter, that ID must correspond to an existing, un-archived pipeline. Otherwise the request will fail with a `404 Not Found` response.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { PipelineStageInput } from './pipelineStageInput';

/**
* An input used to create or replace a pipeline\'s definition.
*/
export class PipelineInput {
    /**
    * Pipeline stage inputs used to create the new or replacement pipeline.
    */
    'stages': Array<PipelineStageInput>;
    /**
    * A unique label used to organize pipelines in HubSpot\'s UI
    */
    'label': string;
    /**
    * The order for displaying this pipeline. If two pipelines have a matching `displayOrder`, they will be sorted alphabetically by label.
    */
    'displayOrder': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stages",
            "baseName": "stages",
            "type": "Array<PipelineStageInput>"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return PipelineInput.attributeTypeMap;
    }
}

