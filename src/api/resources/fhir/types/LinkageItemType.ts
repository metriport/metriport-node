/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
 */
export type LinkageItemType = "source" | "alternate" | "historical";

export const LinkageItemType = {
    Source: "source",
    Alternate: "alternate",
    Historical: "historical",
} as const;
