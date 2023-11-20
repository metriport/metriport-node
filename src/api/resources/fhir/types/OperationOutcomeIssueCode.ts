/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
 */
export type OperationOutcomeIssueCode =
    | "invalid"
    | "structure"
    | "required"
    | "value"
    | "invariant"
    | "security"
    | "login"
    | "unknown"
    | "expired"
    | "forbidden"
    | "suppressed"
    | "processing"
    | "not-supported"
    | "duplicate"
    | "multiple-matches"
    | "not-found"
    | "deleted"
    | "too-long"
    | "code-invalid"
    | "extension"
    | "too-costly"
    | "business-rule"
    | "conflict"
    | "transient"
    | "lock-error"
    | "no-store"
    | "exception"
    | "timeout"
    | "incomplete"
    | "throttled"
    | "informational";

export const OperationOutcomeIssueCode = {
    Invalid: "invalid",
    Structure: "structure",
    Required: "required",
    Value: "value",
    Invariant: "invariant",
    Security: "security",
    Login: "login",
    Unknown: "unknown",
    Expired: "expired",
    Forbidden: "forbidden",
    Suppressed: "suppressed",
    Processing: "processing",
    NotSupported: "not-supported",
    Duplicate: "duplicate",
    MultipleMatches: "multiple-matches",
    NotFound: "not-found",
    Deleted: "deleted",
    TooLong: "too-long",
    CodeInvalid: "code-invalid",
    Extension: "extension",
    TooCostly: "too-costly",
    BusinessRule: "business-rule",
    Conflict: "conflict",
    Transient: "transient",
    LockError: "lock-error",
    NoStore: "no-store",
    Exception: "exception",
    Timeout: "timeout",
    Incomplete: "incomplete",
    Throttled: "throttled",
    Informational: "informational",
} as const;