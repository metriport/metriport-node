/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredientStrength {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. */
    presentation: Metriport.fhir.Ratio;
    /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit. */
    presentationLowLimit?: Metriport.fhir.Ratio;
    /** The strength per unitary volume (or mass). */
    concentration?: Metriport.fhir.Ratio;
    /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit. */
    concentrationLowLimit?: Metriport.fhir.Ratio;
    /** For when strength is measured at a particular point or distance. */
    measurementPoint?: string;
    /** The country or countries for which the strength range applies. */
    country?: Metriport.fhir.CodeableConcept[];
    /** Strength expressed in terms of a reference substance. */
    referenceStrength?: Metriport.fhir.MedicinalProductIngredientReferenceStrength[];
}
