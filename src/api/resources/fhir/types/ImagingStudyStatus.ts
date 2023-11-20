/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current state of the ImagingStudy.
 */
export type ImagingStudyStatus = "registered" | "available" | "cancelled" | "entered-in-error" | "unknown";

export const ImagingStudyStatus = {
    Registered: "registered",
    Available: "available",
    Cancelled: "cancelled",
    EnteredInError: "entered-in-error",
    Unknown: "unknown",
} as const;