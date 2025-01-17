/**
 * Blog Post endpoints
 * \"Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags\"
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { LayoutSection } from './layoutSection';

/**
* Model definition for a Blog Post.
*/
export class BlogPost {
    /**
    * The unique ID of the Blog Post.
    */
    'id': string;
    /**
    * The path of the this blog post. This field is appended to the domain to construct the url of this post.
    */
    'slug': string;
    /**
    * The ID of the parent Blog this Blog Post is associated with.
    */
    'contentGroupId': string;
    /**
    * The GUID of the marketing campaign this Blog Post is a part of.
    */
    'campaign': string;
    /**
    * ID of the type of object this is. Should always .
    */
    'categoryId': number;
    /**
    * An ENUM descibing the current state of this Blog Post.
    */
    'state': string;
    'templatePath': string;
    /**
    * The internal name of the blog post.
    */
    'name': string;
    'mabExperimentId': string;
    /**
    * If True, the post will not show up in your dashboard, although the post could still be live.
    */
    'archived': boolean;
    /**
    * The name of the user that updated this blog post.
    */
    'authorName': string;
    'abTestId': string;
    /**
    * The ID of the user that created this blog post.
    */
    'createdById': string;
    /**
    * The ID of the user that updated this blog post.
    */
    'updatedById': string;
    /**
    * The domain this Blog Post will resolve to. If null, the Blog Post will default to the domain of the ParentBlog.
    */
    'domain': string;
    'subcategory': string;
    'abStatus': BlogPost.AbStatusEnum;
    'folderId': string;
    /**
    * A data structure containing the data for all the modules inside the containers for this post. This will only be populated if the page has widget containers.
    */
    'widgetContainers': { [key: string]: object; };
    /**
    * A data structure containing the data for all the modules for this page.
    */
    'widgets': { [key: string]: object; };
    /**
    * The explicitly defined language of the Blog Post. If null, the Blog Post will default to the language of the ParentBlog.
    */
    'language': BlogPost.LanguageEnum;
    /**
    * ID of the primary blog post this object was translated from.
    */
    'translatedFromId': string;
    'dynamicPageHubDbTableId': string;
    /**
    * The ID of the Blog Author associated with this Blog Post.
    */
    'blogAuthorId': string;
    /**
    * List of IDs for the tags associated with this Blog Post.
    */
    'tagIds': Array<number>;
    /**
    * The HTML of the main post body.
    */
    'postBody': string;
    /**
    * The summary of the blog post that will appear on the main listing page.
    */
    'postSummary': string;
    /**
    * The contents of the RSS body for this Blog Post.
    */
    'rssBody': string;
    /**
    * The contents of the RSS summary for this Blog Post.
    */
    'rssSummary': string;
    /**
    * Boolean to allow overriding the AMP settings for the blog.
    */
    'enableGoogleAmpOutputOverride': boolean;
    /**
    * The html title of this Blog Post.
    */
    'htmlTitle': string;
    'pageRedirected': boolean;
    'pageExpiryEnabled': boolean;
    'pageExpiryDate': number;
    'pageExpiryRedirectId': number;
    'pageExpiryRedirectUrl': string;
    /**
    * Boolean to determine if this post should use a featuredImage.
    */
    'useFeaturedImage': boolean;
    /**
    * Set this to create a password protected page. Entering the password will be required to view the page.
    */
    'password': string;
    /**
    * List of stylesheets to attach to this blog post. These stylesheets are attached to just this page. Order of precedence is bottom to top, just like in the HTML.
    */
    'attachedStylesheets': Array<{ [key: string]: object; }>;
    /**
    * Boolean to determine whether or not the Primary CSS Files should be applied.
    */
    'includeDefaultCustomCss': boolean;
    /**
    * Boolean to determine whether or not the styles from the template should be applied.
    */
    'enableDomainStylesheets': boolean;
    /**
    * Boolean to determine whether or not the styles from the template should be applied.
    */
    'enableLayoutStylesheets': boolean;
    /**
    * A description that goes in <meta> tag on the page.
    */
    'metaDescription': string;
    /**
    * Set this to true if you want to be published immediately when the schedule publish endpoint is called, and to ignore the publish_date setting.
    */
    'publishImmediately': boolean;
    /**
    * Custom HTML for embed codes, javascript, etc. that goes in the <head> tag of the page.
    */
    'headHtml': string;
    /**
    * Custom HTML for embed codes, javascript that should be placed before the </body> tag of the page.
    */
    'footerHtml': string;
    /**
    * An ENUM descibing the type of this object. Should always be BLOG_POST.
    */
    'contentTypeCategory': BlogPost.ContentTypeCategoryEnum;
    /**
    * A generated ENUM descibing the current state of this Blog Post. Should always match state.
    */
    'currentState': BlogPost.CurrentStateEnum;
    /**
    * Optional override to set the URL to be used in the rel=canonical link tag on the page.
    */
    'linkRelCanonicalUrl': string;
    /**
    * The featuredImage of this Blog Post.
    */
    'featuredImage': string;
    /**
    * Alt Text of the featuredImage.
    */
    'featuredImageAltText': string;
    /**
    * Boolean to determine whether or not to respect publicAccessRules.
    */
    'publicAccessRulesEnabled': boolean;
    /**
    * Rules for require member registration to access private content.
    */
    'publicAccessRules': Array<object>;
    'layoutSections': { [key: string]: LayoutSection; };
    'themeSettingsValues': { [key: string]: object; };
    /**
    * A generated field representing the URL of this blog post.
    */
    'url': string;
    /**
    * The date (ISO8601 format) the blog post is to be published at.
    */
    'publishDate': Date;
    /**
    * The timestamp (ISO8601 format) when this Blog Post was deleted.
    */
    'deletedAt': Date;
    /**
    * The timestamp (ISO8601 format) when this blog post was created.
    */
    'createdAt': Date;
    /**
    * Boolean describing if this Blog Post is published.
    */
    'published': boolean;
    /**
    * The timestamp (ISO8601 format) when this Blog Post was last updated.
    */
    'updatedAt': Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "slug",
            "baseName": "slug",
            "type": "string"
        },
        {
            "name": "contentGroupId",
            "baseName": "contentGroupId",
            "type": "string"
        },
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "string"
        },
        {
            "name": "categoryId",
            "baseName": "categoryId",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "templatePath",
            "baseName": "templatePath",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "mabExperimentId",
            "baseName": "mabExperimentId",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "authorName",
            "baseName": "authorName",
            "type": "string"
        },
        {
            "name": "abTestId",
            "baseName": "abTestId",
            "type": "string"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "updatedById",
            "baseName": "updatedById",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string"
        },
        {
            "name": "subcategory",
            "baseName": "subcategory",
            "type": "string"
        },
        {
            "name": "abStatus",
            "baseName": "abStatus",
            "type": "BlogPost.AbStatusEnum"
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string"
        },
        {
            "name": "widgetContainers",
            "baseName": "widgetContainers",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "widgets",
            "baseName": "widgets",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "BlogPost.LanguageEnum"
        },
        {
            "name": "translatedFromId",
            "baseName": "translatedFromId",
            "type": "string"
        },
        {
            "name": "dynamicPageHubDbTableId",
            "baseName": "dynamicPageHubDbTableId",
            "type": "string"
        },
        {
            "name": "blogAuthorId",
            "baseName": "blogAuthorId",
            "type": "string"
        },
        {
            "name": "tagIds",
            "baseName": "tagIds",
            "type": "Array<number>"
        },
        {
            "name": "postBody",
            "baseName": "postBody",
            "type": "string"
        },
        {
            "name": "postSummary",
            "baseName": "postSummary",
            "type": "string"
        },
        {
            "name": "rssBody",
            "baseName": "rssBody",
            "type": "string"
        },
        {
            "name": "rssSummary",
            "baseName": "rssSummary",
            "type": "string"
        },
        {
            "name": "enableGoogleAmpOutputOverride",
            "baseName": "enableGoogleAmpOutputOverride",
            "type": "boolean"
        },
        {
            "name": "htmlTitle",
            "baseName": "htmlTitle",
            "type": "string"
        },
        {
            "name": "pageRedirected",
            "baseName": "pageRedirected",
            "type": "boolean"
        },
        {
            "name": "pageExpiryEnabled",
            "baseName": "pageExpiryEnabled",
            "type": "boolean"
        },
        {
            "name": "pageExpiryDate",
            "baseName": "pageExpiryDate",
            "type": "number"
        },
        {
            "name": "pageExpiryRedirectId",
            "baseName": "pageExpiryRedirectId",
            "type": "number"
        },
        {
            "name": "pageExpiryRedirectUrl",
            "baseName": "pageExpiryRedirectUrl",
            "type": "string"
        },
        {
            "name": "useFeaturedImage",
            "baseName": "useFeaturedImage",
            "type": "boolean"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "attachedStylesheets",
            "baseName": "attachedStylesheets",
            "type": "Array<{ [key: string]: object; }>"
        },
        {
            "name": "includeDefaultCustomCss",
            "baseName": "includeDefaultCustomCss",
            "type": "boolean"
        },
        {
            "name": "enableDomainStylesheets",
            "baseName": "enableDomainStylesheets",
            "type": "boolean"
        },
        {
            "name": "enableLayoutStylesheets",
            "baseName": "enableLayoutStylesheets",
            "type": "boolean"
        },
        {
            "name": "metaDescription",
            "baseName": "metaDescription",
            "type": "string"
        },
        {
            "name": "publishImmediately",
            "baseName": "publishImmediately",
            "type": "boolean"
        },
        {
            "name": "headHtml",
            "baseName": "headHtml",
            "type": "string"
        },
        {
            "name": "footerHtml",
            "baseName": "footerHtml",
            "type": "string"
        },
        {
            "name": "contentTypeCategory",
            "baseName": "contentTypeCategory",
            "type": "BlogPost.ContentTypeCategoryEnum"
        },
        {
            "name": "currentState",
            "baseName": "currentState",
            "type": "BlogPost.CurrentStateEnum"
        },
        {
            "name": "linkRelCanonicalUrl",
            "baseName": "linkRelCanonicalUrl",
            "type": "string"
        },
        {
            "name": "featuredImage",
            "baseName": "featuredImage",
            "type": "string"
        },
        {
            "name": "featuredImageAltText",
            "baseName": "featuredImageAltText",
            "type": "string"
        },
        {
            "name": "publicAccessRulesEnabled",
            "baseName": "publicAccessRulesEnabled",
            "type": "boolean"
        },
        {
            "name": "publicAccessRules",
            "baseName": "publicAccessRules",
            "type": "Array<object>"
        },
        {
            "name": "layoutSections",
            "baseName": "layoutSections",
            "type": "{ [key: string]: LayoutSection; }"
        },
        {
            "name": "themeSettingsValues",
            "baseName": "themeSettingsValues",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "publishDate",
            "baseName": "publishDate",
            "type": "Date"
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "boolean"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return BlogPost.attributeTypeMap;
    }
}

