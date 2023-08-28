/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Metriport from "../../../../../../api";
import * as core from "../../../../../../core";

export const ResourcesSearchableBySubject: core.serialization.Schema<
    serializers.medical.ResourcesSearchableBySubject.Raw,
    Metriport.medical.ResourcesSearchableBySubject
> = core.serialization.enum_(["AdverseEvent", "Task"]);

export declare namespace ResourcesSearchableBySubject {
    type Raw = "AdverseEvent" | "Task";
}