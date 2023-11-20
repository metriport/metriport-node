/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Describes the type of the calibration method.
 */
export type DeviceMetricCalibrationType = "unspecified" | "offset" | "gain" | "two-point";

export const DeviceMetricCalibrationType = {
    Unspecified: "unspecified",
    Offset: "offset",
    Gain: "gain",
    TwoPoint: "two-point",
} as const;