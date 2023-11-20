/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The settings for the agent.
 */
export interface AgentSetting {
    /** The setting name. */
    name: string;
    /** The setting value. */
    valueString?: string;
    /** The setting value. */
    valueBoolean?: boolean;
    /** The setting value. */
    valueDecimal?: Metriport.fhir.Decimal;
    /** The setting value. */
    valueInteger?: number;
}