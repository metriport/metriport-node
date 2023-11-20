/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A list is a curated collection of resources.
 */
export interface List extends Metriport.fhir.BaseResource {
    resourceType: "List";
    /** Identifier for the List assigned for business purposes outside the context of FHIR. */
    identifier?: Metriport.fhir.Identifier[];
    /** Indicates the current state of this list. */
    status?: Metriport.fhir.ListStatus;
    /** How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted. */
    mode?: Metriport.fhir.ListMode;
    /** A label for the list assigned by the author. */
    title?: string;
    /** This code defines the purpose of the list - why it was created. */
    code?: Metriport.fhir.CodeableConcept;
    /** The common subject (or patient) of the resources that are in the list if there is one. */
    subject?: Metriport.fhir.Reference;
    /** The encounter that is the context in which this list was created. */
    encounter?: Metriport.fhir.Reference;
    /** The date that the list was prepared. */
    date?: Metriport.fhir.DateTime;
    /** The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list. */
    source?: Metriport.fhir.Reference;
    /** What order applies to the items in the list. */
    orderedBy?: Metriport.fhir.CodeableConcept;
    /** Comments that apply to the overall list. */
    note?: Metriport.fhir.Annotation[];
    /** Entries in this list. */
    entry?: Metriport.fhir.ListEntry[];
    /** If the list is empty, why the list is empty. */
    emptyReason?: Metriport.fhir.CodeableConcept;
}