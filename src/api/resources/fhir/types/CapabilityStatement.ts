/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatement extends Metriport.fhir.BaseResource {
    resourceType: "CapabilityStatement";
    /** An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers. */
    url?: Metriport.fhir.Uri;
    /** The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
    version?: string;
    /** A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** A short, descriptive, user-friendly title for the capability statement. */
    title?: string;
    /** The status of this capability statement. Enables tracking the life-cycle of the content. */
    status?: Metriport.fhir.CapabilityStatementStatus;
    /** A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The date (and optionally time) when the capability statement was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes. */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the capability statement. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP. */
    description?: Metriport.fhir.Markdown;
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate capability statement instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the capability statement is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** Explanation of why this capability statement is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement. */
    copyright?: Metriport.fhir.Markdown;
    /** The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase). */
    kind?: Metriport.fhir.CapabilityStatementKind;
    /** Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details. */
    instantiates?: Metriport.fhir.Canonical[];
    /** Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them. */
    imports?: Metriport.fhir.Canonical[];
    /** Software that is covered by this capability statement. It is used when the capability statement describes the capabilities of a particular software version, independent of an installation. */
    software?: Metriport.fhir.CapabilityStatementSoftware;
    /** Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
    implementation?: Metriport.fhir.CapabilityStatementImplementation;
    /** The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value. */
    fhirVersion?: Metriport.fhir.CapabilityStatementFhirVersion;
    /** A list of the formats supported by this implementation using their content types. */
    format?: Metriport.fhir.Code[];
    /** A list of the patch formats supported by this implementation using their content types. */
    patchFormat?: Metriport.fhir.Code[];
    /** A list of implementation guides that the server does (or should) support in their entirety. */
    implementationGuide?: Metriport.fhir.Canonical[];
    /** A definition of the restful capabilities of the solution, if any. */
    rest?: Metriport.fhir.CapabilityStatementRest[];
    /** A description of the messaging capabilities of the solution. */
    messaging?: Metriport.fhir.CapabilityStatementMessaging[];
    /** A document definition. */
    document?: Metriport.fhir.CapabilityStatementDocument[];
}
