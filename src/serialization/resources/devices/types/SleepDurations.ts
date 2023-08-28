/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Metriport from "../../../../api";
import * as core from "../../../../core";

export const SleepDurations: core.serialization.ObjectSchema<
    serializers.devices.SleepDurations.Raw,
    Metriport.devices.SleepDurations
> = core.serialization.object({
    totalSeconds: core.serialization.property("total_seconds", core.serialization.number().optional()),
    awakeSeconds: core.serialization.property("awake_seconds", core.serialization.number().optional()),
    deepSeconds: core.serialization.property("deep_seconds", core.serialization.number().optional()),
    remSeconds: core.serialization.property("rem_seconds", core.serialization.number().optional()),
    lightSeconds: core.serialization.property("light_seconds", core.serialization.number().optional()),
    inBedSeconds: core.serialization.property("in_bed_seconds", core.serialization.number().optional()),
    timeToFallAsleepSeconds: core.serialization.property(
        "time_to_fall_asleep_seconds",
        core.serialization.number().optional()
    ),
    noDataSeconds: core.serialization.property("no_data_seconds", core.serialization.number().optional()),
});

export declare namespace SleepDurations {
    interface Raw {
        total_seconds?: number | null;
        awake_seconds?: number | null;
        deep_seconds?: number | null;
        rem_seconds?: number | null;
        light_seconds?: number | null;
        in_bed_seconds?: number | null;
        time_to_fall_asleep_seconds?: number | null;
        no_data_seconds?: number | null;
    }
}