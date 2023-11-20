/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const ListFacilitiesResponse: core.serialization.ObjectSchema<
    serializers.medical.ListFacilitiesResponse.Raw,
    Metriport.medical.ListFacilitiesResponse
> = core.serialization.object({
    facilities: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).medical.Facility)
    ),
});

export declare namespace ListFacilitiesResponse {
    interface Raw {
        facilities: serializers.medical.Facility.Raw[];
    }
}
