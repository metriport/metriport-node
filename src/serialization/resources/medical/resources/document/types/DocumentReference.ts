/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const DocumentReference: core.serialization.ObjectSchema<
    serializers.medical.DocumentReference.Raw,
    Metriport.medical.DocumentReference
> = core.serialization.object({
    id: core.serialization.string(),
    fileName: core.serialization.string(),
    location: core.serialization.string(),
    description: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    indexed: core.serialization.date().optional(),
    mimeType: core.serialization.string().optional(),
    size: core.serialization.number().optional(),
    type: core.serialization
        .lazyObject(async () => (await import("../../../../..")).medical.CodeableConcept)
        .optional(),
});

export declare namespace DocumentReference {
    interface Raw {
        id: string;
        fileName: string;
        location: string;
        description?: string | null;
        status?: string | null;
        indexed?: string | null;
        mimeType?: string | null;
        size?: number | null;
        type?: serializers.medical.CodeableConcept.Raw | null;
    }
}
