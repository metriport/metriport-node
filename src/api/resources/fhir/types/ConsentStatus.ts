/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the current state of this consent.
 */
export type ConsentStatus = "draft" | "proposed" | "active" | "rejected" | "inactive" | "entered-in-error";

export const ConsentStatus = {
    Draft: "draft",
    Proposed: "proposed",
    Active: "active",
    Rejected: "rejected",
    Inactive: "inactive",
    EnteredInError: "entered-in-error",
} as const;