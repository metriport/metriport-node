/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Metriport from "../../../../..";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Fhir {
    interface Options {
        environment?: core.Supplier<environments.MetriportEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Fhir {
    constructor(protected readonly _options: Fhir.Options) {}

    /**
     * Trigger a consolidated data query for the given patient
     *
     * @example
     *     await metriport.medical.fhir.startConsolidatedQuery("12345678", {
     *         body: undefined
     *     })
     */
    public async startConsolidatedQuery(
        id: string,
        request: Metriport.medical.GetPatientConsolidatedData = {},
        requestOptions?: Fhir.RequestOptions
    ): Promise<Metriport.medical.StartConsolidatedQueryResponse> {
        const { resources, dateFrom, dateTo, conversionType, body: _body } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (resources != null) {
            _queryParams["resources"] = resources;
        }

        if (dateFrom != null) {
            _queryParams["dateFrom"] = dateFrom;
        }

        if (dateTo != null) {
            _queryParams["dateTo"] = dateTo;
        }

        if (conversionType != null) {
            _queryParams["conversionType"] = conversionType;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                `/medical/v1/patient/${id}/consolidated/query`
            ),
            method: "POST",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@metriport/api-sdk",
                "X-Fern-SDK-Version": "0.0.343",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: _body != null ? _body : undefined,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Metriport.medical.StartConsolidatedQueryResponse;
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
     * Get the status of querying for patient's consolidated data.
     *
     * @example
     *     await metriport.medical.fhir.getConsolidatedQueryStatus("12345678")
     */
    public async getConsolidatedQueryStatus(
        id: string,
        requestOptions?: Fhir.RequestOptions
    ): Promise<Metriport.medical.GetConsolidatedQueryStatusResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                `/medical/v1/patient/${id}/consolidated/query`
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@metriport/api-sdk",
                "X-Fern-SDK-Version": "0.0.343",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Metriport.medical.GetConsolidatedQueryStatusResponse;
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
     * Create Patient's Consolidated Data with a FHIR Bundle.
     *
     * @example
     *     await metriport.medical.fhir.createPatientConsolidated("12345678", {
     *         resourceType: "Bundle",
     *         type: "collection",
     *         entry: [{
     *                 "resource": {
     *                     "resourceType": "Observation",
     *                     "code": {
     *                         "text": "Cancer"
     *                     },
     *                     "valueCodeableConcept": {
     *                         "text": "NEGATIVE"
     *                     },
     *                     "status": "final",
     *                     "category": [
     *                         {
     *                             "coding": [
     *                                 {
     *                                     "system": "http://terminology.hl7.org/CodeSystem/observation-category",
     *                                     "code": "laboratory"
     *                                 }
     *                             ]
     *                         }
     *                     ]
     *                 }
     *             }]
     *     })
     */
    public async createPatientConsolidated(
        id: string,
        request: Metriport.medical.ConsolidatedBundleUpload,
        requestOptions?: Fhir.RequestOptions
    ): Promise<Metriport.fhir.Bundle> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                `/medical/v1/patient/${id}/consolidated`
            ),
            method: "PUT",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@metriport/api-sdk",
                "X-Fern-SDK-Version": "0.0.343",
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Metriport.fhir.Bundle;
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
     * Get a count of a Patient's data per resource.
     */
    public async countPatientData(
        id: string,
        request: Metriport.medical.CountPatientConsolidateData = {},
        requestOptions?: Fhir.RequestOptions
    ): Promise<Metriport.medical.ConsolidatedCountResponse> {
        const { resources, dateFrom, dateTo } = request;
        const _queryParams: Record<string, string | string[]> = {};
        if (resources != null) {
            _queryParams["resources"] = resources;
        }

        if (dateFrom != null) {
            _queryParams["dateFrom"] = dateFrom;
        }

        if (dateTo != null) {
            _queryParams["dateTo"] = dateTo;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                `/medical/v1/patient/${id}/consolidated/count`
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@metriport/api-sdk",
                "X-Fern-SDK-Version": "0.0.343",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Metriport.medical.ConsolidatedCountResponse;
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
