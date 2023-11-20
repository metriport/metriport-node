/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable.
 */
export type TestScriptAssertResponse =
    | "okay"
    | "created"
    | "noContent"
    | "notModified"
    | "bad"
    | "forbidden"
    | "notFound"
    | "methodNotAllowed"
    | "conflict"
    | "gone"
    | "preconditionFailed"
    | "unprocessable";

export const TestScriptAssertResponse = {
    Okay: "okay",
    Created: "created",
    NoContent: "noContent",
    NotModified: "notModified",
    Bad: "bad",
    Forbidden: "forbidden",
    NotFound: "notFound",
    MethodNotAllowed: "methodNotAllowed",
    Conflict: "conflict",
    Gone: "gone",
    PreconditionFailed: "preconditionFailed",
    Unprocessable: "unprocessable",
} as const;