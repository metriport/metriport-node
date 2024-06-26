/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * How the element value is interpreted when discrimination is evaluated.
 */
export type ElementDefinitionDiscriminatorType = "value" | "exists" | "pattern" | "type" | "profile";

export const ElementDefinitionDiscriminatorType = {
    Value: "value",
    Exists: "exists",
    Pattern: "pattern",
    Type: "type",
    Profile: "profile",
} as const;
