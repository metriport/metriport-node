/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const Facility: core.serialization.ObjectSchema<serializers.medical.Facility.Raw, Metriport.medical.Facility> =
    core.serialization
        .object({
            id: core.serialization.string(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../../../..")).medical.BaseFacility));

export declare namespace Facility {
    interface Raw extends serializers.medical.BaseFacility.Raw {
        id: string;
    }
}
