/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export interface Medication extends Metriport.fhir.BaseResource {
    resourceType: "Medication";
    /** Business identifier for this medication. */
    identifier?: Metriport.fhir.Identifier[];
    /** A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
    code?: Metriport.fhir.CodeableConcept;
    /** A code to indicate if the medication is in active use. */
    status?: Metriport.fhir.Code;
    /** Describes the details of the manufacturer of the medication product. This is not intended to represent the distributor of a medication product. */
    manufacturer?: Metriport.fhir.Reference;
    /** Describes the form of the item. Powder; tablets; capsule. */
    form?: Metriport.fhir.CodeableConcept;
    /** Specific amount of the drug in the packaged product. For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.). */
    amount?: Metriport.fhir.Ratio;
    /** Identifies a particular constituent of interest in the product. */
    ingredient?: Metriport.fhir.MedicationIngredient[];
    /** Information that only applies to packages (not products). */
    batch?: Metriport.fhir.MedicationBatch;
}
