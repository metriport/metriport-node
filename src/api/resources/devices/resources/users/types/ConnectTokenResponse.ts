/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ConnectTokenResponse {
    /**
     * The temporary token to allow the specified user to access
     * the Metriport Connect widget.
     *
     * The token will expire 10 minutes after it is created, and
     * can be reused for the duration of the session.
     *
     */
    token: string;
}
