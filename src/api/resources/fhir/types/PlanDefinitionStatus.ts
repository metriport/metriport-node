/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of this plan definition. Enables tracking the life-cycle of the content.
 */
export type PlanDefinitionStatus = "draft" | "active" | "retired" | "unknown";

export const PlanDefinitionStatus = {
    Draft: "draft",
    Active: "active",
    Retired: "retired",
    Unknown: "unknown",
} as const;
