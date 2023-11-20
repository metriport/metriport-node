/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Describe the undesirable effects of the medicinal product.
 */
export interface MedicinalProductUndesirableEffect extends Metriport.fhir.BaseResource {
    resourceType: "MedicinalProductUndesirableEffect";
    /** The medication for which this is an indication. */
    subject?: Metriport.fhir.Reference[];
    /** The symptom, condition or undesirable effect. */
    symptomConditionEffect?: Metriport.fhir.CodeableConcept;
    /** Classification of the effect. */
    classification?: Metriport.fhir.CodeableConcept;
    /** The frequency of occurrence of the effect. */
    frequencyOfOccurrence?: Metriport.fhir.CodeableConcept;
    /** The population group to which this applies. */
    population?: Metriport.fhir.Population[];
}