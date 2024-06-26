/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledge extends Metriport.fhir.BaseResource {
    resourceType: "MedicationKnowledge";
    /** A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
    code?: Metriport.fhir.CodeableConcept;
    /** A code to indicate if the medication is in active use. The status refers to the validity about the information of the medication and not to its medicinal properties. */
    status?: Metriport.fhir.Code;
    /** Describes the details of the manufacturer of the medication product. This is not intended to represent the distributor of a medication product. */
    manufacturer?: Metriport.fhir.Reference;
    /** Describes the form of the item. Powder; tablets; capsule. */
    doseForm?: Metriport.fhir.CodeableConcept;
    /** Specific amount of the drug in the packaged product. For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.). */
    amount?: Metriport.fhir.Quantity;
    /** Additional names for a medication, for example, the name(s) given to a medication in different countries. For example, acetaminophen and paracetamol or salbutamol and albuterol. */
    synonym?: string[];
    /** Associated or related knowledge about a medication. */
    relatedMedicationKnowledge?: Metriport.fhir.MedicationKnowledgeRelatedMedicationKnowledge[];
    /** Associated or related medications. For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor). */
    associatedMedication?: Metriport.fhir.Reference[];
    /** Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.). */
    productType?: Metriport.fhir.CodeableConcept[];
    /** Associated documentation about the medication. */
    monograph?: Metriport.fhir.MedicationKnowledgeMonograph[];
    /** Identifies a particular constituent of interest in the product. */
    ingredient?: Metriport.fhir.MedicationKnowledgeIngredient[];
    /** The instructions for preparing the medication. */
    preparationInstruction?: Metriport.fhir.Markdown;
    /** The intended or approved route of administration. */
    intendedRoute?: Metriport.fhir.CodeableConcept[];
    /** The price of the medication. */
    cost?: Metriport.fhir.MedicationKnowledgeCost[];
    /** The program under which the medication is reviewed. */
    monitoringProgram?: Metriport.fhir.MedicationKnowledgeMonitoringProgram[];
    /** Guidelines for the administration of the medication. */
    administrationGuidelines?: Metriport.fhir.MedicationKnowledgeAdministrationGuidelines[];
    /** Categorization of the medication within a formulary or classification system. */
    medicineClassification?: Metriport.fhir.MedicationKnowledgeMedicineClassification[];
    /** Information that only applies to packages (not products). */
    packaging?: Metriport.fhir.MedicationKnowledgePackaging;
    /** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc. */
    drugCharacteristic?: Metriport.fhir.MedicationKnowledgeDrugCharacteristic[];
    /** Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.). */
    contraindication?: Metriport.fhir.Reference[];
    /** Regulatory information about a medication. */
    regulatory?: Metriport.fhir.MedicationKnowledgeRegulatory[];
    /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body. */
    kinetics?: Metriport.fhir.MedicationKnowledgeKinetics[];
}
