/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Describes the event of a patient consuming or otherwise being administered a medication. This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.
 */
export interface MedicationAdministration extends Metriport.fhir.BaseResource {
    resourceType: "MedicationAdministration";
    /** Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
    identifier?: Metriport.fhir.Identifier[];
    /** A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event. */
    instantiates?: Metriport.fhir.Uri[];
    /** A larger event of which this particular event is a component or step. */
    partOf?: Metriport.fhir.Reference[];
    /** Will generally be set to show that the administration has been completed. For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way. */
    status?: Metriport.fhir.Code;
    /** A code indicating why the administration was not performed. */
    statusReason?: Metriport.fhir.CodeableConcept[];
    /** Indicates where the medication is expected to be consumed or administered. */
    category?: Metriport.fhir.CodeableConcept;
    /** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
    medicationCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
    medicationReference?: Metriport.fhir.Reference;
    /** The person or animal or group receiving the medication. */
    subject: Metriport.fhir.Reference;
    /** The visit, admission, or other contact between patient and health care provider during which the medication administration was performed. */
    context?: Metriport.fhir.Reference;
    /** Additional information (for example, patient height and weight) that supports the administration of the medication. */
    supportingInformation?: Metriport.fhir.Reference[];
    /** A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
    effectiveDateTime?: string;
    /** A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
    effectivePeriod?: Metriport.fhir.Period;
    /** Indicates who or what performed the medication administration and how they were involved. */
    performer?: Metriport.fhir.MedicationAdministrationPerformer[];
    /** A code indicating why the medication was given. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Condition or observation that supports why the medication was administered. */
    reasonReference?: Metriport.fhir.Reference[];
    /** The original request, instruction or authority to perform the administration. */
    request?: Metriport.fhir.Reference;
    /** The device used in administering the medication to the patient. For example, a particular infusion pump. */
    device?: Metriport.fhir.Reference[];
    /** Extra information about the medication administration that is not conveyed by the other attributes. */
    note?: Metriport.fhir.Annotation[];
    /** Describes the medication dosage information details e.g. dose, rate, site, route, etc. */
    dosage?: Metriport.fhir.MedicationAdministrationDosage;
    /** A summary of the events of interest that have occurred, such as when the administration was verified. */
    eventHistory?: Metriport.fhir.Reference[];
}
