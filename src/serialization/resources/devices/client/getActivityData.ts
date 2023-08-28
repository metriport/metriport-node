/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Metriport from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.devices.getActivityData.Response.Raw,
    Metriport.devices.Activity[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).devices.Activity));

export declare namespace Response {
    type Raw = serializers.devices.Activity.Raw[];
}
