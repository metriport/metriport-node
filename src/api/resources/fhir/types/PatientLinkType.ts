/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of link between this patient resource and another patient resource.
 */
export type PatientLinkType = "replaced-by" | "replaces" | "refer" | "seealso";

export const PatientLinkType = {
    ReplacedBy: "replaced-by",
    Replaces: "replaces",
    Refer: "refer",
    Seealso: "seealso",
} as const;
