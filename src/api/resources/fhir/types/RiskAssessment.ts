/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export interface RiskAssessment extends Metriport.fhir.BaseResource {
    resourceType: "RiskAssessment";
    /** Business identifier assigned to the risk assessment. */
    identifier?: Metriport.fhir.Identifier[];
    /** A reference to the request that is fulfilled by this risk assessment. */
    basedOn?: Metriport.fhir.Reference;
    /** A reference to a resource that this risk assessment is part of, such as a Procedure. */
    parent?: Metriport.fhir.Reference;
    /** The status of the RiskAssessment, using the same statuses as an Observation. */
    status?: Metriport.fhir.Code;
    /** The algorithm, process or mechanism used to evaluate the risk. */
    method?: Metriport.fhir.CodeableConcept;
    /** The type of the risk assessment performed. */
    code?: Metriport.fhir.CodeableConcept;
    /** The patient or group the risk assessment applies to. */
    subject: Metriport.fhir.Reference;
    /** The encounter where the assessment was performed. */
    encounter?: Metriport.fhir.Reference;
    /** The date (and possibly time) the risk assessment was performed. */
    occurrenceDateTime?: string;
    /** The date (and possibly time) the risk assessment was performed. */
    occurrencePeriod?: Metriport.fhir.Period;
    /** For assessments or prognosis specific to a particular condition, indicates the condition being assessed. */
    condition?: Metriport.fhir.Reference;
    /** The provider or software application that performed the assessment. */
    performer?: Metriport.fhir.Reference;
    /** The reason the risk assessment was performed. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Resources supporting the reason the risk assessment was performed. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.). */
    basis?: Metriport.fhir.Reference[];
    /** Describes the expected outcome for the subject. */
    prediction?: Metriport.fhir.RiskAssessmentPrediction[];
    /** A description of the steps that might be taken to reduce the identified risk(s). */
    mitigation?: string;
    /** Additional comments about the risk assessment. */
    note?: Metriport.fhir.Annotation[];
}
