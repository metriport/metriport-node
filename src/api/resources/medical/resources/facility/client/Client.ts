/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Metriport from "../../../../..";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Facility {
    interface Options {
        environment?: core.Supplier<environments.MetriportEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Facility {
    constructor(protected readonly _options: Facility.Options) {}

    /**
     * Creates a Facility in Metriport where your patients receive care.
     *
     * @example
     *     await metriport.medical.facility.create({
     *         name: "Care Facility, LLC",
     *         npi: "1234567891",
     *         address: {
     *             addressLine1: "2261 Market Street",
     *             addressLine2: "#4818",
     *             city: "San Francisco",
     *             state: Metriport.UsState.Ca,
     *             zip: "94114",
     *             country: "USA"
     *         },
     *         tin: "12-3456789",
     *         active: true
     *     })
     */
    public async create(
        request: Metriport.medical.BaseFacility,
        requestOptions?: Facility.RequestOptions
    ): Promise<Metriport.medical.Facility> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "/medical/v1/facility"
            ),
            method: "POST",
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
            return _response.body as Metriport.medical.Facility;
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
     * Get a Facility in Metriport where your patients receive care.
     *
     * @example
     *     await metriport.medical.facility.get("2.16.840.1.113883.3.666.123")
     */
    public async get(id: string, requestOptions?: Facility.RequestOptions): Promise<Metriport.medical.Facility> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                `/medical/v1/facility/${id}`
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
            return _response.body as Metriport.medical.Facility;
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
     * Updates a Facility in Metriport where your patients receive care.
     *
     * @example
     *     await metriport.medical.facility.update("2.16.840.1.113883.3.666.123", {
     *         name: "Care Facility, LLC",
     *         npi: "1234567891",
     *         address: {
     *             addressLine1: "2261 Market Street",
     *             addressLine2: "#4818",
     *             city: "San Francisco",
     *             state: Metriport.UsState.Ca,
     *             zip: "94114",
     *             country: "USA"
     *         },
     *         tin: "12-3456789",
     *         active: true
     *     })
     */
    public async update(
        id: string,
        request: Metriport.medical.BaseFacility,
        requestOptions?: Facility.RequestOptions
    ): Promise<Metriport.medical.Facility> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                `/medical/v1/facility/${id}`
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
            return _response.body as Metriport.medical.Facility;
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
     * Lists all of your Facilities.
     *
     * @example
     *     await metriport.medical.facility.list()
     */
    public async list(requestOptions?: Facility.RequestOptions): Promise<Metriport.medical.ListFacilitiesResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "/medical/v1/facility"
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
            return _response.body as Metriport.medical.ListFacilitiesResponse;
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
