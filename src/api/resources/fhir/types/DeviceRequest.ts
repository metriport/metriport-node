/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export interface DeviceRequest extends Metriport.fhir.BaseResource {
    resourceType: "DeviceRequest";
    /** Identifiers assigned to this order by the orderer or by the receiver. */
    identifier?: Metriport.fhir.Identifier[];
    /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest. */
    instantiatesCanonical?: Metriport.fhir.Canonical[];
    /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest. */
    instantiatesUri?: Metriport.fhir.Uri[];
    /** Plan/proposal/order fulfilled by this request. */
    basedOn?: Metriport.fhir.Reference[];
    /** The request takes the place of the referenced completed or terminated request(s). */
    priorRequest?: Metriport.fhir.Reference[];
    /** Composite request this is part of. */
    groupIdentifier?: Metriport.fhir.Identifier;
    /** The status of the request. */
    status?: Metriport.fhir.Code;
    /** Whether the request is a proposal, plan, an original order or a reflex order. */
    intent?: Metriport.fhir.Code;
    /** Indicates how quickly the {{title}} should be addressed with respect to other requests. */
    priority?: Metriport.fhir.Code;
    /** The details of the device to be used. */
    codeReference?: Metriport.fhir.Reference;
    /** The details of the device to be used. */
    codeCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** Specific parameters for the ordered item. For example, the prism value for lenses. */
    parameter?: Metriport.fhir.DeviceRequestParameter[];
    /** The patient who will use the device. */
    subject: Metriport.fhir.Reference;
    /** An encounter that provides additional context in which this request is made. */
    encounter?: Metriport.fhir.Reference;
    /** The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013". */
    occurrenceDateTime?: string;
    /** The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013". */
    occurrencePeriod?: Metriport.fhir.Period;
    /** The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013". */
    occurrenceTiming?: Metriport.fhir.Timing;
    /** When the request transitioned to being actionable. */
    authoredOn?: Metriport.fhir.DateTime;
    /** The individual who initiated the request and has responsibility for its activation. */
    requester?: Metriport.fhir.Reference;
    /** Desired type of performer for doing the diagnostic testing. */
    performerType?: Metriport.fhir.CodeableConcept;
    /** The desired performer for doing the diagnostic testing. */
    performer?: Metriport.fhir.Reference;
    /** Reason or justification for the use of this device. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Reason or justification for the use of this device. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service. */
    insurance?: Metriport.fhir.Reference[];
    /** Additional clinical information about the patient that may influence the request fulfilment. For example, this may include where on the subject's body the device will be used (i.e. the target site). */
    supportingInfo?: Metriport.fhir.Reference[];
    /** Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement. */
    note?: Metriport.fhir.Annotation[];
    /** Key events in the history of the request. */
    relevantHistory?: Metriport.fhir.Reference[];
}
