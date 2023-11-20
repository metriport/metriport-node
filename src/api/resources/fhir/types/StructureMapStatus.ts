/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of this structure map. Enables tracking the life-cycle of the content.
 */
export type StructureMapStatus = "draft" | "active" | "retired" | "unknown";

export const StructureMapStatus = {
    Draft: "draft",
    Active: "active",
    Retired: "retired",
    Unknown: "unknown",
} as const;