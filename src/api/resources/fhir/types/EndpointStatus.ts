/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * active | suspended | error | off | test.
 */
export type EndpointStatus = "active" | "suspended" | "error" | "off" | "entered-in-error" | "test";

export const EndpointStatus = {
    Active: "active",
    Suspended: "suspended",
    Error: "error",
    Off: "off",
    EnteredInError: "entered-in-error",
    Test: "test",
} as const;
