/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Metriport from "../../../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Document {
    interface Options {
        environment?: core.Supplier<environments.MetriportEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Document {
    constructor(protected readonly _options: Document.Options) {}

    /**
     * Triggers a document query for the specified patient across HIEs.
     *
     * When executed, this endpoint triggers an asynchronous document query across HIEs.
     * This is a two step process where the documents will first be downloaded from
     * the respective HIE and, if they are C-CDA/XML, then converted to FHIR.
     *
     * Each process (download, conversion) will contain its own `total` and `status`
     * as well as the count for `successful` operations and `errors`.
     *
     * When the asynchronous document query finishes, it stores new/updated document
     * references for future requests and updates the status of download to `completed`.
     * Meanwhile, in the background, files will be converted and the convert count will be
     * incremented. Once all documents have been converted it too will be marked as `completed`.
     *
     * If there's no document to be converted, the total will be set to zero and
     * the status to `completed`.
     *
     */
    public async startQuery(
        request: Metriport.medical.StartDocumentQueryRequest,
        requestOptions?: Document.RequestOptions
    ): Promise<Metriport.medical.DocumentQuery> {
        const { patientId, facilityId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("patientId", patientId);
        _queryParams.append("facilityId", facilityId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "/medical/v1/document/query"
            ),
            method: "POST",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.medical.DocumentQuery.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportTimeoutError();
            case "unknown":
                throw new errors.MetriportError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns the document query status for the specified patient.
     * Can be used in to check the progress when the final status
     * of the document query is taking longer than expected.
     * See more on [Start Document Query](/medical-api/api-reference/document/start-document-query).
     *
     */
    public async getQueryStatus(
        request: Metriport.medical.GetDocumentQueryStatusRequest,
        requestOptions?: Document.RequestOptions
    ): Promise<Metriport.medical.DocumentQuery> {
        const { patientId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("patientId", patientId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "/medical/v1/document/query"
            ),
            method: "POST",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.medical.DocumentQuery.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportTimeoutError();
            case "unknown":
                throw new errors.MetriportError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Lists all Documents that can be retrieved for a Patient.
     * This endpoint returns the document references available
     * at Metriport which are associated with the given Patient.
     *
     * To start a new document query, see the [Start Document Query endpoint](/api-reference/medical/document/start-query).
     *
     */
    public async list(
        request: Metriport.medical.ListDocumentsRequest,
        requestOptions?: Document.RequestOptions
    ): Promise<Metriport.medical.ListDocumentsResponse> {
        const { patientId, facilityId, dateFrom, dateTo } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("patientId", patientId);
        _queryParams.append("facilityId", facilityId);
        if (dateFrom != null) {
            _queryParams.append("dateFrom", dateFrom);
        }

        if (dateTo != null) {
            _queryParams.append("dateTo", dateTo);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "/medical/v1/document"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.medical.ListDocumentsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportTimeoutError();
            case "unknown":
                throw new errors.MetriportError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets a presigned URL for downloading the specified document.
     * This endpoint returns a URL which you can use to download
     * the specified document and/or convert using the file name
     * provided from the [List Documents](/api-reference/medical/document/list) endpoint.
     *
     */
    public async getUrl(
        request: Metriport.medical.GetDocumentUrlRequest,
        requestOptions?: Document.RequestOptions
    ): Promise<Metriport.medical.DocumentUrl> {
        const { fileName, conversionType } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("fileName", fileName);
        if (conversionType != null) {
            _queryParams.append("conversionType", conversionType);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "/medical/v1/document/downloadUrl"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.medical.DocumentUrl.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MetriportError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MetriportError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MetriportTimeoutError();
            case "unknown":
                throw new errors.MetriportError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
