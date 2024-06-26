/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export interface MedicationRequest extends Metriport.fhir.BaseResource {
    resourceType: "MedicationRequest";
    /** Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
    identifier?: Metriport.fhir.Identifier[];
    /** A code specifying the current state of the order. Generally, this will be active or completed state. */
    status?: Metriport.fhir.Code;
    /** Captures the reason for the current state of the MedicationRequest. */
    statusReason?: Metriport.fhir.CodeableConcept;
    /** Whether the request is a proposal, plan, or an original order. */
    intent?: Metriport.fhir.Code;
    /** Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)). */
    category?: Metriport.fhir.CodeableConcept[];
    /** Indicates how quickly the Medication Request should be addressed with respect to other requests. */
    priority?: Metriport.fhir.Code;
    /** If true indicates that the provider is asking for the medication request not to occur. */
    doNotPerform?: boolean;
    /** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record. It may also indicate the source of the report. */
    reportedBoolean?: boolean;
    /** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record. It may also indicate the source of the report. */
    reportedReference?: Metriport.fhir.Reference;
    /** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications. */
    medicationCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications. */
    medicationReference?: Metriport.fhir.Reference;
    /** A link to a resource representing the person or set of individuals to whom the medication will be given. */
    subject: Metriport.fhir.Reference;
    /** The Encounter during which this [x] was created or to which the creation of this record is tightly associated. */
    encounter?: Metriport.fhir.Reference;
    /** Include additional information (for example, patient height and weight) that supports the ordering of the medication. */
    supportingInformation?: Metriport.fhir.Reference[];
    /** The date (and perhaps time) when the prescription was initially written or authored on. */
    authoredOn?: Metriport.fhir.DateTime;
    /** The individual, organization, or device that initiated the request and has responsibility for its activation. */
    requester?: Metriport.fhir.Reference;
    /** The specified desired performer of the medication treatment (e.g. the performer of the medication administration). */
    performer?: Metriport.fhir.Reference;
    /** Indicates the type of performer of the administration of the medication. */
    performerType?: Metriport.fhir.CodeableConcept;
    /** The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order. */
    recorder?: Metriport.fhir.Reference;
    /** The reason or the indication for ordering or not ordering the medication. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Condition or observation that supports why the medication was ordered. */
    reasonReference?: Metriport.fhir.Reference[];
    /** The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest. */
    instantiatesCanonical?: Metriport.fhir.Canonical[];
    /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest. */
    instantiatesUri?: Metriport.fhir.Uri[];
    /** A plan or request that is fulfilled in whole or in part by this medication request. */
    basedOn?: Metriport.fhir.Reference[];
    /** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription. */
    groupIdentifier?: Metriport.fhir.Identifier;
    /** The description of the overall patte3rn of the administration of the medication to the patient. */
    courseOfTherapyType?: Metriport.fhir.CodeableConcept;
    /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service. */
    insurance?: Metriport.fhir.Reference[];
    /** Extra information about the prescription that could not be conveyed by the other attributes. */
    note?: Metriport.fhir.Annotation[];
    /** Indicates how the medication is to be used by the patient. */
    dosageInstruction?: Metriport.fhir.Dosage[];
    /** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order). Note that this information is not always sent with the order. There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department. */
    dispenseRequest?: Metriport.fhir.MedicationRequestDispenseRequest;
    /** Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done. */
    substitution?: Metriport.fhir.MedicationRequestSubstitution;
    /** A link to a resource representing an earlier order related order or prescription. */
    priorPrescription?: Metriport.fhir.Reference;
    /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc. */
    detectedIssue?: Metriport.fhir.Reference[];
    /** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource. */
    eventHistory?: Metriport.fhir.Reference[];
}
