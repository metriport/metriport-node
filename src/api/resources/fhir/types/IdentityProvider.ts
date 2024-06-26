/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * External Identity Provider (IdP) configuration details.
 */
export interface IdentityProvider {
    /** Remote URL for the external Identity Provider authorize endpoint. */
    authorizeUrl: string;
    /** Remote URL for the external Identity Provider token endpoint. */
    tokenUrl: string;
    /** Remote URL for the external Identity Provider userinfo endpoint. */
    userInfoUrl: string;
    /** External Identity Provider client ID. */
    clientId: string;
    /** External Identity Provider client secret. */
    clientSecret: string;
    /** Optional flag to use the subject field instead of the email field. */
    useSubject?: boolean;
}
