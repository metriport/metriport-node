/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Indication for the Medicinal Product.
 */
export interface MedicinalProductIndication extends Metriport.fhir.BaseResource {
    resourceType: "MedicinalProductIndication";
    /** The medication for which this is an indication. */
    subject?: Metriport.fhir.Reference[];
    /** The disease, symptom or procedure that is the indication for treatment. */
    diseaseSymptomProcedure?: Metriport.fhir.CodeableConcept;
    /** The status of the disease or symptom for which the indication applies. */
    diseaseStatus?: Metriport.fhir.CodeableConcept;
    /** Comorbidity (concurrent condition) or co-infection as part of the indication. */
    comorbidity?: Metriport.fhir.CodeableConcept[];
    /** The intended effect, aim or strategy to be achieved by the indication. */
    intendedEffect?: Metriport.fhir.CodeableConcept;
    /** Timing or duration information as part of the indication. */
    duration?: Metriport.fhir.Quantity;
    /** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
    otherTherapy?: Metriport.fhir.MedicinalProductIndicationOtherTherapy[];
    /** Describe the undesirable effects of the medicinal product. */
    undesirableEffect?: Metriport.fhir.Reference[];
    /** The population group to which this applies. */
    population?: Metriport.fhir.Population[];
}
