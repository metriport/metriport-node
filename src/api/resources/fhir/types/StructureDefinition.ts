/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
export interface StructureDefinition extends Metriport.fhir.BaseResource {
    resourceType: "StructureDefinition";
    /** An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers. */
    url?: Metriport.fhir.Uri;
    /** A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
    identifier?: Metriport.fhir.Identifier[];
    /** The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
    version?: string;
    /** A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** A short, descriptive, user-friendly title for the structure definition. */
    title?: string;
    /** The status of this structure definition. Enables tracking the life-cycle of the content. */
    status?: Metriport.fhir.StructureDefinitionStatus;
    /** A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The date (and optionally time) when the structure definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes. */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the structure definition. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** A free text natural language description of the structure definition from a consumer's perspective. */
    description?: Metriport.fhir.Markdown;
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure definition instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the structure definition is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** Explanation of why this structure definition is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition. */
    copyright?: Metriport.fhir.Markdown;
    /** A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes. */
    keyword?: Metriport.fhir.Coding[];
    /** The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.1. for this version. */
    fhirVersion?: Metriport.fhir.StructureDefinitionFhirVersion;
    /** An external specification that the content is mapped to. */
    mapping?: Metriport.fhir.StructureDefinitionMapping[];
    /** Defines the kind of structure that this definition is describing. */
    kind?: Metriport.fhir.StructureDefinitionKind;
    /** Whether structure this definition describes is abstract or not - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged between systems. */
    abstract?: boolean;
    /** Identifies the types of resource or data type elements to which the extension can be applied. */
    context?: Metriport.fhir.StructureDefinitionContext[];
    /** A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true. */
    contextInvariant?: string[];
    /** The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type). References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models. */
    type?: Metriport.fhir.Uri;
    /** An absolute URI that is the base structure from which this type is derived, either by specialization or constraint. */
    baseDefinition?: Metriport.fhir.Canonical;
    /** How the type relates to the baseDefinition. */
    derivation?: Metriport.fhir.StructureDefinitionDerivation;
    /** A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition. */
    snapshot?: Metriport.fhir.StructureDefinitionSnapshot;
    /** A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies. */
    differential?: Metriport.fhir.StructureDefinitionDifferential;
}
