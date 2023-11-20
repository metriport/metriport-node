/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of this research definition. Enables tracking the life-cycle of the content.
 */
export type ResearchDefinitionStatus = "draft" | "active" | "retired" | "unknown";

export const ResearchDefinitionStatus = {
    Draft: "draft",
    Active: "active",
    Retired: "retired",
    Unknown: "unknown",
} as const;