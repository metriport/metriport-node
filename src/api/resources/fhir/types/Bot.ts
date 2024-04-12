/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Bot account for automated actions.
 */
export interface Bot {
    resourceType: "Bot";
    /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
    id?: Metriport.fhir.Id;
    /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    meta?: Metriport.fhir.Meta;
    /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
    implicitRules?: Metriport.fhir.Uri;
    /** The base language in which the resource is written. */
    language?: Metriport.fhir.Code;
    /** An identifier for this bot. */
    identifier?: Metriport.fhir.Identifier[];
    /** A name associated with the Bot. */
    name?: string;
    /** A summary, characterization or explanation of the Bot. */
    description?: string;
    /** The identifier of the bot runtime environment (i.e., vmcontext, awslambda, etc). */
    runtimeVersion?: Metriport.fhir.BotRuntimeVersion;
    /** Image of the bot. */
    photo?: Metriport.fhir.Attachment;
    /** A schedule for the bot to be executed. */
    cronTiming?: Metriport.fhir.Timing;
    /** A schedule for the bot to be executed. */
    cronString?: string;
    /** A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure"). */
    category?: Metriport.fhir.CodeableConcept[];
    /** Optional flag to indicate that the bot should be run as the user. */
    runAsUser?: boolean;
    /** Criteria for creating an AuditEvent as a result of the bot invocation. Possible values are 'always', 'never', 'on-error', or 'on-output'. Default value is 'always'. */
    auditEventTrigger?: Metriport.fhir.BotAuditEventTrigger;
    /** The destination system in which the AuditEvent is to be sent. Possible values are 'log' or 'resource'. Default value is 'resource'. */
    auditEventDestination?: Metriport.fhir.BotAuditEventDestinationItem[];
    /** Bot logic in original source code form written by developers. */
    sourceCode?: Metriport.fhir.Attachment;
    /** Bot logic in executable form as a result of compiling and bundling source code. */
    executableCode?: Metriport.fhir.Attachment;
    /** DEPRECATED Bot logic script. Use Bot.sourceCode or Bot.executableCode instead. */
    code?: string;
}
