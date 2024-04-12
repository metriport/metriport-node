/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the current state of the care team.
 */
export type CareTeamStatus = "proposed" | "active" | "suspended" | "inactive" | "entered-in-error";

export const CareTeamStatus = {
    Proposed: "proposed",
    Active: "active",
    Suspended: "suspended",
    Inactive: "inactive",
    EnteredInError: "entered-in-error",
} as const;
