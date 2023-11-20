/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefit extends Metriport.fhir.BaseResource {
    resourceType: "ExplanationOfBenefit";
    /** A unique identifier assigned to this explanation of benefit. */
    identifier?: Metriport.fhir.Identifier[];
    /** The status of the resource instance. */
    status?: Metriport.fhir.ExplanationOfBenefitStatus;
    /** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
    type: Metriport.fhir.CodeableConcept;
    /** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
    subType?: Metriport.fhir.CodeableConcept;
    /** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
    use?: Metriport.fhir.Code;
    /** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought. */
    patient: Metriport.fhir.Reference;
    /** The period for which charges are being submitted. */
    billablePeriod?: Metriport.fhir.Period;
    /** The date this resource was created. */
    created?: Metriport.fhir.DateTime;
    /** Individual who created the claim, predetermination or preauthorization. */
    enterer?: Metriport.fhir.Reference;
    /** The party responsible for authorization, adjudication and reimbursement. */
    insurer: Metriport.fhir.Reference;
    /** The provider which is responsible for the claim, predetermination or preauthorization. */
    provider: Metriport.fhir.Reference;
    /** The provider-required urgency of processing the request. Typical values include: stat, routine deferred. */
    priority?: Metriport.fhir.CodeableConcept;
    /** A code to indicate whether and for whom funds are to be reserved for future claims. */
    fundsReserveRequested?: Metriport.fhir.CodeableConcept;
    /** A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom. */
    fundsReserve?: Metriport.fhir.CodeableConcept;
    /** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event. */
    related?: Metriport.fhir.ExplanationOfBenefitRelated[];
    /** Prescription to support the dispensing of pharmacy, device or vision products. */
    prescription?: Metriport.fhir.Reference;
    /** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
    originalPrescription?: Metriport.fhir.Reference;
    /** The party to be reimbursed for cost of the products and services according to the terms of the policy. */
    payee?: Metriport.fhir.ExplanationOfBenefitPayee;
    /** A reference to a referral resource. */
    referral?: Metriport.fhir.Reference;
    /** Facility where the services were provided. */
    facility?: Metriport.fhir.Reference;
    /** The business identifier for the instance of the adjudication request: claim predetermination or preauthorization. */
    claim?: Metriport.fhir.Reference;
    /** The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response. */
    claimResponse?: Metriport.fhir.Reference;
    /** The outcome of the claim, predetermination, or preauthorization processing. */
    outcome?: Metriport.fhir.Code;
    /** A human readable description of the status of the adjudication. */
    disposition?: string;
    /** Reference from the Insurer which is used in later communications which refers to this adjudication. */
    preAuthRef?: string[];
    /** The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided. */
    preAuthRefPeriod?: Metriport.fhir.Period[];
    /** The members of the team who provided the products and services. */
    careTeam?: Metriport.fhir.ExplanationOfBenefitCareTeam[];
    /** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
    supportingInfo?: Metriport.fhir.ExplanationOfBenefitSupportingInfo[];
    /** Information about diagnoses relevant to the claim items. */
    diagnosis?: Metriport.fhir.ExplanationOfBenefitDiagnosis[];
    /** Procedures performed on the patient relevant to the billing items with the claim. */
    procedure?: Metriport.fhir.ExplanationOfBenefitProcedure[];
    /** This indicates the relative order of a series of EOBs related to different coverages for the same suite of services. */
    precedence?: Metriport.fhir.PositiveInt;
    /** Financial instruments for reimbursement for the health care products and services specified on the claim. */
    insurance: Metriport.fhir.ExplanationOfBenefitInsurance[];
    /** Details of a accident which resulted in injuries which required the products and services listed in the claim. */
    accident?: Metriport.fhir.ExplanationOfBenefitAccident;
    /** A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details. */
    item?: Metriport.fhir.ExplanationOfBenefitItem[];
    /** The first-tier service adjudications for payor added product or service lines. */
    addItem?: Metriport.fhir.ExplanationOfBenefitAddItem[];
    /** The adjudication results which are presented at the header level rather than at the line-item or add-item levels. */
    adjudication?: Metriport.fhir.ExplanationOfBenefitAdjudication[];
    /** Categorized monetary totals for the adjudication. */
    total?: Metriport.fhir.ExplanationOfBenefitTotal[];
    /** Payment details for the adjudication of the claim. */
    payment?: Metriport.fhir.ExplanationOfBenefitPayment;
    /** A code for the form to be used for printing the content. */
    formCode?: Metriport.fhir.CodeableConcept;
    /** The actual form, by reference or inclusion, for printing the content or an EOB. */
    form?: Metriport.fhir.Attachment;
    /** A note that describes or explains adjudication results in a human readable form. */
    processNote?: Metriport.fhir.ExplanationOfBenefitProcessNote[];
    /** The term of the benefits documented in this response. */
    benefitPeriod?: Metriport.fhir.Period;
    /** Balance by Benefit Category. */
    benefitBalance?: Metriport.fhir.ExplanationOfBenefitBenefitBalance[];
}