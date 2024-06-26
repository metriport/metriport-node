/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Configuration details for an instance of the Medplum agent application.
 */
export interface Agent {
    resourceType: "Agent";
    /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
    id?: Metriport.fhir.Id;
    /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    meta?: Metriport.fhir.Meta;
    /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
    implicitRules?: Metriport.fhir.Uri;
    /** The base language in which the resource is written. */
    language?: Metriport.fhir.Code;
    /** An identifier for this agent. */
    identifier?: Metriport.fhir.Identifier[];
    /** The human readable friendly name of the agent. */
    name: string;
    /** The status of the agent. */
    status: Metriport.fhir.AgentStatus;
    /** Optional device resource representing the device running the agent. */
    device?: Metriport.fhir.Reference;
    /** The settings for the agent. */
    setting?: Metriport.fhir.AgentSetting[];
    /** Details where to send notifications when resources are received that meet the criteria. */
    channel: Metriport.fhir.AgentChannel[];
}
