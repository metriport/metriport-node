/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The kind of condition.
 */
export type PlanDefinitionConditionKind = "applicability" | "start" | "stop";

export const PlanDefinitionConditionKind = {
    Applicability: "applicability",
    Start: "start",
    Stop: "stop",
} as const;