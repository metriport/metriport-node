/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of triggering event.
 */
export type TriggerDefinitionType =
    | "named-event"
    | "periodic"
    | "data-changed"
    | "data-added"
    | "data-modified"
    | "data-removed"
    | "data-accessed"
    | "data-access-ended";

export const TriggerDefinitionType = {
    NamedEvent: "named-event",
    Periodic: "periodic",
    DataChanged: "data-changed",
    DataAdded: "data-added",
    DataModified: "data-modified",
    DataRemoved: "data-removed",
    DataAccessed: "data-accessed",
    DataAccessEnded: "data-access-ended",
} as const;
