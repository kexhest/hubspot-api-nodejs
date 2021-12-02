/**
 * CRM Imports
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
import { ImportRowCore } from './importRowCore';

export class PublicImportError {
    'errorType': PublicImportError.ErrorTypeEnum;
    'objectType'?: PublicImportError.ObjectTypeEnum;
    'invalidValue'?: string;
    'extraContext'?: string;
    'objectTypeId'?: string;
    'knownColumnNumber': number;
    'sourceData': ImportRowCore;
    'createdAt': number;
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorType",
            "baseName": "errorType",
            "type": "PublicImportError.ErrorTypeEnum"
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "PublicImportError.ObjectTypeEnum"
        },
        {
            "name": "invalidValue",
            "baseName": "invalidValue",
            "type": "string"
        },
        {
            "name": "extraContext",
            "baseName": "extraContext",
            "type": "string"
        },
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string"
        },
        {
            "name": "knownColumnNumber",
            "baseName": "knownColumnNumber",
            "type": "number"
        },
        {
            "name": "sourceData",
            "baseName": "sourceData",
            "type": "ImportRowCore"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicImportError.attributeTypeMap;
    }
}

export namespace PublicImportError {
    export enum ErrorTypeEnum {
        IncorrectNumberOfColumns = <any> 'INCORRECT_NUMBER_OF_COLUMNS',
        InvalidObjectId = <any> 'INVALID_OBJECT_ID',
        InvalidAssociationIdentifier = <any> 'INVALID_ASSOCIATION_IDENTIFIER',
        NoObjectIdFromAssociationIdentifier = <any> 'NO_OBJECT_ID_FROM_ASSOCIATION_IDENTIFIER',
        MultipleCompaniesWithThisDomain = <any> 'MULTIPLE_COMPANIES_WITH_THIS_DOMAIN',
        PropertyDefinitionNotFound = <any> 'PROPERTY_DEFINITION_NOT_FOUND',
        PropertyValueNotFound = <any> 'PROPERTY_VALUE_NOT_FOUND',
        CouldNotFindOwner = <any> 'COULD_NOT_FIND_OWNER',
        MultipleOwnersFound = <any> 'MULTIPLE_OWNERS_FOUND',
        CouldNotParseNumber = <any> 'COULD_NOT_PARSE_NUMBER',
        CouldNotParseDate = <any> 'COULD_NOT_PARSE_DATE',
        CouldNotParseTerm = <any> 'COULD_NOT_PARSE_TERM',
        OutsideValidTimeRange = <any> 'OUTSIDE_VALID_TIME_RANGE',
        OutsideValidTermRange = <any> 'OUTSIDE_VALID_TERM_RANGE',
        CouldNotParseRow = <any> 'COULD_NOT_PARSE_ROW',
        InvalidEnumerationOption = <any> 'INVALID_ENUMERATION_OPTION',
        AmbiguousEnumerationOption = <any> 'AMBIGUOUS_ENUMERATION_OPTION',
        FailedValidation = <any> 'FAILED_VALIDATION',
        FailedToCreateAssociation = <any> 'FAILED_TO_CREATE_ASSOCIATION',
        FileNotFound = <any> 'FILE_NOT_FOUND',
        InvalidColumnConfiguration = <any> 'INVALID_COLUMN_CONFIGURATION',
        InvalidFileType = <any> 'INVALID_FILE_TYPE',
        InvalidSpreadsheet = <any> 'INVALID_SPREADSHEET',
        InvalidSheetCount = <any> 'INVALID_SHEET_COUNT',
        FailedToProcessObjectWithEmptyPropertyValues = <any> 'FAILED_TO_PROCESS_OBJECT_WITH_EMPTY_PROPERTY_VALUES',
        UnknownBadRequest = <any> 'UNKNOWN_BAD_REQUEST',
        GdprBlacklistedEmail = <any> 'GDPR_BLACKLISTED_EMAIL',
        DuplicateAssociationId = <any> 'DUPLICATE_ASSOCIATION_ID',
        LimitExceeded = <any> 'LIMIT_EXCEEDED',
        InvalidAlternateId = <any> 'INVALID_ALTERNATE_ID',
        InvalidEmail = <any> 'INVALID_EMAIL',
        InvalidDomain = <any> 'INVALID_DOMAIN',
        DuplicateRowContent = <any> 'DUPLICATE_ROW_CONTENT',
        InvalidNumberSize = <any> 'INVALID_NUMBER_SIZE',
        UnknownError = <any> 'UNKNOWN_ERROR',
        FailedToOptOutContact = <any> 'FAILED_TO_OPT_OUT_CONTACT',
        InvalidRequiredProperty = <any> 'INVALID_REQUIRED_PROPERTY',
        DuplicateAlternateId = <any> 'DUPLICATE_ALTERNATE_ID',
        DuplicateObjectId = <any> 'DUPLICATE_OBJECT_ID',
        DuplicateUniquePropertyValue = <any> 'DUPLICATE_UNIQUE_PROPERTY_VALUE'
    }
    export enum ObjectTypeEnum {
        Contact = <any> 'CONTACT',
        Company = <any> 'COMPANY',
        Deal = <any> 'DEAL',
        Engagement = <any> 'ENGAGEMENT',
        Ticket = <any> 'TICKET',
        Owner = <any> 'OWNER',
        Product = <any> 'PRODUCT',
        LineItem = <any> 'LINE_ITEM',
        BetDeliverableService = <any> 'BET_DELIVERABLE_SERVICE',
        Content = <any> 'CONTENT',
        Conversation = <any> 'CONVERSATION',
        BetAlert = <any> 'BET_ALERT',
        Portal = <any> 'PORTAL',
        Quote = <any> 'QUOTE',
        FormSubmissionInbounddb = <any> 'FORM_SUBMISSION_INBOUNDDB',
        Quota = <any> 'QUOTA',
        Unsubscribe = <any> 'UNSUBSCRIBE',
        Communication = <any> 'COMMUNICATION',
        FeedbackSubmission = <any> 'FEEDBACK_SUBMISSION',
        Attribution = <any> 'ATTRIBUTION',
        SalesforceSyncError = <any> 'SALESFORCE_SYNC_ERROR',
        RestorableCrmObject = <any> 'RESTORABLE_CRM_OBJECT',
        Hub = <any> 'HUB',
        LandingPage = <any> 'LANDING_PAGE',
        ProductOrFolder = <any> 'PRODUCT_OR_FOLDER',
        Task = <any> 'TASK',
        Form = <any> 'FORM',
        MarketingEmail = <any> 'MARKETING_EMAIL',
        AdAccount = <any> 'AD_ACCOUNT',
        AdCampaign = <any> 'AD_CAMPAIGN',
        AdGroup = <any> 'AD_GROUP',
        Ad = <any> 'AD',
        Keyword = <any> 'KEYWORD',
        Campaign = <any> 'CAMPAIGN',
        SocialChannel = <any> 'SOCIAL_CHANNEL',
        SocialPost = <any> 'SOCIAL_POST',
        SitePage = <any> 'SITE_PAGE',
        BlogPost = <any> 'BLOG_POST',
        Import = <any> 'IMPORT',
        Export = <any> 'EXPORT',
        Cta = <any> 'CTA',
        TaskTemplate = <any> 'TASK_TEMPLATE',
        AutomationPlatformFlow = <any> 'AUTOMATION_PLATFORM_FLOW',
        ObjectList = <any> 'OBJECT_LIST',
        Note = <any> 'NOTE',
        MeetingEvent = <any> 'MEETING_EVENT',
        Call = <any> 'CALL',
        Email = <any> 'EMAIL',
        PublishingTask = <any> 'PUBLISHING_TASK',
        ConversationSession = <any> 'CONVERSATION_SESSION',
        ContactCreateAttribution = <any> 'CONTACT_CREATE_ATTRIBUTION',
        Invoice = <any> 'INVOICE',
        MarketingEvent = <any> 'MARKETING_EVENT',
        ConversationInbox = <any> 'CONVERSATION_INBOX',
        Chatflow = <any> 'CHATFLOW',
        MediaBridge = <any> 'MEDIA_BRIDGE',
        Sequence = <any> 'SEQUENCE',
        SequenceStep = <any> 'SEQUENCE_STEP',
        Forecast = <any> 'FORECAST',
        Snippet = <any> 'SNIPPET',
        Template = <any> 'TEMPLATE',
        DealCreateAttribution = <any> 'DEAL_CREATE_ATTRIBUTION',
        QuoteTemplate = <any> 'QUOTE_TEMPLATE',
        QuoteModule = <any> 'QUOTE_MODULE',
        QuoteModuleField = <any> 'QUOTE_MODULE_FIELD',
        QuoteField = <any> 'QUOTE_FIELD',
        SequenceEnrollment = <any> 'SEQUENCE_ENROLLMENT',
        Subscription = <any> 'SUBSCRIPTION',
        AcceptanceTest = <any> 'ACCEPTANCE_TEST',
        SocialBroadcast = <any> 'SOCIAL_BROADCAST',
        DealSplit = <any> 'DEAL_SPLIT',
        DealRegistration = <any> 'DEAL_REGISTRATION',
        GoalTarget = <any> 'GOAL_TARGET',
        GoalTargetGroup = <any> 'GOAL_TARGET_GROUP',
        PortalObjectSyncMessage = <any> 'PORTAL_OBJECT_SYNC_MESSAGE',
        FileManagerFile = <any> 'FILE_MANAGER_FILE',
        FileManagerFolder = <any> 'FILE_MANAGER_FOLDER',
        SequenceStepEnrollment = <any> 'SEQUENCE_STEP_ENROLLMENT',
        Approval = <any> 'APPROVAL',
        ApprovalStep = <any> 'APPROVAL_STEP',
        CtaVariant = <any> 'CTA_VARIANT',
        Unknown = <any> 'UNKNOWN'
    }
}