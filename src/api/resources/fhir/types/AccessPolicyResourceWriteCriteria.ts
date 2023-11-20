/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Invariants that must be satisfied for the resource to be written.
 */
export interface AccessPolicyResourceWriteCriteria {
    /** Invariant to check against the state of the resource before modification. */
    pre?: string;
    /** Invariant to check against the state of the resource with modifications tentatively applied. */
    post?: string;
}