/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the Device availability.
 */
export type DeviceStatus = "active" | "inactive" | "entered-in-error" | "unknown";

export const DeviceStatus = {
    Active: "active",
    Inactive: "inactive",
    EnteredInError: "entered-in-error",
    Unknown: "unknown",
} as const;
