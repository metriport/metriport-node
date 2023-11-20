/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the purpose of this bundle - how it is intended to be used.
 */
export type BundleType =
    | "document"
    | "message"
    | "transaction"
    | "transaction-response"
    | "batch"
    | "batch-response"
    | "history"
    | "searchset"
    | "collection";

export const BundleType = {
    Document: "document",
    Message: "message",
    Transaction: "transaction",
    TransactionResponse: "transaction-response",
    Batch: "batch",
    BatchResponse: "batch-response",
    History: "history",
    Searchset: "searchset",
    Collection: "collection",
} as const;