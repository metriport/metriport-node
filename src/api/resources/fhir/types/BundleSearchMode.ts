/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Why this entry is in the result set - whether it's included as a match or because of an \_include requirement, or to convey information or warning information about the search process.
 */
export type BundleSearchMode = "match" | "include" | "outcome";

export const BundleSearchMode = {
    Match: "match",
    Include: "include",
    Outcome: "outcome",
} as const;
