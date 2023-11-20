/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * busy | free | busy-unavailable | busy-tentative | entered-in-error.
 */
export type SlotStatus = "busy" | "free" | "busy-unavailable" | "busy-tentative" | "entered-in-error";

export const SlotStatus = {
    Busy: "busy",
    Free: "free",
    BusyUnavailable: "busy-unavailable",
    BusyTentative: "busy-tentative",
    EnteredInError: "entered-in-error",
} as const;