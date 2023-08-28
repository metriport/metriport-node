/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const DriversLicense: core.serialization.ObjectSchema<
    serializers.medical.DriversLicense.Raw,
    Metriport.medical.DriversLicense
> = core.serialization.object({
    state: core.serialization.lazy(async () => (await import("../../../../..")).UsState),
    value: core.serialization.string(),
    assigner: core.serialization.string().optional(),
    period: core.serialization.lazyObject(async () => (await import("../../../../..")).medical.Period).optional(),
});

export declare namespace DriversLicense {
    interface Raw {
        state: serializers.UsState.Raw;
        value: string;
        assigner?: string | null;
        period?: serializers.medical.Period.Raw | null;
    }
}
