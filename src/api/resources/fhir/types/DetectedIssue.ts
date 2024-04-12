/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export interface DetectedIssue extends Metriport.fhir.BaseResource {
    resourceType: "DetectedIssue";
    /** Business identifier associated with the detected issue record. */
    identifier?: Metriport.fhir.Identifier[];
    /** Indicates the status of the detected issue. */
    status?: Metriport.fhir.Code;
    /** Identifies the general type of issue identified. */
    code?: Metriport.fhir.CodeableConcept;
    /** Indicates the degree of importance associated with the identified issue based on the potential impact on the patient. */
    severity?: Metriport.fhir.DetectedIssueSeverity;
    /** Indicates the patient whose record the detected issue is associated with. */
    patient?: Metriport.fhir.Reference;
    /** The date or period when the detected issue was initially identified. */
    identifiedDateTime?: string;
    /** The date or period when the detected issue was initially identified. */
    identifiedPeriod?: Metriport.fhir.Period;
    /** Individual or device responsible for the issue being raised. For example, a decision support application or a pharmacist conducting a medication review. */
    author?: Metriport.fhir.Reference;
    /** Indicates the resource representing the current activity or proposed activity that is potentially problematic. */
    implicated?: Metriport.fhir.Reference[];
    /** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport. */
    evidence?: Metriport.fhir.DetectedIssueEvidence[];
    /** A textual explanation of the detected issue. */
    detail?: string;
    /** The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified. */
    reference?: Metriport.fhir.Uri;
    /** Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting. Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action. */
    mitigation?: Metriport.fhir.DetectedIssueMitigation[];
}
