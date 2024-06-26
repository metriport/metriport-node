/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL).
 */
export type ConceptMapUnmappedMode = "provided" | "fixed" | "other-map";

export const ConceptMapUnmappedMode = {
    Provided: "provided",
    Fixed: "fixed",
    OtherMap: "other-map",
} as const;
