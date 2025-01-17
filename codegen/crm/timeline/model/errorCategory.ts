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

export class ErrorCategory {
    'httpStatus': ErrorCategory.HttpStatusEnum;
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "httpStatus",
            "baseName": "httpStatus",
            "type": "ErrorCategory.HttpStatusEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ErrorCategory.attributeTypeMap;
    }
}

export namespace ErrorCategory {
    export enum HttpStatusEnum {
        Continue = <any> 'CONTINUE',
        SwitchingProtocols = <any> 'SWITCHING_PROTOCOLS',
        Processing = <any> 'PROCESSING',
        Ok = <any> 'OK',
        Created = <any> 'CREATED',
        Accepted = <any> 'ACCEPTED',
        NonAuthoritativeInformation = <any> 'NON_AUTHORITATIVE_INFORMATION',
        NoContent = <any> 'NO_CONTENT',
        ResetContent = <any> 'RESET_CONTENT',
        PartialContent = <any> 'PARTIAL_CONTENT',
        MultiStatus = <any> 'MULTI_STATUS',
        AlreadyReported = <any> 'ALREADY_REPORTED',
        ImUsed = <any> 'IM_USED',
        MultipleChoices = <any> 'MULTIPLE_CHOICES',
        MovedPermanently = <any> 'MOVED_PERMANENTLY',
        Found = <any> 'FOUND',
        SeeOther = <any> 'SEE_OTHER',
        NotModified = <any> 'NOT_MODIFIED',
        UseProxy = <any> 'USE_PROXY',
        TemporaryRedirect = <any> 'TEMPORARY_REDIRECT',
        PermanentRedirect = <any> 'PERMANENT_REDIRECT',
        BadRequest = <any> 'BAD_REQUEST',
        Unauthorized = <any> 'UNAUTHORIZED',
        PaymentRequired = <any> 'PAYMENT_REQUIRED',
        Forbidden = <any> 'FORBIDDEN',
        NotFound = <any> 'NOT_FOUND',
        MethodNotAllowed = <any> 'METHOD_NOT_ALLOWED',
        NotAcceptable = <any> 'NOT_ACCEPTABLE',
        ProxyAuthenticationRequired = <any> 'PROXY_AUTHENTICATION_REQUIRED',
        RequestTimeout = <any> 'REQUEST_TIMEOUT',
        Conflict = <any> 'CONFLICT',
        Gone = <any> 'GONE',
        LengthRequired = <any> 'LENGTH_REQUIRED',
        PreconditionFailed = <any> 'PRECONDITION_FAILED',
        RequestEntityTooLarge = <any> 'REQUEST_ENTITY_TOO_LARGE',
        RequestUriTooLong = <any> 'REQUEST_URI_TOO_LONG',
        UnsupportedMediaType = <any> 'UNSUPPORTED_MEDIA_TYPE',
        RequestedRangeNotSatisfiable = <any> 'REQUESTED_RANGE_NOT_SATISFIABLE',
        ExpectationFailed = <any> 'EXPECTATION_FAILED',
        ImATeapot = <any> 'IM_A_TEAPOT',
        MisdirectedRequest = <any> 'MISDIRECTED_REQUEST',
        UnprocessableEntity = <any> 'UNPROCESSABLE_ENTITY',
        Locked = <any> 'LOCKED',
        FailedDependency = <any> 'FAILED_DEPENDENCY',
        UpgradeRequired = <any> 'UPGRADE_REQUIRED',
        PreconditionRequired = <any> 'PRECONDITION_REQUIRED',
        TooManyRequests = <any> 'TOO_MANY_REQUESTS',
        RequestHeadersFieldsTooLarge = <any> 'REQUEST_HEADERS_FIELDS_TOO_LARGE',
        InternalStaleServiceDiscovery = <any> 'INTERNAL_STALE_SERVICE_DISCOVERY',
        UnavailableForLegalReasons = <any> 'UNAVAILABLE_FOR_LEGAL_REASONS',
        InternalServerError = <any> 'INTERNAL_SERVER_ERROR',
        NotImplemented = <any> 'NOT_IMPLEMENTED',
        BadGateway = <any> 'BAD_GATEWAY',
        ServiceUnavailable = <any> 'SERVICE_UNAVAILABLE',
        GatewayTimeout = <any> 'GATEWAY_TIMEOUT',
        HttpVersionNotSupported = <any> 'HTTP_VERSION_NOT_SUPPORTED',
        VariantAlsoNegotiates = <any> 'VARIANT_ALSO_NEGOTIATES',
        InsufficientStorage = <any> 'INSUFFICIENT_STORAGE',
        LoopDetected = <any> 'LOOP_DETECTED',
        NotExtended = <any> 'NOT_EXTENDED',
        NetworkAuthenticationRequired = <any> 'NETWORK_AUTHENTICATION_REQUIRED'
    }
}
