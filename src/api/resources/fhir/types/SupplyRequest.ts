/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export interface SupplyRequest extends Metriport.fhir.BaseResource {
    resourceType: "SupplyRequest";
    /** Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server. */
    identifier?: Metriport.fhir.Identifier[];
    /** Status of the supply request. */
    status?: Metriport.fhir.SupplyRequestStatus;
    /** Category of supply, e.g. central, non-stock, etc. This is used to support work flows associated with the supply process. */
    category?: Metriport.fhir.CodeableConcept;
    /** Indicates how quickly this SupplyRequest should be addressed with respect to other requests. */
    priority?: Metriport.fhir.Code;
    /** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
    itemCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
    itemReference?: Metriport.fhir.Reference;
    /** The amount that is being ordered of the indicated item. */
    quantity: Metriport.fhir.Quantity;
    /** Specific parameters for the ordered item. For example, the size of the indicated item. */
    parameter?: Metriport.fhir.SupplyRequestParameter[];
    /** When the request should be fulfilled. */
    occurrenceDateTime?: string;
    /** When the request should be fulfilled. */
    occurrencePeriod?: Metriport.fhir.Period;
    /** When the request should be fulfilled. */
    occurrenceTiming?: Metriport.fhir.Timing;
    /** When the request was made. */
    authoredOn?: Metriport.fhir.DateTime;
    /** The device, practitioner, etc. who initiated the request. */
    requester?: Metriport.fhir.Reference;
    /** Who is intended to fulfill the request. */
    supplier?: Metriport.fhir.Reference[];
    /** The reason why the supply item was requested. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** The reason why the supply item was requested. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Where the supply is expected to come from. */
    deliverFrom?: Metriport.fhir.Reference;
    /** Where the supply is destined to go. */
    deliverTo?: Metriport.fhir.Reference;
}