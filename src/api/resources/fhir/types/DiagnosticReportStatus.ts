/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the diagnostic report.
 */
export type DiagnosticReportStatus =
    | "registered"
    | "partial"
    | "preliminary"
    | "final"
    | "amended"
    | "corrected"
    | "appended"
    | "cancelled"
    | "entered-in-error"
    | "unknown";

export const DiagnosticReportStatus = {
    Registered: "registered",
    Partial: "partial",
    Preliminary: "preliminary",
    Final: "final",
    Amended: "amended",
    Corrected: "corrected",
    Appended: "appended",
    Cancelled: "cancelled",
    EnteredInError: "entered-in-error",
    Unknown: "unknown",
} as const;
