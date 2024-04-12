/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
 */
export type AllergyIntoleranceReactionSeverity = "mild" | "moderate" | "severe";

export const AllergyIntoleranceReactionSeverity = {
    Mild: "mild",
    Moderate: "moderate",
    Severe: "severe",
} as const;
