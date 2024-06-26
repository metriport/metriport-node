/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CountPatientConsolidateData {
    /**
     * A comma separated, case sensitive list of resources to be returned.
     * If none are provided all resources will be included.
     */
    resources?: string;
    /**
     * The start date (inclusive) for which to filter returned resources -
     * formatted `YYYY-MM-DD` as per ISO 8601. If not provided,
     * no start date filter will be applied.
     */
    dateFrom?: string;
    /**
     * The end date (inclusive) for which to filter returned resources -
     * formatted `YYYY-MM-DD` as per ISO 8601. If not provided,
     * no end date filter will be applied.
     */
    dateTo?: string;
}
