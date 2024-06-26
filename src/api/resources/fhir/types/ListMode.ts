/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
 */
export type ListMode = "working" | "snapshot" | "changes";

export const ListMode = {
    Working: "working",
    Snapshot: "snapshot",
    Changes: "changes",
} as const;
