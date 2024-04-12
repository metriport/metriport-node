/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The regulatory authorization of a medicinal product.
 */
export interface MedicinalProductAuthorization extends Metriport.fhir.BaseResource {
    resourceType: "MedicinalProductAuthorization";
    /** Business identifier for the marketing authorization, as assigned by a regulator. */
    identifier?: Metriport.fhir.Identifier[];
    /** The medicinal product that is being authorized. */
    subject?: Metriport.fhir.Reference;
    /** The country in which the marketing authorization has been granted. */
    country?: Metriport.fhir.CodeableConcept[];
    /** Jurisdiction within a country. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** The status of the marketing authorization. */
    status?: Metriport.fhir.CodeableConcept;
    /** The date at which the given status has become applicable. */
    statusDate?: Metriport.fhir.DateTime;
    /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored. */
    restoreDate?: Metriport.fhir.DateTime;
    /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format. */
    validityPeriod?: Metriport.fhir.Period;
    /** A period of time after authorization before generic product applicatiosn can be submitted. */
    dataExclusivityPeriod?: Metriport.fhir.Period;
    /** The date when the first authorization was granted by a Medicines Regulatory Agency. */
    dateOfFirstAuthorization?: Metriport.fhir.DateTime;
    /** Date of first marketing authorization for a company's new medicinal product in any country in the World. */
    internationalBirthDate?: Metriport.fhir.DateTime;
    /** The legal framework against which this authorization is granted. */
    legalBasis?: Metriport.fhir.CodeableConcept;
    /** Authorization in areas within a country. */
    jurisdictionalAuthorization?: Metriport.fhir.MedicinalProductAuthorizationJurisdictionalAuthorization[];
    /** Marketing Authorization Holder. */
    holder?: Metriport.fhir.Reference;
    /** Medicines Regulatory Agency. */
    regulator?: Metriport.fhir.Reference;
    /** The regulatory procedure for granting or amending a marketing authorization. */
    procedure?: Metriport.fhir.MedicinalProductAuthorizationProcedure;
}
