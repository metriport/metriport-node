/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc.
 */
export type CatalogEntryRelatedEntryRelationtype = "triggers" | "is-replaced-by";

export const CatalogEntryRelatedEntryRelationtype = {
    Triggers: "triggers",
    IsReplacedBy: "is-replaced-by",
} as const;
