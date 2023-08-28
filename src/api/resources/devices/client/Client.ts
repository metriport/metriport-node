/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Metriport from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import { Connect } from "../resources/connect/client/Client";
import { Users } from "../resources/users/client/Client";

export declare namespace Devices {
    interface Options {
        environment?: core.Supplier<environments.MetriportEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Devices {
    constructor(protected readonly _options: Devices.Options) {}

    /**
     * Returns activity data from all of the specified users' connected providers.
     */
    public async getActivityData(
        request: Metriport.devices.GetActivityDataRequest,
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.Activity[]> {
        const { userId, date, timezoneId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userId", userId);
        _queryParams.append("date", date);
        _queryParams.append("timezoneId", timezoneId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "activity"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getActivityData.Response.parseOrThrow(_response.body, {
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
     * Returns biometrics data from all of the specified users' connected providers.
     */
    public async getBiometricsData(
        request: Metriport.devices.GetBiometricsDataRequest,
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.Biometrics[]> {
        const { userId, date, timezoneId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userId", userId);
        _queryParams.append("date", date);
        _queryParams.append("timezoneId", timezoneId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "biometrics"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getBiometricsData.Response.parseOrThrow(_response.body, {
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
     * Returns body data from all of the specified users' connected providers.
     */
    public async getBodyData(
        request: Metriport.devices.GetBodyDataRequest,
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.Body[]> {
        const { userId, date, timezoneId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userId", userId);
        _queryParams.append("date", date);
        _queryParams.append("timezoneId", timezoneId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "body"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getBodyData.Response.parseOrThrow(_response.body, {
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
     * Returns nutrition data from all of the specified users' connected providers.
     */
    public async getNutritionData(
        request: Metriport.devices.GetNutritionDataRequest,
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.Nutrition[]> {
        const { userId, date, timezoneId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userId", userId);
        _queryParams.append("date", date);
        _queryParams.append("timezoneId", timezoneId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "nutrition"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getNutritionData.Response.parseOrThrow(_response.body, {
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
     * Returns sleep data from all of the specified users' connected providers.
     */
    public async getSleepData(
        request: Metriport.devices.GetSleepDataRequest,
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.Sleep[]> {
        const { userId, date, timezoneId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userId", userId);
        _queryParams.append("date", date);
        _queryParams.append("timezoneId", timezoneId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "sleep"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getSleepData.Response.parseOrThrow(_response.body, {
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
     * Returns user info from all of the specified users' connected providers.
     */
    public async getUserData(
        request: Metriport.devices.GetUserDataRequest,
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.User[]> {
        const { userId, date, timezoneId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("userId", userId);
        _queryParams.append("date", date);
        _queryParams.append("timezoneId", timezoneId);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "user"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getUserData.Response.parseOrThrow(_response.body, {
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
     * Returns a list of users with their IDs and connected providers.
     */
    public async getConnectedUsers(
        requestOptions?: Devices.RequestOptions
    ): Promise<Metriport.devices.ConnectedUserInfo[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MetriportEnvironment.Production,
                "user"
            ),
            method: "GET",
            headers: {
                "X-API-Key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/metriport",
                "X-Fern-SDK-Version": "0.1.3",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.devices.getConnectedUsers.Response.parseOrThrow(_response.body, {
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

    protected _connect: Connect | undefined;

    public get connect(): Connect {
        return (this._connect ??= new Connect(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }
}
