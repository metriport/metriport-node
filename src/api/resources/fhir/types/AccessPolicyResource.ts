/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Access details for a resource type.
 */
export interface AccessPolicyResource {
    /** DEPRECATED Optional compartment restriction for the resource type. */
    compartment?: Metriport.fhir.Reference;
    /** The rules that the server should use to determine which resources to allow. */
    criteria?: string;
    /** Optional flag to indicate that the resource type is read-only. */
    readonly?: boolean;
    /** Optional list of hidden fields. Hidden fields are not readable or writeable. */
    hiddenFields?: string[];
    /** Optional list of read-only fields. Read-only fields are readable but not writeable. */
    readonlyFields?: string[];
    /** Invariants that must be satisfied for the resource to be written. Can include %before and %after placeholders to refer to the resource before and after the updates are applied. */
    writeConstraint?: Metriport.fhir.Expression[];
}
