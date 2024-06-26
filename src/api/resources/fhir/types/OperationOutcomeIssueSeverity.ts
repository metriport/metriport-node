/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates whether the issue indicates a variation from successful processing.
 */
export type OperationOutcomeIssueSeverity = "fatal" | "error" | "warning" | "information";

export const OperationOutcomeIssueSeverity = {
    Fatal: "fatal",
    Error: "error",
    Warning: "warning",
    Information: "information",
} as const;
