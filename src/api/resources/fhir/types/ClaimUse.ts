/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
 */
export type ClaimUse = "claim" | "preauthorization" | "predetermination";

export const ClaimUse = {
    Claim: "claim",
    Preauthorization: "preauthorization",
    Predetermination: "predetermination",
} as const;