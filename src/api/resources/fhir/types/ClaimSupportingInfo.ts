/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.
 */
export interface ClaimSupportingInfo {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** A number to uniquely identify supporting information entries. */
    sequence?: Metriport.fhir.PositiveInt;
    /** The general class of the information supplied: information; exception; accident, employment; onset, etc. */
    category: Metriport.fhir.CodeableConcept;
    /** System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient for which care is sought. */
    code?: Metriport.fhir.CodeableConcept;
    /** The date when or period to which this information refers. */
    timingDate?: string;
    /** The date when or period to which this information refers. */
    timingPeriod?: Metriport.fhir.Period;
    /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
    valueBoolean?: boolean;
    /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
    valueString?: string;
    /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
    valueQuantity?: Metriport.fhir.Quantity;
    /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
    valueAttachment?: Metriport.fhir.Attachment;
    /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
    valueReference?: Metriport.fhir.Reference;
    /** Provides the reason in the situation where a reason code is required in addition to the content. */
    reason?: Metriport.fhir.CodeableConcept;
}
