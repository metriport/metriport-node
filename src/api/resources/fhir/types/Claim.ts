/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface Claim extends Metriport.fhir.BaseResource {
    resourceType: "Claim";
    /** A unique identifier assigned to this claim. */
    identifier?: Metriport.fhir.Identifier[];
    /** The status of the resource instance. */
    status?: Metriport.fhir.Code;
    /** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
    type: Metriport.fhir.CodeableConcept;
    /** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
    subType?: Metriport.fhir.CodeableConcept;
    /** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
    use?: Metriport.fhir.ClaimUse;
    /** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought. */
    patient: Metriport.fhir.Reference;
    /** The period for which charges are being submitted. */
    billablePeriod?: Metriport.fhir.Period;
    /** The date this resource was created. */
    created?: Metriport.fhir.DateTime;
    /** Individual who created the claim, predetermination or preauthorization. */
    enterer?: Metriport.fhir.Reference;
    /** The Insurer who is target of the request. */
    insurer?: Metriport.fhir.Reference;
    /** The provider which is responsible for the claim, predetermination or preauthorization. */
    provider: Metriport.fhir.Reference;
    /** The provider-required urgency of processing the request. Typical values include: stat, routine deferred. */
    priority: Metriport.fhir.CodeableConcept;
    /** A code to indicate whether and for whom funds are to be reserved for future claims. */
    fundsReserve?: Metriport.fhir.CodeableConcept;
    /** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event. */
    related?: Metriport.fhir.ClaimRelated[];
    /** Prescription to support the dispensing of pharmacy, device or vision products. */
    prescription?: Metriport.fhir.Reference;
    /** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
    originalPrescription?: Metriport.fhir.Reference;
    /** The party to be reimbursed for cost of the products and services according to the terms of the policy. */
    payee?: Metriport.fhir.ClaimPayee;
    /** A reference to a referral resource. */
    referral?: Metriport.fhir.Reference;
    /** Facility where the services were provided. */
    facility?: Metriport.fhir.Reference;
    /** The members of the team who provided the products and services. */
    careTeam?: Metriport.fhir.ClaimCareTeam[];
    /** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
    supportingInfo?: Metriport.fhir.ClaimSupportingInfo[];
    /** Information about diagnoses relevant to the claim items. */
    diagnosis?: Metriport.fhir.ClaimDiagnosis[];
    /** Procedures performed on the patient relevant to the billing items with the claim. */
    procedure?: Metriport.fhir.ClaimProcedure[];
    /** Financial instruments for reimbursement for the health care products and services specified on the claim. */
    insurance: Metriport.fhir.ClaimInsurance[];
    /** Details of an accident which resulted in injuries which required the products and services listed in the claim. */
    accident?: Metriport.fhir.ClaimAccident;
    /** A claim line. Either a simple product or service or a 'group' of details which can each be a simple items or groups of sub-details. */
    item?: Metriport.fhir.ClaimItem[];
    /** The total value of the all the items in the claim. */
    total?: Metriport.fhir.Money;
}
