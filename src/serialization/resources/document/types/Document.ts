/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Metriport } from "@fern-api/metriport";
import * as core from "../../../../core";

export const Document: core.serialization.ObjectSchema<serializers.Document.Raw, Metriport.Document> =
    core.serialization.object({
        id: core.serialization.string(),
        fileName: core.serialization.string(),
        location: core.serialization.string(),
        description: core.serialization.string().optional(),
        status: core.serialization.string().optional(),
        indexed: core.serialization.date().optional(),
        mimeType: core.serialization.string().optional(),
        size: core.serialization.number().optional(),
        type: core.serialization.lazyObject(async () => (await import("../../..")).CodeableConcept).optional(),
    });

export declare namespace Document {
    interface Raw {
        id: string;
        fileName: string;
        location: string;
        description?: string | null;
        status?: string | null;
        indexed?: string | null;
        mimeType?: string | null;
        size?: number | null;
        type?: serializers.CodeableConcept.Raw | null;
    }
}
