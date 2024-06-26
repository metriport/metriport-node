/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroup extends Metriport.fhir.BaseResource {
    resourceType: "RequestGroup";
    /** Allows a service to provide a unique, business identifier for the request. */
    identifier?: Metriport.fhir.Identifier[];
    /** A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request. */
    instantiatesCanonical?: Metriport.fhir.Canonical[];
    /** A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request. */
    instantiatesUri?: Metriport.fhir.Uri[];
    /** A plan, proposal or order that is fulfilled in whole or in part by this request. */
    basedOn?: Metriport.fhir.Reference[];
    /** Completed or terminated request(s) whose function is taken by this new request. */
    replaces?: Metriport.fhir.Reference[];
    /** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form. */
    groupIdentifier?: Metriport.fhir.Identifier;
    /** The current state of the request. For request groups, the status reflects the status of all the requests in the group. */
    status?: Metriport.fhir.Code;
    /** Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain. */
    intent?: Metriport.fhir.Code;
    /** Indicates how quickly the request should be addressed with respect to other requests. */
    priority?: Metriport.fhir.Code;
    /** A code that identifies what the overall request group is. */
    code?: Metriport.fhir.CodeableConcept;
    /** The subject for which the request group was created. */
    subject?: Metriport.fhir.Reference;
    /** Describes the context of the request group, if any. */
    encounter?: Metriport.fhir.Reference;
    /** Indicates when the request group was created. */
    authoredOn?: Metriport.fhir.DateTime;
    /** Provides a reference to the author of the request group. */
    author?: Metriport.fhir.Reference;
    /** Describes the reason for the request group in coded or textual form. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Indicates another resource whose existence justifies this request group. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Provides a mechanism to communicate additional information about the response. */
    note?: Metriport.fhir.Annotation[];
    /** The actions, if any, produced by the evaluation of the artifact. */
    action?: Metriport.fhir.RequestGroupAction[];
}
