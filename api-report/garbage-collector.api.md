## API Report File for "@fluidframework/garbage-collector"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { IGarbageCollectionData } from '@fluidframework/runtime-definitions';
import { IGarbageCollectionDetailsBase } from '@fluidframework/runtime-definitions';
import { IGarbageCollectionState } from '@fluidframework/runtime-definitions';
import { ITelemetryLogger } from '@fluidframework/common-definitions';

// @public
export function cloneGCData(gcData: IGarbageCollectionData): IGarbageCollectionData;

// @public
export function concatGarbageCollectionData(gcData1: IGarbageCollectionData, gcData2: IGarbageCollectionData): IGarbageCollectionData;

// @public
export function concatGarbageCollectionStates(gcState1: IGarbageCollectionState, gcState2: IGarbageCollectionState): IGarbageCollectionState;

// @public (undocumented)
export class GCDataBuilder implements IGarbageCollectionData {
    // (undocumented)
    addNode(id: string, outboundRoutes: string[]): void;
    // (undocumented)
    addNodes(gcNodes: {
        [id: string]: string[];
    }): void;
    addRouteToAllNodes(outboundRoute: string): void;
    // (undocumented)
    get gcNodes(): {
        [id: string]: string[];
    };
    // (undocumented)
    getGCData(): IGarbageCollectionData;
    prefixAndAddNodes(prefixId: string, gcNodes: {
        [id: string]: string[];
    }): void;
}

// @public
export interface IGCResult {
    deletedNodeIds: string[];
    referencedNodeIds: string[];
}

// @public
export function removeRouteFromAllNodes(gcNodes: {
    [id: string]: string[];
}, outboundRoute: string): void;

// @public
export function runGarbageCollection(referenceGraph: {
    [id: string]: string[];
}, rootIds: string[], logger: ITelemetryLogger): IGCResult;

// @public
export function unpackChildNodesGCDetails(gcDetails: IGarbageCollectionDetailsBase): Map<string, IGarbageCollectionDetailsBase>;

// @public
export function unpackChildNodesUsedRoutes(usedRoutes: string[]): Map<string, string[]>;

// (No @packageDocumentation comment for this package)

```
