/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Defines the grouping behavior for the action and its children.
 */
export type PlanDefinitionActionGroupingBehavior = "visual-group" | "logical-group" | "sentence-group";

export const PlanDefinitionActionGroupingBehavior = {
    VisualGroup: "visual-group",
    LogicalGroup: "logical-group",
    SentenceGroup: "sentence-group",
} as const;
