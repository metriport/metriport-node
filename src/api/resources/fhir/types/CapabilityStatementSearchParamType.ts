/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of value a search parameter refers to, and how the content is interpreted.
 */
export type CapabilityStatementSearchParamType =
    | "number"
    | "date"
    | "string"
    | "token"
    | "reference"
    | "composite"
    | "quantity"
    | "uri"
    | "special";

export const CapabilityStatementSearchParamType = {
    Number: "number",
    Date: "date",
    String: "string",
    Token: "token",
    Reference: "reference",
    Composite: "composite",
    Quantity: "quantity",
    Uri: "uri",
    Special: "special",
} as const;
