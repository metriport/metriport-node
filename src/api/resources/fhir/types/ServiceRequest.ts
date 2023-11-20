/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.
 */
export interface ServiceRequest extends Metriport.fhir.BaseResource {
    resourceType: "ServiceRequest";
    /** Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller. */
    identifier?: Metriport.fhir.Identifier[];
    /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest. */
    instantiatesCanonical?: Metriport.fhir.Canonical[];
    /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest. */
    instantiatesUri?: Metriport.fhir.Uri[];
    /** Plan/proposal/order fulfilled by this request. */
    basedOn?: Metriport.fhir.Reference[];
    /** The request takes the place of the referenced completed or terminated request(s). */
    replaces?: Metriport.fhir.Reference[];
    /** A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier. */
    requisition?: Metriport.fhir.Identifier;
    /** The status of the order. */
    status?: Metriport.fhir.Code;
    /** Whether the request is a proposal, plan, an original order or a reflex order. */
    intent?: Metriport.fhir.Code;
    /** A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure"). */
    category?: Metriport.fhir.CodeableConcept[];
    /** Indicates how quickly the ServiceRequest should be addressed with respect to other requests. */
    priority?: Metriport.fhir.Code;
    /** Set this to true if the record is saying that the service/procedure should NOT be performed. */
    doNotPerform?: boolean;
    /** A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested. */
    code?: Metriport.fhir.CodeableConcept;
    /** Additional details and instructions about the how the services are to be delivered. For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied. */
    orderDetail?: Metriport.fhir.CodeableConcept[];
    /** An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction). */
    quantityQuantity?: Metriport.fhir.Quantity;
    /** An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction). */
    quantityRatio?: Metriport.fhir.Ratio;
    /** An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction). */
    quantityRange?: Metriport.fhir.Range;
    /** On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans). */
    subject: Metriport.fhir.Reference;
    /** An encounter that provides additional information about the healthcare context in which this request is made. */
    encounter?: Metriport.fhir.Reference;
    /** The date/time at which the requested service should occur. */
    occurrenceDateTime?: string;
    /** The date/time at which the requested service should occur. */
    occurrencePeriod?: Metriport.fhir.Period;
    /** The date/time at which the requested service should occur. */
    occurrenceTiming?: Metriport.fhir.Timing;
    /** If a CodeableConcept is present, it indicates the pre-condition for performing the service. For example "pain", "on flare-up", etc. */
    asNeededBoolean?: boolean;
    /** If a CodeableConcept is present, it indicates the pre-condition for performing the service. For example "pain", "on flare-up", etc. */
    asNeededCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** When the request transitioned to being actionable. */
    authoredOn?: Metriport.fhir.DateTime;
    /** The individual who initiated the request and has responsibility for its activation. */
    requester?: Metriport.fhir.Reference;
    /** Desired type of performer for doing the requested service. */
    performerType?: Metriport.fhir.CodeableConcept;
    /** The desired performer for doing the requested service. For example, the surgeon, dermatopathologist, endoscopist, etc. */
    performer?: Metriport.fhir.Reference[];
    /** The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center. */
    locationCode?: Metriport.fhir.CodeableConcept[];
    /** A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center. */
    locationReference?: Metriport.fhir.Reference[];
    /** An explanation or justification for why this service is being requested in coded or textual form. This is often for billing purposes. May relate to the resources referred to in `supportingInfo`. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Indicates another resource that provides a justification for why this service is being requested. May relate to the resources referred to in `supportingInfo`. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service. */
    insurance?: Metriport.fhir.Reference[];
    /** Additional clinical information about the patient or specimen that may influence the services or their interpretations. This information includes diagnosis, clinical findings and other observations. In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)". This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example, reporting the amount of inspired oxygen for blood gas measurements. */
    supportingInfo?: Metriport.fhir.Reference[];
    /** One or more specimens that the laboratory procedure will use. */
    specimen?: Metriport.fhir.Reference[];
    /** Anatomic location where the procedure should be performed. This is the target site. */
    bodySite?: Metriport.fhir.CodeableConcept[];
    /** Any other notes and comments made about the service request. For example, internal billing notes. */
    note?: Metriport.fhir.Annotation[];
    /** Instructions in terms that are understood by the patient or consumer. */
    patientInstruction?: string;
    /** Key events in the history of the request. */
    relevantHistory?: Metriport.fhir.Reference[];
}