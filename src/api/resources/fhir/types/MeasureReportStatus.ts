/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The MeasureReport status. No data will be available until the MeasureReport status is complete.
 */
export type MeasureReportStatus = "complete" | "pending" | "error";

export const MeasureReportStatus = {
    Complete: "complete",
    Pending: "pending",
    Error: "error",
} as const;
