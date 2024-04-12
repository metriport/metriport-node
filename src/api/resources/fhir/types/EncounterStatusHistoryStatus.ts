/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
 */
export type EncounterStatusHistoryStatus =
    | "planned"
    | "arrived"
    | "triaged"
    | "in-progress"
    | "onleave"
    | "finished"
    | "cancelled"
    | "entered-in-error"
    | "unknown";

export const EncounterStatusHistoryStatus = {
    Planned: "planned",
    Arrived: "arrived",
    Triaged: "triaged",
    InProgress: "in-progress",
    Onleave: "onleave",
    Finished: "finished",
    Cancelled: "cancelled",
    EnteredInError: "entered-in-error",
    Unknown: "unknown",
} as const;
