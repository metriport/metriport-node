/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This code identifies the type of the component.
 */
export type InvoicePriceComponentType = "base" | "surcharge" | "deduction" | "discount" | "tax" | "informational";

export const InvoicePriceComponentType = {
    Base: "base",
    Surcharge: "surcharge",
    Deduction: "deduction",
    Discount: "discount",
    Tax: "tax",
    Informational: "informational",
} as const;
