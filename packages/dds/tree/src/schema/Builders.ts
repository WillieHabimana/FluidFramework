/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    FieldSchema, GlobalFieldKey, LocalFieldKey, FieldKind, TreeSchema, TreeSchemaIdentifier, ValueSchema,
} from "./Schema";

/**
 * APIs to help build schema.
 *
 * TODO: make these infer typescript type level data.
 */

/**
 * Empty readonly set.
 */
export const emptySet: ReadonlySet<never> = new Set();

/**
 * Empty readonly map.
 */
export const emptyMap: ReadonlyMap<never, never> = new Map<never, never>();

/**
 * LocalFieldKey to use for when there is a collection of items under a tree node
 * that makes up the logical primary significant of that tree.
 */
export const itemsKey = "items" as LocalFieldKey;

/**
 * GlobalFieldKey to use for the root of documents.
 * TODO: if we do want to standardize on a single value for this,
 * it likely should be namespaced or a UUID to avoid risk of collisions.
 */
export const rootFieldKey = "rootFieldKey" as GlobalFieldKey;

/**
 * Default field which only permits emptiness.
 */
export const emptyField: FieldSchema = {
    kind: FieldKind.Forbidden,
};

export function fieldSchema(kind: FieldKind, types: readonly TreeSchemaIdentifier[]): FieldSchema {
    return {
        kind,
        types: new Set(types),
    };
}

const defaultExtraGlobalFields = false;

/**
 * See {@link TreeSchema} for details.
 */
interface TreeSchemaBuilder {
    readonly localFields?: { [key: string]: FieldSchema; };
    readonly globalFields?: Iterable<GlobalFieldKey>;
    readonly extraLocalFields?: FieldSchema;
    readonly extraGlobalFields?: boolean;
    readonly value?: ValueSchema;
}

export function treeSchema(data: TreeSchemaBuilder): TreeSchema {
    const localFields = new Map();
    const local = data.localFields ?? {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in local) {
        if (Object.prototype.hasOwnProperty.call(local, key)) {
            localFields.set(key as LocalFieldKey, local[key]);
        }
    }

    return {
        localFields,
        globalFields: new Set(data.globalFields ?? []),
        extraLocalFields: data.extraLocalFields ?? emptyField,
        extraGlobalFields: data.extraGlobalFields ?? defaultExtraGlobalFields,
        value: data.value ?? ValueSchema.Nothing,
    };
}
