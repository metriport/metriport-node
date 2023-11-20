/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * An array of file items with one entry for each generated file. If no resources are returned from the kick-off request, the server SHOULD return an empty array.
 */
export interface BulkDataExportOutput {
    /** The FHIR resource type that is contained in the file. */
    type: Metriport.fhir.Code;
    /** The absolute path to the file. The format of the file SHOULD reflect that requested in the \_outputFormat parameter of the initial kick-off request. */
    url: Metriport.fhir.Uri;
}