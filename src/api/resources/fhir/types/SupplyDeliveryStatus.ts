/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A code specifying the state of the dispense event.
 */
export type SupplyDeliveryStatus = "in-progress" | "completed" | "abandoned" | "entered-in-error";

export const SupplyDeliveryStatus = {
    InProgress: "in-progress",
    Completed: "completed",
    Abandoned: "abandoned",
    EnteredInError: "entered-in-error",
} as const;
