/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of value that a search parameter may contain, and how the content is interpreted.
 */
export type SearchParameterType =
    | "number"
    | "date"
    | "string"
    | "token"
    | "reference"
    | "composite"
    | "quantity"
    | "uri"
    | "special";

export const SearchParameterType = {
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
