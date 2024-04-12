/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export interface Composition extends Metriport.fhir.BaseResource {
    resourceType: "Composition";
    /** A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time. */
    identifier?: Metriport.fhir.Identifier;
    /** The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document. */
    status?: Metriport.fhir.CompositionStatus;
    /** Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition. */
    type: Metriport.fhir.CodeableConcept;
    /** A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type. */
    category?: Metriport.fhir.CodeableConcept[];
    /** Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure). */
    subject?: Metriport.fhir.Reference;
    /** Describes the clinical encounter or type of care this documentation is associated with. */
    encounter?: Metriport.fhir.Reference;
    /** The composition editing time, when the composition was last logically changed by the author. */
    date?: Metriport.fhir.DateTime;
    /** Identifies who is responsible for the information in the composition, not necessarily who typed it in. */
    author: Metriport.fhir.Reference[];
    /** Official human-readable label for the composition. */
    title?: string;
    /** The code specifying the level of confidentiality of the Composition. */
    confidentiality?: Metriport.fhir.Code;
    /** A participant who has attested to the accuracy of the composition/document. */
    attester?: Metriport.fhir.CompositionAttester[];
    /** Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information. */
    custodian?: Metriport.fhir.Reference;
    /** Relationships that this composition has with other compositions or documents that already exist. */
    relatesTo?: Metriport.fhir.CompositionRelatesTo[];
    /** The clinical service, such as a colonoscopy or an appendectomy, being documented. */
    event?: Metriport.fhir.CompositionEvent[];
    /** The root of the sections that make up the composition. */
    section?: Metriport.fhir.CompositionSection[];
}
