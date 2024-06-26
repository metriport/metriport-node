/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface MedicinalProductIngredient extends Metriport.fhir.BaseResource {
    resourceType: "MedicinalProductIngredient";
    /** The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. */
    identifier?: Metriport.fhir.Identifier;
    /** Ingredient role e.g. Active ingredient, excipient. */
    role: Metriport.fhir.CodeableConcept;
    /** If the ingredient is a known or suspected allergen. */
    allergenicIndicator?: boolean;
    /** Manufacturer of this Ingredient. */
    manufacturer?: Metriport.fhir.Reference[];
    /** A specified substance that comprises this ingredient. */
    specifiedSubstance?: Metriport.fhir.MedicinalProductIngredientSpecifiedSubstance[];
    /** The ingredient substance. */
    substance?: Metriport.fhir.MedicinalProductIngredientSubstance;
}
