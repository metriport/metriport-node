/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * This resource contains context details for a SMART App Launch.
 */
export interface SmartAppLaunch {
    resourceType: "SmartAppLaunch";
    /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
    id?: Metriport.fhir.Id;
    /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
    meta?: Metriport.fhir.Meta;
    /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
    implicitRules?: Metriport.fhir.Uri;
    /** The base language in which the resource is written. */
    language?: Metriport.fhir.Code;
    /** Optional patient indicating that the app was launched in the patient context. */
    patient?: Metriport.fhir.Reference;
    /** Optional encounter indicating that the app was launched in the encounter context. */
    encounter?: Metriport.fhir.Reference;
}
