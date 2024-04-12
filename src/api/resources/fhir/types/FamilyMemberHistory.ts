/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Significant health conditions for a person related to the patient relevant in the context of care for the patient.
 */
export interface FamilyMemberHistory extends Metriport.fhir.BaseResource {
    resourceType: "FamilyMemberHistory";
    /** Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
    identifier?: Metriport.fhir.Identifier[];
    /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory. */
    instantiatesCanonical?: Metriport.fhir.Canonical[];
    /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory. */
    instantiatesUri?: Metriport.fhir.Uri[];
    /** A code specifying the status of the record of the family history of a specific family member. */
    status?: Metriport.fhir.FamilyMemberHistoryStatus;
    /** Describes why the family member's history is not available. */
    dataAbsentReason?: Metriport.fhir.CodeableConcept;
    /** The person who this history concerns. */
    patient: Metriport.fhir.Reference;
    /** The date (and possibly time) when the family member history was recorded or last updated. */
    date?: Metriport.fhir.DateTime;
    /** This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair". */
    name?: string;
    /** The type of relationship this person has to the patient (father, mother, brother etc.). */
    relationship: Metriport.fhir.CodeableConcept;
    /** The birth sex of the family member. */
    sex?: Metriport.fhir.CodeableConcept;
    /** The actual or approximate date of birth of the relative. */
    bornPeriod?: Metriport.fhir.Period;
    /** The actual or approximate date of birth of the relative. */
    bornDate?: string;
    /** The actual or approximate date of birth of the relative. */
    bornString?: string;
    /** The age of the relative at the time the family member history is recorded. */
    ageAge?: Metriport.fhir.Age;
    /** The age of the relative at the time the family member history is recorded. */
    ageRange?: Metriport.fhir.Range;
    /** The age of the relative at the time the family member history is recorded. */
    ageString?: string;
    /** If true, indicates that the age value specified is an estimated value. */
    estimatedAge?: boolean;
    /** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
    deceasedBoolean?: boolean;
    /** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
    deceasedAge?: Metriport.fhir.Age;
    /** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
    deceasedRange?: Metriport.fhir.Range;
    /** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
    deceasedDate?: string;
    /** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
    deceasedString?: string;
    /** Describes why the family member history occurred in coded or textual form. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event. */
    reasonReference?: Metriport.fhir.Reference[];
    /** This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible. */
    note?: Metriport.fhir.Annotation[];
    /** The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition. */
    condition?: Metriport.fhir.FamilyMemberHistoryCondition[];
}
