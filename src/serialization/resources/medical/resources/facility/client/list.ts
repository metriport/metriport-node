/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.medical.facility.list.Response.Raw,
    Metriport.medical.Facility[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).medical.Facility)
);

export declare namespace Response {
    type Raw = serializers.medical.Facility.Raw[];
}