export namespace BlogPost {
    export enum AbStatusEnum {
        Master = <any> 'master',
        Variant = <any> 'variant',
        LoserVariant = <any> 'loser_variant',
        MabMaster = <any> 'mab_master',
        MabVariant = <any> 'mab_variant',
        AutomatedMaster = <any> 'automated_master',
        AutomatedVariant = <any> 'automated_variant',
        AutomatedLoserVariant = <any> 'automated_loser_variant'
    }
    export enum LanguageEnum {
        Af = <any> 'af',
        AfNa = <any> 'af-na',
        AfZa = <any> 'af-za',
        Agq = <any> 'agq',
        AgqCm = <any> 'agq-cm',
        Ak = <any> 'ak',
        AkGh = <any> 'ak-gh',
        Am = <any> 'am',
        AmEt = <any> 'am-et',
        Ar = <any> 'ar',
        Ar001 = <any> 'ar-001',
        ArAe = <any> 'ar-ae',
        ArBh = <any> 'ar-bh',
        ArDj = <any> 'ar-dj',
        ArDz = <any> 'ar-dz',
        ArEg = <any> 'ar-eg',
        ArEh = <any> 'ar-eh',
        ArEr = <any> 'ar-er',
        ArIl = <any> 'ar-il',
        ArIq = <any> 'ar-iq',
        ArJo = <any> 'ar-jo',
        ArKm = <any> 'ar-km',
        ArKw = <any> 'ar-kw',
        ArLb = <any> 'ar-lb',
        ArLy = <any> 'ar-ly',
        ArMa = <any> 'ar-ma',
        ArMr = <any> 'ar-mr',
        ArOm = <any> 'ar-om',
        ArPs = <any> 'ar-ps',
        ArQa = <any> 'ar-qa',
        ArSa = <any> 'ar-sa',
        ArSd = <any> 'ar-sd',
        ArSo = <any> 'ar-so',
        ArSs = <any> 'ar-ss',
        ArSy = <any> 'ar-sy',
        ArTd = <any> 'ar-td',
        ArTn = <any> 'ar-tn',
        ArYe = <any> 'ar-ye',
        As = <any> 'as',
        AsIn = <any> 'as-in',
        Asa = <any> 'asa',
        AsaTz = <any> 'asa-tz',
        Ast = <any> 'ast',
        AstEs = <any> 'ast-es',
        Az = <any> 'az',
        AzAz = <any> 'az-az',
        Bas = <any> 'bas',
        BasCm = <any> 'bas-cm',
        Be = <any> 'be',
        BeBy = <any> 'be-by',
        Bem = <any> 'bem',
        BemZm = <any> 'bem-zm',
        Bez = <any> 'bez',
        BezTz = <any> 'bez-tz',
        Bg = <any> 'bg',
        BgBg = <any> 'bg-bg',
        Bm = <any> 'bm',
        BmMl = <any> 'bm-ml',
        Bn = <any> 'bn',
        BnBd = <any> 'bn-bd',
        BnIn = <any> 'bn-in',
        Bo = <any> 'bo',
        BoCn = <any> 'bo-cn',
        BoIn = <any> 'bo-in',
        Br = <any> 'br',
        BrFr = <any> 'br-fr',
        Brx = <any> 'brx',
        BrxIn = <any> 'brx-in',
        Bs = <any> 'bs',
        BsBa = <any> 'bs-ba',
        Ca = <any> 'ca',
        CaAd = <any> 'ca-ad',
        CaEs = <any> 'ca-es',
        CaFr = <any> 'ca-fr',
        CaIt = <any> 'ca-it',
        Ccp = <any> 'ccp',
        CcpBd = <any> 'ccp-bd',
        CcpIn = <any> 'ccp-in',
        Ce = <any> 'ce',
        CeRu = <any> 'ce-ru',
        Cgg = <any> 'cgg',
        CggUg = <any> 'cgg-ug',
        Chr = <any> 'chr',
        ChrUs = <any> 'chr-us',
        Ckb = <any> 'ckb',
        CkbIq = <any> 'ckb-iq',
        CkbIr = <any> 'ckb-ir',
        Cs = <any> 'cs',
        CsCz = <any> 'cs-cz',
        Cu = <any> 'cu',
        CuRu = <any> 'cu-ru',
        Cy = <any> 'cy',
        CyGb = <any> 'cy-gb',
        Da = <any> 'da',
        DaDk = <any> 'da-dk',
        DaGl = <any> 'da-gl',
        Dav = <any> 'dav',
        DavKe = <any> 'dav-ke',
        De = <any> 'de',
        DeAt = <any> 'de-at',
        DeBe = <any> 'de-be',
        DeCh = <any> 'de-ch',
        DeDe = <any> 'de-de',
        DeGr = <any> 'de-gr',
        DeIt = <any> 'de-it',
        DeLi = <any> 'de-li',
        DeLu = <any> 'de-lu',
        Dje = <any> 'dje',
        DjeNe = <any> 'dje-ne',
        Dsb = <any> 'dsb',
        DsbDe = <any> 'dsb-de',
        Dua = <any> 'dua',
        DuaCm = <any> 'dua-cm',
        Dyo = <any> 'dyo',
        DyoSn = <any> 'dyo-sn',
        Dz = <any> 'dz',
        DzBt = <any> 'dz-bt',
        Ebu = <any> 'ebu',
        EbuKe = <any> 'ebu-ke',
        Ee = <any> 'ee',
        EeGh = <any> 'ee-gh',
        EeTg = <any> 'ee-tg',
        El = <any> 'el',
        ElCy = <any> 'el-cy',
        ElGr = <any> 'el-gr',
        En = <any> 'en',
        En001 = <any> 'en-001',
        En150 = <any> 'en-150',
        EnAg = <any> 'en-ag',
        EnAi = <any> 'en-ai',
        EnAs = <any> 'en-as',
        EnAt = <any> 'en-at',
        EnAu = <any> 'en-au',
        EnBb = <any> 'en-bb',
        EnBe = <any> 'en-be',
        EnBi = <any> 'en-bi',
        EnBm = <any> 'en-bm',
        EnBs = <any> 'en-bs',
        EnBw = <any> 'en-bw',
        EnBz = <any> 'en-bz',
        EnCa = <any> 'en-ca',
        EnCc = <any> 'en-cc',
        EnCh = <any> 'en-ch',
        EnCk = <any> 'en-ck',
        EnCm = <any> 'en-cm',
        EnCx = <any> 'en-cx',
        EnCy = <any> 'en-cy',
        EnDe = <any> 'en-de',
        EnDg = <any> 'en-dg',
        EnDk = <any> 'en-dk',
        EnDm = <any> 'en-dm',
        EnEr = <any> 'en-er',
        EnFi = <any> 'en-fi',
        EnFj = <any> 'en-fj',
        EnFk = <any> 'en-fk',
        EnFm = <any> 'en-fm',
        EnGb = <any> 'en-gb',
        EnGd = <any> 'en-gd',
        EnGg = <any> 'en-gg',
        EnGh = <any> 'en-gh',
        EnGi = <any> 'en-gi',
        EnGm = <any> 'en-gm',
        EnGu = <any> 'en-gu',
        EnGy = <any> 'en-gy',
        EnHk = <any> 'en-hk',
        EnIe = <any> 'en-ie',
        EnIl = <any> 'en-il',
        EnIm = <any> 'en-im',
        EnIn = <any> 'en-in',
        EnIo = <any> 'en-io',
        EnJe = <any> 'en-je',
        EnJm = <any> 'en-jm',
        EnKe = <any> 'en-ke',
        EnKi = <any> 'en-ki',
        EnKn = <any> 'en-kn',
        EnKy = <any> 'en-ky',
        EnLc = <any> 'en-lc',
        EnLr = <any> 'en-lr',
        EnLs = <any> 'en-ls',
        EnMg = <any> 'en-mg',
        EnMh = <any> 'en-mh',
        EnMo = <any> 'en-mo',
        EnMp = <any> 'en-mp',
        EnMs = <any> 'en-ms',
        EnMt = <any> 'en-mt',
        EnMu = <any> 'en-mu',
        EnMw = <any> 'en-mw',
        EnMy = <any> 'en-my',
        EnNa = <any> 'en-na',
        EnNf = <any> 'en-nf',
        EnNg = <any> 'en-ng',
        EnNl = <any> 'en-nl',
        EnNr = <any> 'en-nr',
        EnNu = <any> 'en-nu',
        EnNz = <any> 'en-nz',
        EnPg = <any> 'en-pg',
        EnPh = <any> 'en-ph',
        EnPk = <any> 'en-pk',
        EnPn = <any> 'en-pn',
        EnPr = <any> 'en-pr',
        EnPw = <any> 'en-pw',
        EnRw = <any> 'en-rw',
        EnSb = <any> 'en-sb',
        EnSc = <any> 'en-sc',
        EnSd = <any> 'en-sd',
        EnSe = <any> 'en-se',
        EnSg = <any> 'en-sg',
        EnSh = <any> 'en-sh',
        EnSi = <any> 'en-si',
        EnSl = <any> 'en-sl',
        EnSs = <any> 'en-ss',
        EnSx = <any> 'en-sx',
        EnSz = <any> 'en-sz',
        EnTc = <any> 'en-tc',
        EnTk = <any> 'en-tk',
        EnTo = <any> 'en-to',
        EnTt = <any> 'en-tt',
        EnTv = <any> 'en-tv',
        EnTz = <any> 'en-tz',
        EnUg = <any> 'en-ug',
        EnUm = <any> 'en-um',
        EnUs = <any> 'en-us',
        EnVc = <any> 'en-vc',
        EnVg = <any> 'en-vg',
        EnVi = <any> 'en-vi',
        EnVu = <any> 'en-vu',
        EnWs = <any> 'en-ws',
        EnZa = <any> 'en-za',
        EnZm = <any> 'en-zm',
        EnZw = <any> 'en-zw',
        Eo = <any> 'eo',
        Eo001 = <any> 'eo-001',
        Es = <any> 'es',
        Es419 = <any> 'es-419',
        EsAr = <any> 'es-ar',
        EsBo = <any> 'es-bo',
        EsBr = <any> 'es-br',
        EsBz = <any> 'es-bz',
        EsCl = <any> 'es-cl',
        EsCo = <any> 'es-co',
        EsCr = <any> 'es-cr',
        EsCu = <any> 'es-cu',
        EsDo = <any> 'es-do',
        EsEa = <any> 'es-ea',
        EsEc = <any> 'es-ec',
        EsEs = <any> 'es-es',
        EsGq = <any> 'es-gq',
        EsGt = <any> 'es-gt',
        EsHn = <any> 'es-hn',
        EsIc = <any> 'es-ic',
        EsMx = <any> 'es-mx',
        EsNi = <any> 'es-ni',
        EsPa = <any> 'es-pa',
        EsPe = <any> 'es-pe',
        EsPh = <any> 'es-ph',
        EsPr = <any> 'es-pr',
        EsPy = <any> 'es-py',
        EsSv = <any> 'es-sv',
        EsUs = <any> 'es-us',
        EsUy = <any> 'es-uy',
        EsVe = <any> 'es-ve',
        Et = <any> 'et',
        EtEe = <any> 'et-ee',
        Eu = <any> 'eu',
        EuEs = <any> 'eu-es',
        Ewo = <any> 'ewo',
        EwoCm = <any> 'ewo-cm',
        Fa = <any> 'fa',
        FaAf = <any> 'fa-af',
        FaIr = <any> 'fa-ir',
        Ff = <any> 'ff',
        FfCm = <any> 'ff-cm',
        FfGn = <any> 'ff-gn',
        FfMr = <any> 'ff-mr',
        FfSn = <any> 'ff-sn',
        Fi = <any> 'fi',
        FiFi = <any> 'fi-fi',
        Fil = <any> 'fil',
        FilPh = <any> 'fil-ph',
        Fo = <any> 'fo',
        FoDk = <any> 'fo-dk',
        FoFo = <any> 'fo-fo',
        Fr = <any> 'fr',
        FrBe = <any> 'fr-be',
        FrBf = <any> 'fr-bf',
        FrBi = <any> 'fr-bi',
        FrBj = <any> 'fr-bj',
        FrBl = <any> 'fr-bl',
        FrCa = <any> 'fr-ca',
        FrCd = <any> 'fr-cd',
        FrCf = <any> 'fr-cf',
        FrCg = <any> 'fr-cg',
        FrCh = <any> 'fr-ch',
        FrCi = <any> 'fr-ci',
        FrCm = <any> 'fr-cm',
        FrDj = <any> 'fr-dj',
        FrDz = <any> 'fr-dz',
        FrFr = <any> 'fr-fr',
        FrGa = <any> 'fr-ga',
        FrGf = <any> 'fr-gf',
        FrGn = <any> 'fr-gn',
        FrGp = <any> 'fr-gp',
        FrGq = <any> 'fr-gq',
        FrHt = <any> 'fr-ht',
        FrKm = <any> 'fr-km',
        FrLu = <any> 'fr-lu',
        FrMa = <any> 'fr-ma',
        FrMc = <any> 'fr-mc',
        FrMf = <any> 'fr-mf',
        FrMg = <any> 'fr-mg',
        FrMl = <any> 'fr-ml',
        FrMq = <any> 'fr-mq',
        FrMr = <any> 'fr-mr',
        FrMu = <any> 'fr-mu',
        FrNc = <any> 'fr-nc',
        FrNe = <any> 'fr-ne',
        FrPf = <any> 'fr-pf',
        FrPm = <any> 'fr-pm',
        FrRe = <any> 'fr-re',
        FrRw = <any> 'fr-rw',
        FrSc = <any> 'fr-sc',
        FrSn = <any> 'fr-sn',
        FrSy = <any> 'fr-sy',
        FrTd = <any> 'fr-td',
        FrTg = <any> 'fr-tg',
        FrTn = <any> 'fr-tn',
        FrVu = <any> 'fr-vu',
        FrWf = <any> 'fr-wf',
        FrYt = <any> 'fr-yt',
        Fur = <any> 'fur',
        FurIt = <any> 'fur-it',
        Fy = <any> 'fy',
        FyNl = <any> 'fy-nl',
        Ga = <any> 'ga',
        GaIe = <any> 'ga-ie',
        Gd = <any> 'gd',
        GdGb = <any> 'gd-gb',
        Gl = <any> 'gl',
        GlEs = <any> 'gl-es',
        Gsw = <any> 'gsw',
        GswCh = <any> 'gsw-ch',
        GswFr = <any> 'gsw-fr',
        GswLi = <any> 'gsw-li',
        Gu = <any> 'gu',
        GuIn = <any> 'gu-in',
        Guz = <any> 'guz',
        GuzKe = <any> 'guz-ke',
        Gv = <any> 'gv',
        GvIm = <any> 'gv-im',
        Ha = <any> 'ha',
        HaGh = <any> 'ha-gh',
        HaNe = <any> 'ha-ne',
        HaNg = <any> 'ha-ng',
        Haw = <any> 'haw',
        HawUs = <any> 'haw-us',
        He = <any> 'he',
        Hi = <any> 'hi',
        HiIn = <any> 'hi-in',
        Hr = <any> 'hr',
        HrBa = <any> 'hr-ba',
        HrHr = <any> 'hr-hr',
        Hsb = <any> 'hsb',
        HsbDe = <any> 'hsb-de',
        Hu = <any> 'hu',
        HuHu = <any> 'hu-hu',
        Hy = <any> 'hy',
        HyAm = <any> 'hy-am',
        Id = <any> 'id',
        Ig = <any> 'ig',
        IgNg = <any> 'ig-ng',
        Ii = <any> 'ii',
        IiCn = <any> 'ii-cn',
        IdId = <any> 'id-id',
        Is = <any> 'is',
        IsIs = <any> 'is-is',
        It = <any> 'it',
        ItCh = <any> 'it-ch',
        ItIt = <any> 'it-it',
        ItSm = <any> 'it-sm',
        ItVa = <any> 'it-va',
        HeIl = <any> 'he-il',
        Ja = <any> 'ja',
        JaJp = <any> 'ja-jp',
        Jgo = <any> 'jgo',
        JgoCm = <any> 'jgo-cm',
        Yi = <any> 'yi',
        Yi001 = <any> 'yi-001',
        Jmc = <any> 'jmc',
        JmcTz = <any> 'jmc-tz',
        Ka = <any> 'ka',
        KaGe = <any> 'ka-ge',
        Kab = <any> 'kab',
        KabDz = <any> 'kab-dz',
        Kam = <any> 'kam',
        KamKe = <any> 'kam-ke',
        Kde = <any> 'kde',
        KdeTz = <any> 'kde-tz',
        Kea = <any> 'kea',
        KeaCv = <any> 'kea-cv',
        Khq = <any> 'khq',
        KhqMl = <any> 'khq-ml',
        Ki = <any> 'ki',
        KiKe = <any> 'ki-ke',
        Kk = <any> 'kk',
        KkKz = <any> 'kk-kz',
        Kkj = <any> 'kkj',
        KkjCm = <any> 'kkj-cm',
        Kl = <any> 'kl',
        KlGl = <any> 'kl-gl',
        Kln = <any> 'kln',
        KlnKe = <any> 'kln-ke',
        Km = <any> 'km',
        KmKh = <any> 'km-kh',
        Kn = <any> 'kn',
        KnIn = <any> 'kn-in',
        Ko = <any> 'ko',
        KoKp = <any> 'ko-kp',
        KoKr = <any> 'ko-kr',
        Kok = <any> 'kok',
        KokIn = <any> 'kok-in',
        Ks = <any> 'ks',
        KsIn = <any> 'ks-in',
        Ksb = <any> 'ksb',
        KsbTz = <any> 'ksb-tz',
        Ksf = <any> 'ksf',
        KsfCm = <any> 'ksf-cm',
        Ksh = <any> 'ksh',
        KshDe = <any> 'ksh-de',
        Kw = <any> 'kw',
        KwGb = <any> 'kw-gb',
        Ky = <any> 'ky',
        KyKg = <any> 'ky-kg',
        Lag = <any> 'lag',
        LagTz = <any> 'lag-tz',
        Lb = <any> 'lb',
        LbLu = <any> 'lb-lu',
        Lg = <any> 'lg',
        LgUg = <any> 'lg-ug',
        Lkt = <any> 'lkt',
        LktUs = <any> 'lkt-us',
        Ln = <any> 'ln',
        LnAo = <any> 'ln-ao',
        LnCd = <any> 'ln-cd',
        LnCf = <any> 'ln-cf',
        LnCg = <any> 'ln-cg',
        Lo = <any> 'lo',
        LoLa = <any> 'lo-la',
        Lrc = <any> 'lrc',
        LrcIq = <any> 'lrc-iq',
        LrcIr = <any> 'lrc-ir',
        Lt = <any> 'lt',
        LtLt = <any> 'lt-lt',
        Lu = <any> 'lu',
        LuCd = <any> 'lu-cd',
        Luo = <any> 'luo',
        LuoKe = <any> 'luo-ke',
        Luy = <any> 'luy',
        LuyKe = <any> 'luy-ke',
        Lv = <any> 'lv',
        LvLv = <any> 'lv-lv',
        Mas = <any> 'mas',
        MasKe = <any> 'mas-ke',
        MasTz = <any> 'mas-tz',
        Mer = <any> 'mer',
        MerKe = <any> 'mer-ke',
        Mfe = <any> 'mfe',
        MfeMu = <any> 'mfe-mu',
        Mg = <any> 'mg',
        MgMg = <any> 'mg-mg',
        Mgh = <any> 'mgh',
        MghMz = <any> 'mgh-mz',
        Mgo = <any> 'mgo',
        MgoCm = <any> 'mgo-cm',
        Mk = <any> 'mk',
        MkMk = <any> 'mk-mk',
        Ml = <any> 'ml',
        MlIn = <any> 'ml-in',
        Mn = <any> 'mn',
        MnMn = <any> 'mn-mn',
        Mr = <any> 'mr',
        MrIn = <any> 'mr-in',
        Ms = <any> 'ms',
        MsBn = <any> 'ms-bn',
        MsMy = <any> 'ms-my',
        MsSg = <any> 'ms-sg',
        Mt = <any> 'mt',
        MtMt = <any> 'mt-mt',
        Mua = <any> 'mua',
        MuaCm = <any> 'mua-cm',
        My = <any> 'my',
        MyMm = <any> 'my-mm',
        Mzn = <any> 'mzn',
        MznIr = <any> 'mzn-ir',
        Naq = <any> 'naq',
        NaqNa = <any> 'naq-na',
        Nb = <any> 'nb',
        NbNo = <any> 'nb-no',
        NbSj = <any> 'nb-sj',
        Nd = <any> 'nd',
        NdZw = <any> 'nd-zw',
        Nds = <any> 'nds',
        NdsDe = <any> 'nds-de',
        NdsNl = <any> 'nds-nl',
        Ne = <any> 'ne',
        NeIn = <any> 'ne-in',
        NeNp = <any> 'ne-np',
        Nl = <any> 'nl',
        NlAw = <any> 'nl-aw',
        NlBe = <any> 'nl-be',
        NlBq = <any> 'nl-bq',
        NlCw = <any> 'nl-cw',
        NlNl = <any> 'nl-nl',
        NlSr = <any> 'nl-sr',
        NlSx = <any> 'nl-sx',
        Nmg = <any> 'nmg',
        NmgCm = <any> 'nmg-cm',
        Nn = <any> 'nn',
        NnNo = <any> 'nn-no',
        Nnh = <any> 'nnh',
        NnhCm = <any> 'nnh-cm',
        No = <any> 'no',
        NoNo = <any> 'no-no',
        Nus = <any> 'nus',
        NusSs = <any> 'nus-ss',
        Nyn = <any> 'nyn',
        NynUg = <any> 'nyn-ug',
        Om = <any> 'om',
        OmEt = <any> 'om-et',
        OmKe = <any> 'om-ke',
        Or = <any> 'or',
        OrIn = <any> 'or-in',
        Os = <any> 'os',
        OsGe = <any> 'os-ge',
        OsRu = <any> 'os-ru',
        Pa = <any> 'pa',
        PaIn = <any> 'pa-in',
        PaPk = <any> 'pa-pk',
        Pl = <any> 'pl',
        PlPl = <any> 'pl-pl',
        Prg = <any> 'prg',
        Prg001 = <any> 'prg-001',
        Ps = <any> 'ps',
        PsAf = <any> 'ps-af',
        Pt = <any> 'pt',
        PtAo = <any> 'pt-ao',
        PtBr = <any> 'pt-br',
        PtCh = <any> 'pt-ch',
        PtCv = <any> 'pt-cv',
        PtGq = <any> 'pt-gq',
        PtGw = <any> 'pt-gw',
        PtLu = <any> 'pt-lu',
        PtMo = <any> 'pt-mo',
        PtMz = <any> 'pt-mz',
        PtPt = <any> 'pt-pt',
        PtSt = <any> 'pt-st',
        PtTl = <any> 'pt-tl',
        Qu = <any> 'qu',
        QuBo = <any> 'qu-bo',
        QuEc = <any> 'qu-ec',
        QuPe = <any> 'qu-pe',
        Rm = <any> 'rm',
        RmCh = <any> 'rm-ch',
        Rn = <any> 'rn',
        RnBi = <any> 'rn-bi',
        Ro = <any> 'ro',
        RoMd = <any> 'ro-md',
        RoRo = <any> 'ro-ro',
        Rof = <any> 'rof',
        RofTz = <any> 'rof-tz',
        Ru = <any> 'ru',
        RuBy = <any> 'ru-by',
        RuKg = <any> 'ru-kg',
        RuKz = <any> 'ru-kz',
        RuMd = <any> 'ru-md',
        RuRu = <any> 'ru-ru',
        RuUa = <any> 'ru-ua',
        Rw = <any> 'rw',
        RwRw = <any> 'rw-rw',
        Rwk = <any> 'rwk',
        RwkTz = <any> 'rwk-tz',
        Sa = <any> 'sa',
        Sah = <any> 'sah',
        SahRu = <any> 'sah-ru',
        Saq = <any> 'saq',
        SaqKe = <any> 'saq-ke',
        Sbp = <any> 'sbp',
        SbpTz = <any> 'sbp-tz',
        Sd = <any> 'sd',
        SdPk = <any> 'sd-pk',
        Se = <any> 'se',
        SeFi = <any> 'se-fi',
        SeNo = <any> 'se-no',
        SeSe = <any> 'se-se',
        Seh = <any> 'seh',
        SehMz = <any> 'seh-mz',
        Ses = <any> 'ses',
        SesMl = <any> 'ses-ml',
        Sg = <any> 'sg',
        SgCf = <any> 'sg-cf',
        Shi = <any> 'shi',
        ShiMa = <any> 'shi-ma',
        Si = <any> 'si',
        SiLk = <any> 'si-lk',
        Sk = <any> 'sk',
        SkSk = <any> 'sk-sk',
        Sl = <any> 'sl',
        SlSi = <any> 'sl-si',
        Smn = <any> 'smn',
        SmnFi = <any> 'smn-fi',
        Sn = <any> 'sn',
        SnZw = <any> 'sn-zw',
        So = <any> 'so',
        SoDj = <any> 'so-dj',
        SoEt = <any> 'so-et',
        SoKe = <any> 'so-ke',
        SoSo = <any> 'so-so',
        Sq = <any> 'sq',
        SqAl = <any> 'sq-al',
        SqMk = <any> 'sq-mk',
        SqXk = <any> 'sq-xk',
        Sr = <any> 'sr',
        SrBa = <any> 'sr-ba',
        SrCs = <any> 'sr-cs',
        SrMe = <any> 'sr-me',
        SrRs = <any> 'sr-rs',
        SrXk = <any> 'sr-xk',
        Sv = <any> 'sv',
        SvAx = <any> 'sv-ax',
        SvFi = <any> 'sv-fi',
        SvSe = <any> 'sv-se',
        Sw = <any> 'sw',
        SwCd = <any> 'sw-cd',
        SwKe = <any> 'sw-ke',
        SwTz = <any> 'sw-tz',
        SwUg = <any> 'sw-ug',
        Sy = <any> 'sy',
        Ta = <any> 'ta',
        TaIn = <any> 'ta-in',
        TaLk = <any> 'ta-lk',
        TaMy = <any> 'ta-my',
        TaSg = <any> 'ta-sg',
        Te = <any> 'te',
        TeIn = <any> 'te-in',
        Teo = <any> 'teo',
        TeoKe = <any> 'teo-ke',
        TeoUg = <any> 'teo-ug',
        Tg = <any> 'tg',
        TgTj = <any> 'tg-tj',
        Th = <any> 'th',
        ThTh = <any> 'th-th',
        Ti = <any> 'ti',
        TiEr = <any> 'ti-er',
        TiEt = <any> 'ti-et',
        Tk = <any> 'tk',
        TkTm = <any> 'tk-tm',
        To = <any> 'to',
        ToTo = <any> 'to-to',
        Tr = <any> 'tr',
        TrCy = <any> 'tr-cy',
        TrTr = <any> 'tr-tr',
        Tt = <any> 'tt',
        TtRu = <any> 'tt-ru',
        Twq = <any> 'twq',
        TwqNe = <any> 'twq-ne',
        Tzm = <any> 'tzm',
        TzmMa = <any> 'tzm-ma',
        Ug = <any> 'ug',
        UgCn = <any> 'ug-cn',
        Uk = <any> 'uk',
        UkUa = <any> 'uk-ua',
        Ur = <any> 'ur',
        UrIn = <any> 'ur-in',
        UrPk = <any> 'ur-pk',
        Uz = <any> 'uz',
        UzAf = <any> 'uz-af',
        UzUz = <any> 'uz-uz',
        Vai = <any> 'vai',
        VaiLr = <any> 'vai-lr',
        Vi = <any> 'vi',
        ViVn = <any> 'vi-vn',
        Vo = <any> 'vo',
        Vo001 = <any> 'vo-001',
        Vun = <any> 'vun',
        VunTz = <any> 'vun-tz',
        Wae = <any> 'wae',
        WaeCh = <any> 'wae-ch',
        Wo = <any> 'wo',
        WoSn = <any> 'wo-sn',
        Xog = <any> 'xog',
        XogUg = <any> 'xog-ug',
        Yav = <any> 'yav',
        YavCm = <any> 'yav-cm',
        Yo = <any> 'yo',
        YoBj = <any> 'yo-bj',
        YoNg = <any> 'yo-ng',
        Yue = <any> 'yue',
        YueCn = <any> 'yue-cn',
        YueHk = <any> 'yue-hk',
        Zgh = <any> 'zgh',
        ZghMa = <any> 'zgh-ma',
        Zh = <any> 'zh',
        ZhCn = <any> 'zh-cn',
        ZhHk = <any> 'zh-hk',
        ZhMo = <any> 'zh-mo',
        ZhSg = <any> 'zh-sg',
        ZhTw = <any> 'zh-tw',
        ZhHans = <any> 'zh-hans',
        ZhHant = <any> 'zh-hant',
        Zu = <any> 'zu',
        ZuZa = <any> 'zu-za'
    }
    export enum ContentTypeCategoryEnum {
        _0 = <any> '0',
        _1 = <any> '1',
        _2 = <any> '2',
        _3 = <any> '3',
        _4 = <any> '4',
        _5 = <any> '5',
        _6 = <any> '6',
        _7 = <any> '7'
    }
    export enum CurrentStateEnum {
        Automated = <any> 'AUTOMATED',
        AutomatedDraft = <any> 'AUTOMATED_DRAFT',
        AutomatedSending = <any> 'AUTOMATED_SENDING',
        AutomatedForForm = <any> 'AUTOMATED_FOR_FORM',
        AutomatedForFormBuffer = <any> 'AUTOMATED_FOR_FORM_BUFFER',
        AutomatedForFormDraft = <any> 'AUTOMATED_FOR_FORM_DRAFT',
        AutomatedForFormLegacy = <any> 'AUTOMATED_FOR_FORM_LEGACY',
        BlogEmailDraft = <any> 'BLOG_EMAIL_DRAFT',
        BlogEmailPublished = <any> 'BLOG_EMAIL_PUBLISHED',
        Draft = <any> 'DRAFT',
        DraftAb = <any> 'DRAFT_AB',
        DraftAbVariant = <any> 'DRAFT_AB_VARIANT',
        Error = <any> 'ERROR',
        LoserAbVariant = <any> 'LOSER_AB_VARIANT',
        PageStub = <any> 'PAGE_STUB',
        PreProcessing = <any> 'PRE_PROCESSING',
        Processing = <any> 'PROCESSING',
        Published = <any> 'PUBLISHED',
        PublishedAb = <any> 'PUBLISHED_AB',
        PublishedAbVariant = <any> 'PUBLISHED_AB_VARIANT',
        PublishedOrScheduled = <any> 'PUBLISHED_OR_SCHEDULED',
        RssToEmailDraft = <any> 'RSS_TO_EMAIL_DRAFT',
        RssToEmailPublished = <any> 'RSS_TO_EMAIL_PUBLISHED',
        Scheduled = <any> 'SCHEDULED',
        ScheduledAb = <any> 'SCHEDULED_AB',
        ScheduledOrPublished = <any> 'SCHEDULED_OR_PUBLISHED',
        AutomatedAb = <any> 'AUTOMATED_AB',
        AutomatedAbVariant = <any> 'AUTOMATED_AB_VARIANT',
        AutomatedDraftAb = <any> 'AUTOMATED_DRAFT_AB',
        AutomatedDraftAbvariant = <any> 'AUTOMATED_DRAFT_ABVARIANT',
        AutomatedLoserAbvariant = <any> 'AUTOMATED_LOSER_ABVARIANT'
    }
}
