/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A homogeneous material with a definite composition.
 */
export interface Substance extends Metriport.fhir.BaseResource {
    resourceType: "Substance";
    /** Unique identifier for the substance. */
    identifier?: Metriport.fhir.Identifier[];
    /** A code to indicate if the substance is actively used. */
    status?: Metriport.fhir.SubstanceStatus;
    /** A code that classifies the general type of substance. This is used for searching, sorting and display purposes. */
    category?: Metriport.fhir.CodeableConcept[];
    /** A code (or set of codes) that identify this substance. */
    code: Metriport.fhir.CodeableConcept;
    /** A description of the substance - its appearance, handling requirements, and other usage notes. */
    description?: string;
    /** Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance. */
    instance?: Metriport.fhir.SubstanceInstance[];
    /** A substance can be composed of other substances. */
    ingredient?: Metriport.fhir.SubstanceIngredient[];
}
