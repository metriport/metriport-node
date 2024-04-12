/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of this concept map. Enables tracking the life-cycle of the content.
 */
export type ConceptMapStatus = "draft" | "active" | "retired" | "unknown";

export const ConceptMapStatus = {
    Draft: "draft",
    Active: "active",
    Retired: "retired",
    Unknown: "unknown",
} as const;
