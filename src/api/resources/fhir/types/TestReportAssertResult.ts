/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The result of this assertion.
 */
export type TestReportAssertResult = "pass" | "skip" | "fail" | "warning" | "error";

export const TestReportAssertResult = {
    Pass: "pass",
    Skip: "skip",
    Fail: "fail",
    Warning: "warning",
    Error: "error",
} as const;
