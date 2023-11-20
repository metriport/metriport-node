/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes.
 */
export interface MedicinalProductContraindication extends Metriport.fhir.BaseResource {
    resourceType: "MedicinalProductContraindication";
    /** The medication for which this is an indication. */
    subject?: Metriport.fhir.Reference[];
    /** The disease, symptom or procedure for the contraindication. */
    disease?: Metriport.fhir.CodeableConcept;
    /** The status of the disease or symptom for the contraindication. */
    diseaseStatus?: Metriport.fhir.CodeableConcept;
    /** A comorbidity (concurrent condition) or coinfection. */
    comorbidity?: Metriport.fhir.CodeableConcept[];
    /** Information about the use of the medicinal product in relation to other therapies as part of the indication. */
    therapeuticIndication?: Metriport.fhir.Reference[];
    /** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
    otherTherapy?: Metriport.fhir.MedicinalProductContraindicationOtherTherapy[];
    /** The population group to which this applies. */
    population?: Metriport.fhir.Population[];
}