/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Defines the required behavior for the action.
 */
export type PlanDefinitionActionRequiredBehavior = "must" | "could" | "must-unless-documented";

export const PlanDefinitionActionRequiredBehavior = {
    Must: "must",
    Could: "could",
    MustUnlessDocumented: "must-unless-documented",
} as const;
