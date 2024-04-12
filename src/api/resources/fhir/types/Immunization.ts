/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.
 */
export interface Immunization extends Metriport.fhir.BaseResource {
    resourceType: "Immunization";
    /** A unique identifier assigned to this immunization record. */
    identifier?: Metriport.fhir.Identifier[];
    /** Indicates the current status of the immunization event. */
    status?: Metriport.fhir.Code;
    /** Indicates the reason the immunization event was not performed. */
    statusReason?: Metriport.fhir.CodeableConcept;
    /** Vaccine that was administered or was to be administered. */
    vaccineCode: Metriport.fhir.CodeableConcept;
    /** The patient who either received or did not receive the immunization. */
    patient: Metriport.fhir.Reference;
    /** The visit or admission or other contact between patient and health care provider the immunization was performed as part of. */
    encounter?: Metriport.fhir.Reference;
    /** Date vaccine administered or was to be administered. */
    occurrenceDateTime?: string;
    /** Date vaccine administered or was to be administered. */
    occurrenceString?: string;
    /** The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event. */
    recorded?: Metriport.fhir.DateTime;
    /** An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded. */
    primarySource?: boolean;
    /** The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine. */
    reportOrigin?: Metriport.fhir.CodeableConcept;
    /** The service delivery location where the vaccine administration occurred. */
    location?: Metriport.fhir.Reference;
    /** Name of vaccine manufacturer. */
    manufacturer?: Metriport.fhir.Reference;
    /** Lot number of the vaccine product. */
    lotNumber?: string;
    /** Date vaccine batch expires. */
    expirationDate?: string;
    /** Body site where vaccine was administered. */
    site?: Metriport.fhir.CodeableConcept;
    /** The path by which the vaccine product is taken into the body. */
    route?: Metriport.fhir.CodeableConcept;
    /** The quantity of vaccine product that was administered. */
    doseQuantity?: Metriport.fhir.Quantity;
    /** Indicates who performed the immunization event. */
    performer?: Metriport.fhir.ImmunizationPerformer[];
    /** Extra information about the immunization that is not conveyed by the other attributes. */
    note?: Metriport.fhir.Annotation[];
    /** Reasons why the vaccine was administered. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Condition, Observation or DiagnosticReport that supports why the immunization was administered. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent. */
    isSubpotent?: boolean;
    /** Reason why a dose is considered to be subpotent. */
    subpotentReason?: Metriport.fhir.CodeableConcept[];
    /** Educational material presented to the patient (or guardian) at the time of vaccine administration. */
    education?: Metriport.fhir.ImmunizationEducation[];
    /** Indicates a patient's eligibility for a funding program. */
    programEligibility?: Metriport.fhir.CodeableConcept[];
    /** Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered). */
    fundingSource?: Metriport.fhir.CodeableConcept;
    /** Categorical data indicating that an adverse event is associated in time to an immunization. */
    reaction?: Metriport.fhir.ImmunizationReaction[];
    /** The protocol (set of recommendations) being followed by the provider who administered the dose. */
    protocolApplied?: Metriport.fhir.ImmunizationProtocolApplied[];
}
