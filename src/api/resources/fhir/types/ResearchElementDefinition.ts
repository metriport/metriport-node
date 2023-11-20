/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export interface ResearchElementDefinition extends Metriport.fhir.BaseResource {
    resourceType: "ResearchElementDefinition";
    /** An absolute URI that is used to identify this research element definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this research element definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the research element definition is stored on different servers. */
    url?: Metriport.fhir.Uri;
    /** A formal identifier that is used to identify this research element definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
    identifier?: Metriport.fhir.Identifier[];
    /** The identifier that is used to identify this version of the research element definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the research element definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
    version?: string;
    /** A natural language name identifying the research element definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** A short, descriptive, user-friendly title for the research element definition. */
    title?: string;
    /** The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary. */
    shortTitle?: string;
    /** An explanatory or alternate title for the ResearchElementDefinition giving additional information about its content. */
    subtitle?: string;
    /** The status of this research element definition. Enables tracking the life-cycle of the content. */
    status?: Metriport.fhir.ResearchElementDefinitionStatus;
    /** A Boolean value to indicate that this research element definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The intended subjects for the ResearchElementDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchElementDefinition can be anything. */
    subjectCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** The intended subjects for the ResearchElementDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchElementDefinition can be anything. */
    subjectReference?: Metriport.fhir.Reference;
    /** The date (and optionally time) when the research element definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the research element definition changes. */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the research element definition. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** A free text natural language description of the research element definition from a consumer's perspective. */
    description?: Metriport.fhir.Markdown;
    /** A human-readable string to clarify or explain concepts about the resource. */
    comment?: string[];
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate research element definition instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the research element definition is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** Explanation of why this research element definition is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** A detailed description, from a clinical perspective, of how the ResearchElementDefinition is used. */
    usage?: string;
    /** A copyright statement relating to the research element definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research element definition. */
    copyright?: Metriport.fhir.Markdown;
    /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
    approvalDate?: string;
    /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
    lastReviewDate?: string;
    /** The period during which the research element definition content was or is planned to be in active use. */
    effectivePeriod?: Metriport.fhir.Period;
    /** Descriptive topics related to the content of the ResearchElementDefinition. Topics provide a high-level categorization grouping types of ResearchElementDefinitions that can be useful for filtering and searching. */
    topic?: Metriport.fhir.CodeableConcept[];
    /** An individiual or organization primarily involved in the creation and maintenance of the content. */
    author?: Metriport.fhir.ContactDetail[];
    /** An individual or organization primarily responsible for internal coherence of the content. */
    editor?: Metriport.fhir.ContactDetail[];
    /** An individual or organization primarily responsible for review of some aspect of the content. */
    reviewer?: Metriport.fhir.ContactDetail[];
    /** An individual or organization responsible for officially endorsing the content for use in some setting. */
    endorser?: Metriport.fhir.ContactDetail[];
    /** Related artifacts such as additional documentation, justification, or bibliographic references. */
    relatedArtifact?: Metriport.fhir.RelatedArtifact[];
    /** A reference to a Library resource containing the formal logic used by the ResearchElementDefinition. */
    library?: Metriport.fhir.Canonical[];
    /** The type of research element, a population, an exposure, or an outcome. */
    type?: Metriport.fhir.ResearchElementDefinitionType;
    /** The type of the outcome (e.g. Dichotomous, Continuous, or Descriptive). */
    variableType?: Metriport.fhir.ResearchElementDefinitionVariableType;
    /** A characteristic that defines the members of the research element. Multiple characteristics are applied with "and" semantics. */
    characteristic: Metriport.fhir.ResearchElementDefinitionCharacteristic[];
}