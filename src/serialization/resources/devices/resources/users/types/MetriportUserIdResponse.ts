/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const MetriportUserIdResponse: core.serialization.ObjectSchema<
    serializers.devices.MetriportUserIdResponse.Raw,
    Metriport.devices.MetriportUserIdResponse
> = core.serialization.object({
    userId: core.serialization.string(),
});

export declare namespace MetriportUserIdResponse {
    interface Raw {
        userId: string;
    }
}