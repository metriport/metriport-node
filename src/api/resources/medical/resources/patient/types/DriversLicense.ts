/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../../../..";

export interface DriversLicense {
    /** The 2 letter state acronym where this ID was issued, for example `CA`. */
    state: Metriport.UsState;
    /** The ID number. */
    value: string;
    assigner?: string;
    period?: Metriport.fhir.Period;
}
