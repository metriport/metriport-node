/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The overall result from the execution of the TestScript.
 */
export type TestReportResult = "pass" | "fail" | "pending";

export const TestReportResult = {
    Pass: "pass",
    Fail: "fail",
    Pending: "pending",
} as const;
