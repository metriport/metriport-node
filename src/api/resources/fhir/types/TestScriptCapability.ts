/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.
 */
export interface TestScriptCapability {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Whether or not the test execution will require the given capabilities of the server in order for this test script to execute. */
    required?: boolean;
    /** Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute. */
    validated?: boolean;
    /** Description of the capabilities that this test script is requiring the server to support. */
    description?: string;
    /** Which origin server these requirements apply to. */
    origin?: number[];
    /** Which server these requirements apply to. */
    destination?: number;
    /** Links to the FHIR specification that describes this interaction and the resources involved in more detail. */
    link?: Metriport.fhir.Uri[];
    /** Minimum capabilities required of server for test script to execute successfully. If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped. */
    capabilities: Metriport.fhir.Canonical;
}
