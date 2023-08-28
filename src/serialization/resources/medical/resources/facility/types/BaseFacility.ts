/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const BaseFacility: core.serialization.ObjectSchema<
    serializers.medical.BaseFacility.Raw,
    Metriport.medical.BaseFacility
> = core.serialization.object({
    name: core.serialization.string(),
    npi: core.serialization.string(),
    tin: core.serialization.string().optional(),
    active: core.serialization.boolean().optional(),
    address: core.serialization.lazyObject(async () => (await import("../../../../..")).Address),
});

export declare namespace BaseFacility {
    interface Raw {
        name: string;
        npi: string;
        tin?: string | null;
        active?: boolean | null;
        address: serializers.Address.Raw;
    }
}
