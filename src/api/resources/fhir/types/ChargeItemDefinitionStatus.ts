/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current state of the ChargeItemDefinition.
 */
export type ChargeItemDefinitionStatus = "draft" | "active" | "retired" | "unknown";

export const ChargeItemDefinitionStatus = {
    Draft: "draft",
    Active: "active",
    Retired: "retired",
    Unknown: "unknown",
} as const;
