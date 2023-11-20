/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the purpose for the naming system - what kinds of things does it make unique?
 */
export type NamingSystemKind = "codesystem" | "identifier" | "root";

export const NamingSystemKind = {
    Codesystem: "codesystem",
    Identifier: "identifier",
    Root: "root",
} as const;