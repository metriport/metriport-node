/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.medical.patient.list.Response.Raw,
    Metriport.medical.Patient[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).medical.Patient)
);

export declare namespace Response {
    type Raw = serializers.medical.Patient.Raw[];
}