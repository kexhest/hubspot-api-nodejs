// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';

/**
 * no description
 */
export class BatchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Remove the associations between all pairs of objects identified in the request body.
     * Archive a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public async archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociation?: BatchInputPublicAssociation, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError('Required parameter fromObjectType was null or undefined when calling archive.');
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError('Required parameter toObjectType was null or undefined when calling archive.');
        }



        // Path Params
        const localVarPath = '/crm/v3/associations/{fromObjectType}/{toObjectType}/batch/archive'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociation, "BatchInputPublicAssociation", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Associate all pairs of objects identified in the request body.
     * Create a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicAssociation 
     */
    public async create(fromObjectType: string, toObjectType: string, batchInputPublicAssociation?: BatchInputPublicAssociation, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError('Required parameter fromObjectType was null or undefined when calling create.');
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError('Required parameter toObjectType was null or undefined when calling create.');
        }



        // Path Params
        const localVarPath = '/crm/v3/associations/{fromObjectType}/{toObjectType}/batch/create'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicAssociation, "BatchInputPublicAssociation", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the IDs of all `{toObjectType}` objects associated with those specified in the request body.
     * Read a batch of associations
     * @param fromObjectType 
     * @param toObjectType 
     * @param batchInputPublicObjectId 
     */
    public async read(fromObjectType: string, toObjectType: string, batchInputPublicObjectId?: BatchInputPublicObjectId, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'fromObjectType' is not null or undefined
        if (fromObjectType === null || fromObjectType === undefined) {
            throw new RequiredError('Required parameter fromObjectType was null or undefined when calling read.');
        }


        // verify required parameter 'toObjectType' is not null or undefined
        if (toObjectType === null || toObjectType === undefined) {
            throw new RequiredError('Required parameter toObjectType was null or undefined when calling read.');
        }



        // Path Params
        const localVarPath = '/crm/v3/associations/{fromObjectType}/{toObjectType}/batch/read'
            .replace('{' + 'fromObjectType' + '}', encodeURIComponent(String(fromObjectType)))
            .replace('{' + 'toObjectType' + '}', encodeURIComponent(String(toObjectType)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(batchInputPublicObjectId, "BatchInputPublicObjectId", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class BatchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archive
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archive(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async create(response: ResponseContext): Promise<BatchResponsePublicAssociation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociation", ""
            ) as BatchResponsePublicAssociation;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociation", ""
            ) as BatchResponsePublicAssociation;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BatchResponsePublicAssociation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociation", ""
            ) as BatchResponsePublicAssociation;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to read
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async read(response: ResponseContext): Promise<BatchResponsePublicAssociationMulti > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationMulti = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationMulti", ""
            ) as BatchResponsePublicAssociationMulti;
            return body;
        }
        if (isCodeInRange("207", response.httpStatusCode)) {
            const body: BatchResponsePublicAssociationMulti = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationMulti", ""
            ) as BatchResponsePublicAssociationMulti;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BatchResponsePublicAssociationMulti = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BatchResponsePublicAssociationMulti", ""
            ) as BatchResponsePublicAssociationMulti;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}