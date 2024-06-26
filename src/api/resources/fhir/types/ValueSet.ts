/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).
 */
export interface ValueSet extends Metriport.fhir.BaseResource {
    resourceType: "ValueSet";
    /** An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this value set is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the value set is stored on different servers. */
    url?: Metriport.fhir.Uri;
    /** A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance. */
    identifier?: Metriport.fhir.Identifier[];
    /** The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
    version?: string;
    /** A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** A short, descriptive, user-friendly title for the value set. */
    title?: string;
    /** The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state. */
    status?: Metriport.fhir.ValueSetStatus;
    /** A Boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The date (and optionally time) when the value set was created or revised (e.g. the 'content logical definition'). */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the value set. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** A free text natural language description of the value set from a consumer's perspective. The textual description specifies the span of meanings for concepts to be included within the Value Set Expansion, and also may specify the intended use and limitations of the Value Set. */
    description?: Metriport.fhir.Markdown;
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate value set instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the value set is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** If this is set to 'true', then no new versions of the content logical definition can be created. Note: Other metadata might still change. */
    immutable?: boolean;
    /** Explanation of why this value set is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set. */
    copyright?: Metriport.fhir.Markdown;
    /** A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD). */
    compose?: Metriport.fhir.ValueSetCompose;
    /** A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed. */
    expansion?: Metriport.fhir.ValueSetExpansion;
}
