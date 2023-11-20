/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Record of delivery of what is supplied.
 */
export interface SupplyDelivery extends Metriport.fhir.BaseResource {
    resourceType: "SupplyDelivery";
    /** Identifier for the supply delivery event that is used to identify it across multiple disparate systems. */
    identifier?: Metriport.fhir.Identifier[];
    /** A plan, proposal or order that is fulfilled in whole or in part by this event. */
    basedOn?: Metriport.fhir.Reference[];
    /** A larger event of which this particular event is a component or step. */
    partOf?: Metriport.fhir.Reference[];
    /** A code specifying the state of the dispense event. */
    status?: Metriport.fhir.SupplyDeliveryStatus;
    /** A link to a resource representing the person whom the delivered item is for. */
    patient?: Metriport.fhir.Reference;
    /** Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc. */
    type?: Metriport.fhir.CodeableConcept;
    /** The item that is being delivered or has been supplied. */
    suppliedItem?: Metriport.fhir.SupplyDeliverySuppliedItem;
    /** The date or time(s) the activity occurred. */
    occurrenceDateTime?: string;
    /** The date or time(s) the activity occurred. */
    occurrencePeriod?: Metriport.fhir.Period;
    /** The date or time(s) the activity occurred. */
    occurrenceTiming?: Metriport.fhir.Timing;
    /** The individual responsible for dispensing the medication, supplier or device. */
    supplier?: Metriport.fhir.Reference;
    /** Identification of the facility/location where the Supply was shipped to, as part of the dispense event. */
    destination?: Metriport.fhir.Reference;
    /** Identifies the person who picked up the Supply. */
    receiver?: Metriport.fhir.Reference[];
}