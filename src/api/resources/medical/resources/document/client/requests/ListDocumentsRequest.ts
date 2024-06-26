/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ListDocumentsRequest {
    /**
     * The ID of the Patient for which to list available Documents.
     */
    patientId: string;
    /**
     * The start date (inclusive) for which to filter returned documents - formatted `YYYY-MM-DD` as per ISO 8601. If not provided, no start date filter will be applied.
     */
    dateFrom?: string;
    /**
     * The end date (inclusive) for which to filter returned documents - formatted `YYYY-MM-DD` as per ISO 8601. If not provided, no end date filter will be applied.
     */
    dateTo?: string;
    /**
     * Value to search within the document reference and the actual contents of the document (minimum 3 chars).
     */
    content?: string;
}
