/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The request method or HTTP operation code to compare against that used by the client system under test.
 */
export type TestScriptAssertRequestMethod = "delete" | "get" | "options" | "patch" | "post" | "put" | "head";

export const TestScriptAssertRequestMethod = {
    Delete: "delete",
    Get: "get",
    Options: "options",
    Patch: "patch",
    Post: "post",
    Put: "put",
    Head: "head",
} as const;