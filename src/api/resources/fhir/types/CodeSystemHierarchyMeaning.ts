/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The meaning of the hierarchy of concepts as represented in this resource.
 */
export type CodeSystemHierarchyMeaning = "grouped-by" | "is-a" | "part-of" | "classified-with";

export const CodeSystemHierarchyMeaning = {
    GroupedBy: "grouped-by",
    IsA: "is-a",
    PartOf: "part-of",
    ClassifiedWith: "classified-with",
} as const;
