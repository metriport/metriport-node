/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.
 */
export type MessageHeaderResponseCode = "ok" | "transient-error" | "fatal-error";

export const MessageHeaderResponseCode = {
    Ok: "ok",
    TransientError: "transient-error",
    FatalError: "fatal-error",
} as const;
