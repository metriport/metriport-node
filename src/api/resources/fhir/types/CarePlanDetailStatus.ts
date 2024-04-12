/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Identifies what progress is being made for the specific activity.
 */
export type CarePlanDetailStatus =
    | "not-started"
    | "scheduled"
    | "in-progress"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "stopped"
    | "unknown"
    | "entered-in-error";

export const CarePlanDetailStatus = {
    NotStarted: "not-started",
    Scheduled: "scheduled",
    InProgress: "in-progress",
    OnHold: "on-hold",
    Completed: "completed",
    Cancelled: "cancelled",
    Stopped: "stopped",
    Unknown: "unknown",
    EnteredInError: "entered-in-error",
} as const;
