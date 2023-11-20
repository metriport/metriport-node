/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 */
export interface SubstanceSpecificationMoiety {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Role that the moiety is playing. */
    role?: Metriport.fhir.CodeableConcept;
    /** Identifier by which this moiety substance is known. */
    identifier?: Metriport.fhir.Identifier;
    /** Textual name for this moiety substance. */
    name?: string;
    /** Stereochemistry type. */
    stereochemistry?: Metriport.fhir.CodeableConcept;
    /** Optical activity type. */
    opticalActivity?: Metriport.fhir.CodeableConcept;
    /** Molecular formula. */
    molecularFormula?: string;
    /** Quantitative value for this moiety. */
    amountQuantity?: Metriport.fhir.Quantity;
    /** Quantitative value for this moiety. */
    amountString?: string;
}