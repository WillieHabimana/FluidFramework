## API Report File for "@fluidframework/odsp-driver-definitions"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { DriverError } from '@fluidframework/driver-definitions';
import { IDriverErrorBase } from '@fluidframework/driver-definitions';
import { IFluidResolvedUrl } from '@fluidframework/driver-definitions';

// @public (undocumented)
export type CacheContentType = "snapshot" | "ops";

// @public (undocumented)
export interface HostStoragePolicy {
    cacheCreateNewSummary?: boolean;
    // (undocumented)
    concurrentOpsBatches?: number;
    concurrentSnapshotFetch?: boolean;
    // (undocumented)
    enableRedeemFallback?: boolean;
    enableShareLinkWithCreate?: boolean;
    // @deprecated (undocumented)
    fetchBinarySnapshotFormat?: boolean;
    isolateSocketCache?: boolean;
    // (undocumented)
    opsBatchSize?: number;
    opsCaching?: IOpsCachingPolicy;
    sessionOptions?: ICollabSessionOptions;
    // (undocumented)
    snapshotOptions?: ISnapshotOptions;
}

// @public
export interface ICacheEntry extends IEntry {
    file: IFileEntry;
}

// @public (undocumented)
export interface ICollabSessionOptions {
    // @deprecated (undocumented)
    forceAccessTokenViaAuthorizationHeader?: boolean;
    unauthenticatedUserDisplayName?: string;
}

// @public
export type IdentityType = "Consumer" | "Enterprise";

// @public
export interface IEntry {
    key: string;
    type: CacheContentType;
}

// @public (undocumented)
export interface IFileEntry {
    docId: string;
    resolvedUrl: IFluidResolvedUrl;
}

// @public (undocumented)
export type InstrumentedStorageTokenFetcher = (options: TokenFetchOptions, name: string, alwaysRecordTokenFetchTelemetry?: boolean) => Promise<string | null>;

// @public
export interface IOdspError extends Omit<IDriverErrorBase, "errorType"> {
    // (undocumented)
    readonly errorType: OdspErrorType;
    serverEpoch?: string;
}

// @public (undocumented)
export interface IOdspResolvedUrl extends IFluidResolvedUrl, IOdspUrlParts {
    // (undocumented)
    codeHint?: {
        containerPackageName?: string;
    };
    // (undocumented)
    endpoints: {
        snapshotStorageUrl: string;
        attachmentPOSTStorageUrl: string;
        attachmentGETStorageUrl: string;
        deltaStorageUrl: string;
    };
    // (undocumented)
    fileName: string;
    // (undocumented)
    fileVersion: string | undefined;
    // (undocumented)
    hashedDocumentId: string;
    // (undocumented)
    isClpCompliantApp?: boolean;
    // (undocumented)
    odspResolvedUrl: true;
    shareLinkInfo?: ShareLinkInfoType;
    // (undocumented)
    summarizer: boolean;
    // (undocumented)
    tokens: {};
    // (undocumented)
    type: "fluid";
    // (undocumented)
    url: string;
}

// @public (undocumented)
export interface IOdspUrlParts {
    // (undocumented)
    driveId: string;
    // (undocumented)
    itemId: string;
    // (undocumented)
    siteUrl: string;
}

// @public (undocumented)
export interface IOpsCachingPolicy {
    batchSize?: number;
    timerGranularity?: number;
    totalOpsToCache?: number;
}

// @public
export interface IPersistedCache {
    get(entry: ICacheEntry): Promise<any>;
    put(entry: ICacheEntry, value: any): Promise<void>;
    removeEntries(file: IFileEntry): Promise<void>;
}

// @public (undocumented)
export interface ISnapshotOptions {
    // (undocumented)
    blobs?: number;
    // (undocumented)
    channels?: number;
    // (undocumented)
    deltas?: number;
    // (undocumented)
    mds?: number;
    // (undocumented)
    timeout?: number;
}

// @public
export const isTokenFromCache: (tokenResponse: string | TokenResponse | null) => boolean | undefined;

// @public (undocumented)
export type OdspError = DriverError | IOdspError;

// @public (undocumented)
export enum OdspErrorType {
    // (undocumented)
    cannotCatchUp = "cannotCatchUp",
    // (undocumented)
    fetchTimeout = "fetchTimeout",
    // (undocumented)
    fetchTokenError = "fetchTokenError",
    // (undocumented)
    fluidNotEnabled = "fluidNotEnabled",
    invalidFileNameError = "invalidFileNameError",
    // (undocumented)
    locationRedirection = "locationRedirection",
    outOfStorageError = "outOfStorageError",
    // (undocumented)
    serviceReadOnly = "serviceReadOnly",
    snapshotTooBig = "snapshotTooBig"
}

// @public
export interface OdspResourceTokenFetchOptions extends TokenFetchOptions {
    driveId?: string;
    itemId?: string;
    siteUrl: string;
}

// @public
export interface ShareLinkInfoType {
    createLink?: {
        type?: ShareLinkTypes;
        link?: string;
        error?: any;
    };
    sharingLinkToRedeem?: string;
}

// @public
export enum ShareLinkTypes {
    // (undocumented)
    csl = "csl"
}

// @public
export const snapshotKey = "snapshot";

// @public
export type TokenFetcher<T> = (options: T) => Promise<string | TokenResponse | null>;

// @public
export interface TokenFetchOptions {
    claims?: string;
    refresh: boolean;
    tenantId?: string;
}

// @public
export const tokenFromResponse: (tokenResponse: string | TokenResponse | null | undefined) => string | null;

// @public
export interface TokenResponse {
    fromCache?: boolean;
    token: string;
}

// (No @packageDocumentation comment for this package)

```
