/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.
 */
export interface MeasureReport extends Metriport.fhir.BaseResource {
    resourceType: "MeasureReport";
    /** A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance. */
    identifier?: Metriport.fhir.Identifier[];
    /** The MeasureReport status. No data will be available until the MeasureReport status is complete. */
    status?: Metriport.fhir.MeasureReportStatus;
    /** The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure. */
    type?: Metriport.fhir.MeasureReportType;
    /** A reference to the Measure that was calculated to produce this report. */
    measure: Metriport.fhir.Canonical;
    /** Optional subject identifying the individual or individuals the report is for. */
    subject?: Metriport.fhir.Reference;
    /** The date this measure report was generated. */
    date?: Metriport.fhir.DateTime;
    /** The individual, location, or organization that is reporting the data. */
    reporter?: Metriport.fhir.Reference;
    /** The reporting period for which the report was calculated. */
    period: Metriport.fhir.Period;
    /** Whether improvement in the measure is noted by an increase or decrease in the measure score. */
    improvementNotation?: Metriport.fhir.CodeableConcept;
    /** The results of the calculation, one for each population group in the measure. */
    group?: Metriport.fhir.MeasureReportGroup[];
    /** A reference to a Bundle containing the Resources that were used in the calculation of this measure. */
    evaluatedResource?: Metriport.fhir.Reference[];
}
