/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Secure environment variable that can be used to store secrets for bots.
 */
export interface ProjectSecret {
    /** The secret name. */
    name: string;
    /** The secret value. */
    valueString?: string;
    /** The secret value. */
    valueBoolean?: boolean;
    /** The secret value. */
    valueDecimal?: Metriport.fhir.Decimal;
    /** The secret value. */
    valueInteger?: number;
}
