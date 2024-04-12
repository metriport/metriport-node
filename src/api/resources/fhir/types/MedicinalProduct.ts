/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use).
 */
export interface MedicinalProduct extends Metriport.fhir.BaseResource {
    resourceType: "MedicinalProduct";
    /** Business identifier for this product. Could be an MPID. */
    identifier?: Metriport.fhir.Identifier[];
    /** Regulatory type, e.g. Investigational or Authorized. */
    type?: Metriport.fhir.CodeableConcept;
    /** If this medicine applies to human or veterinary uses. */
    domain?: Metriport.fhir.Coding;
    /** The dose form for a single part product, or combined form of a multiple part product. */
    combinedPharmaceuticalDoseForm?: Metriport.fhir.CodeableConcept;
    /** The legal status of supply of the medicinal product as classified by the regulator. */
    legalStatusOfSupply?: Metriport.fhir.CodeableConcept;
    /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons. */
    additionalMonitoringIndicator?: Metriport.fhir.CodeableConcept;
    /** Whether the Medicinal Product is subject to special measures for regulatory reasons. */
    specialMeasures?: string[];
    /** If authorised for use in children. */
    paediatricUseIndicator?: Metriport.fhir.CodeableConcept;
    /** Allows the product to be classified by various systems. */
    productClassification?: Metriport.fhir.CodeableConcept[];
    /** Marketing status of the medicinal product, in contrast to marketing authorizaton. */
    marketingStatus?: Metriport.fhir.MarketingStatus[];
    /** Pharmaceutical aspects of product. */
    pharmaceuticalProduct?: Metriport.fhir.Reference[];
    /** Package representation for the product. */
    packagedMedicinalProduct?: Metriport.fhir.Reference[];
    /** Supporting documentation, typically for regulatory submission. */
    attachedDocument?: Metriport.fhir.Reference[];
    /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File). */
    masterFile?: Metriport.fhir.Reference[];
    /** A product specific contact, person (in a role), or an organization. */
    contact?: Metriport.fhir.Reference[];
    /** Clinical trials or studies that this product is involved in. */
    clinicalTrial?: Metriport.fhir.Reference[];
    /** The product's name, including full name and possibly coded parts. */
    name: Metriport.fhir.MedicinalProductName[];
    /** Reference to another product, e.g. for linking authorised to investigational product. */
    crossReference?: Metriport.fhir.Identifier[];
    /** An operation applied to the product, for manufacturing or adminsitrative purpose. */
    manufacturingBusinessOperation?: Metriport.fhir.MedicinalProductManufacturingBusinessOperation[];
    /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease. */
    specialDesignation?: Metriport.fhir.MedicinalProductSpecialDesignation[];
}
