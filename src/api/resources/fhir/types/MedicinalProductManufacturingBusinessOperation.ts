/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export interface MedicinalProductManufacturingBusinessOperation {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** The type of manufacturing operation. */
    operationType?: Metriport.fhir.CodeableConcept;
    /** Regulatory authorization reference number. */
    authorisationReferenceNumber?: Metriport.fhir.Identifier;
    /** Regulatory authorization date. */
    effectiveDate?: Metriport.fhir.DateTime;
    /** To indicate if this proces is commercially confidential. */
    confidentialityIndicator?: Metriport.fhir.CodeableConcept;
    /** The manufacturer or establishment associated with the process. */
    manufacturer?: Metriport.fhir.Reference[];
    /** A regulator which oversees the operation. */
    regulator?: Metriport.fhir.Reference;
}
