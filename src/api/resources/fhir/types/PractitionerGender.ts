/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
 */
export type PractitionerGender = "male" | "female" | "other" | "unknown";

export const PractitionerGender = {
    Male: "male",
    Female: "female",
    Other: "other",
    Unknown: "unknown",
} as const;
