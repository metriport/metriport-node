/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 */
export interface ResearchDefinition extends Metriport.fhir.BaseResource {
    resourceType: "ResearchDefinition";
    /** An absolute URI that is used to identify this research definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this research definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the research definition is stored on different servers. */
    url?: Metriport.fhir.Uri;
    /** A formal identifier that is used to identify this research definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
    identifier?: Metriport.fhir.Identifier[];
    /** The identifier that is used to identify this version of the research definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the research definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
    version?: string;
    /** A natural language name identifying the research definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** A short, descriptive, user-friendly title for the research definition. */
    title?: string;
    /** The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary. */
    shortTitle?: string;
    /** An explanatory or alternate title for the ResearchDefinition giving additional information about its content. */
    subtitle?: string;
    /** The status of this research definition. Enables tracking the life-cycle of the content. */
    status?: Metriport.fhir.ResearchDefinitionStatus;
    /** A Boolean value to indicate that this research definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The intended subjects for the ResearchDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchDefinition can be anything. */
    subjectCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** The intended subjects for the ResearchDefinition. If this element is not provided, a Patient subject is assumed, but the subject of the ResearchDefinition can be anything. */
    subjectReference?: Metriport.fhir.Reference;
    /** The date (and optionally time) when the research definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the research definition changes. */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the research definition. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** A free text natural language description of the research definition from a consumer's perspective. */
    description?: Metriport.fhir.Markdown;
    /** A human-readable string to clarify or explain concepts about the resource. */
    comment?: string[];
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate research definition instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the research definition is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** Explanation of why this research definition is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** A detailed description, from a clinical perspective, of how the ResearchDefinition is used. */
    usage?: string;
    /** A copyright statement relating to the research definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the research definition. */
    copyright?: Metriport.fhir.Markdown;
    /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
    approvalDate?: string;
    /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
    lastReviewDate?: string;
    /** The period during which the research definition content was or is planned to be in active use. */
    effectivePeriod?: Metriport.fhir.Period;
    /** Descriptive topics related to the content of the ResearchDefinition. Topics provide a high-level categorization grouping types of ResearchDefinitions that can be useful for filtering and searching. */
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
    /** A reference to a Library resource containing the formal logic used by the ResearchDefinition. */
    library?: Metriport.fhir.Canonical[];
    /** A reference to a ResearchElementDefinition resource that defines the population for the research. */
    population: Metriport.fhir.Reference;
    /** A reference to a ResearchElementDefinition resource that defines the exposure for the research. */
    exposure?: Metriport.fhir.Reference;
    /** A reference to a ResearchElementDefinition resource that defines the exposureAlternative for the research. */
    exposureAlternative?: Metriport.fhir.Reference;
    /** A reference to a ResearchElementDefinition resomece that defines the outcome for the research. */
    outcome?: Metriport.fhir.Reference;
}
