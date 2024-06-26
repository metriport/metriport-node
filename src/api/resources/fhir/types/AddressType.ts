/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
 */
export type AddressType = "postal" | "physical" | "both";

export const AddressType = {
    Postal: "postal",
    Physical: "physical",
    Both: "both",
} as const;
