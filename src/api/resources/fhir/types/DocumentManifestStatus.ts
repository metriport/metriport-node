/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of this document manifest.
 */
export type DocumentManifestStatus = "current" | "superseded" | "entered-in-error";

export const DocumentManifestStatus = {
    Current: "current",
    Superseded: "superseded",
    EnteredInError: "entered-in-error",
} as const;