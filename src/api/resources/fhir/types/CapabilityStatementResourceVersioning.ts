/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
 */
export type CapabilityStatementResourceVersioning = "no-version" | "versioned" | "versioned-update";

export const CapabilityStatementResourceVersioning = {
    NoVersion: "no-version",
    Versioned: "versioned",
    VersionedUpdate: "versioned-update",
} as const;
