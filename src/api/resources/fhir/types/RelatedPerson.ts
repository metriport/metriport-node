/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 */
export interface RelatedPerson extends Metriport.fhir.BaseResource {
    resourceType: "RelatedPerson";
    /** Identifier for a person within a particular scope. */
    identifier?: Metriport.fhir.Identifier[];
    /** Whether this related person record is in active use. */
    active?: boolean;
    /** The patient this person is related to. */
    patient: Metriport.fhir.Reference;
    /** The nature of the relationship between a patient and the related person. */
    relationship?: Metriport.fhir.CodeableConcept[];
    /** A name associated with the person. */
    name?: Metriport.fhir.HumanName[];
    /** A contact detail for the person, e.g. a telephone number or an email address. */
    telecom?: Metriport.fhir.ContactPoint[];
    /** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes. */
    gender?: Metriport.fhir.RelatedPersonGender;
    /** The date on which the related person was born. */
    birthDate?: string;
    /** Address where the related person can be contacted or visited. */
    address?: Metriport.fhir.Address[];
    /** Image of the person. */
    photo?: Metriport.fhir.Attachment[];
    /** The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown. */
    period?: Metriport.fhir.Period;
    /** A language which may be used to communicate with about the patient's health. */
    communication?: Metriport.fhir.RelatedPersonCommunication[];
}
