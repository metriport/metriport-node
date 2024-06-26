/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export interface MessageDefinition extends Metriport.fhir.BaseResource {
    resourceType: "MessageDefinition";
    /** The business identifier that is used to reference the MessageDefinition and _is_ expected to be consistent from server to server. */
    url?: Metriport.fhir.Uri;
    /** A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
    identifier?: Metriport.fhir.Identifier[];
    /** The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
    version?: string;
    /** A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** A short, descriptive, user-friendly title for the message definition. */
    title?: string;
    /** A MessageDefinition that is superseded by this definition. */
    replaces?: Metriport.fhir.Canonical[];
    /** The status of this message definition. Enables tracking the life-cycle of the content. */
    status?: Metriport.fhir.MessageDefinitionStatus;
    /** A Boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The date (and optionally time) when the message definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes. */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the message definition. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** A free text natural language description of the message definition from a consumer's perspective. */
    description?: Metriport.fhir.Markdown;
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate message definition instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the message definition is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** Explanation of why this message definition is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition. */
    copyright?: Metriport.fhir.Markdown;
    /** The MessageDefinition that is the basis for the contents of this resource. */
    base?: Metriport.fhir.Canonical;
    /** Identifies a protocol or workflow that this MessageDefinition represents a step in. */
    parent?: Metriport.fhir.Canonical[];
    /** Event code or link to the EventDefinition. */
    eventCoding?: Metriport.fhir.Coding;
    /** Event code or link to the EventDefinition. */
    eventUri?: string;
    /** The impact of the content of the message. */
    category?: Metriport.fhir.MessageDefinitionCategory;
    /** Identifies the resource (or resources) that are being addressed by the event. For example, the Encounter for an admit message or two Account records for a merge. */
    focus?: Metriport.fhir.MessageDefinitionFocus[];
    /** Declare at a message definition level whether a response is required or only upon error or success, or never. */
    responseRequired?: Metriport.fhir.MessageDefinitionResponseRequired;
    /** Indicates what types of messages may be sent as an application-level response to this message. */
    allowedResponse?: Metriport.fhir.MessageDefinitionAllowedResponse[];
    /** Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [[[GraphDefinition]]] that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources. */
    graph?: Metriport.fhir.Canonical[];
}
