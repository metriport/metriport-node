/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export interface TestScriptOperation {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Server interaction or operation type. */
    type?: Metriport.fhir.Coding;
    /** The type of the resource. See http://build.fhir.org/resourcelist.html. */
    resource?: Metriport.fhir.Code;
    /** The label would be used for tracking/logging purposes by test engines. */
    label?: string;
    /** The description would be used by test engines for tracking and reporting purposes. */
    description?: string;
    /** The mime-type to use for RESTful operation in the 'Accept' header. */
    accept?: Metriport.fhir.Code;
    /** The mime-type to use for RESTful operation in the 'Content-Type' header. */
    contentType?: Metriport.fhir.Code;
    /** The server where the request message is destined for. Must be one of the server numbers listed in TestScript.destination section. */
    destination?: number;
    /** Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths. */
    encodeRequestUrl?: boolean;
    /** The HTTP method the test engine MUST use for this operation regardless of any other operation details. */
    method?: Metriport.fhir.TestScriptOperationMethod;
    /** The server where the request message originates from. Must be one of the server numbers listed in TestScript.origin section. */
    origin?: number;
    /** Path plus parameters after [type]. Used to set parts of the request URL explicitly. */
    params?: string;
    /** Header elements would be used to set HTTP headers. */
    requestHeader?: Metriport.fhir.TestScriptRequestHeader[];
    /** The fixture id (maybe new) to map to the request. */
    requestId?: Metriport.fhir.Id;
    /** The fixture id (maybe new) to map to the response. */
    responseId?: Metriport.fhir.Id;
    /** The id of the fixture used as the body of a PUT or POST request. */
    sourceId?: Metriport.fhir.Id;
    /** Id of fixture used for extracting the [id], [type], and [vid] for GET requests. */
    targetId?: Metriport.fhir.Id;
    /** Complete request URL. */
    url?: string;
}
