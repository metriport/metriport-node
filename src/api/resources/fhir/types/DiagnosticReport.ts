/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The findings and interpretation of diagnostic tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.
 */
export interface DiagnosticReport extends Metriport.fhir.BaseResource {
    resourceType: "DiagnosticReport";
    /** Identifiers assigned to this report by the performer or other systems. */
    identifier?: Metriport.fhir.Identifier[];
    /** Details concerning a service requested. */
    basedOn?: Metriport.fhir.Reference[];
    /** The status of the diagnostic report. */
    status?: Metriport.fhir.DiagnosticReportStatus;
    /** A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes. */
    category?: Metriport.fhir.CodeableConcept[];
    /** A code or name that describes this diagnostic report. */
    code: Metriport.fhir.CodeableConcept;
    /** The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources. */
    subject?: Metriport.fhir.Reference;
    /** The healthcare event (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about. */
    encounter?: Metriport.fhir.Reference;
    /** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
    effectiveDateTime?: string;
    /** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
    effectivePeriod?: Metriport.fhir.Period;
    /** The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified. */
    issued?: Metriport.fhir.Instant;
    /** The diagnostic service that is responsible for issuing the report. */
    performer?: Metriport.fhir.Reference[];
    /** The practitioner or organization that is responsible for the report's conclusions and interpretations. */
    resultsInterpreter?: Metriport.fhir.Reference[];
    /** Details about the specimens on which this diagnostic report is based. */
    specimen?: Metriport.fhir.Reference[];
    /** [Observations](observation.html) that are part of this diagnostic report. */
    result?: Metriport.fhir.Reference[];
    /** One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images. */
    imagingStudy?: Metriport.fhir.Reference[];
    /** A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest). */
    media?: Metriport.fhir.DiagnosticReportMedia[];
    /** Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report. */
    conclusion?: string;
    /** One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report. */
    conclusionCode?: Metriport.fhir.CodeableConcept[];
    /** Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent. */
    presentedForm?: Metriport.fhir.Attachment[];
}