/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of password change request (invite or reset).
 */
export type PasswordChangeRequestType = "invite" | "reset";

export const PasswordChangeRequestType = {
    Invite: "invite",
    Reset: "reset",
} as const;