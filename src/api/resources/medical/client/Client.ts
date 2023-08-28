/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Document } from "../resources/document/client/Client";
import { Facility } from "../resources/facility/client/Client";
import { Fhir } from "../resources/fhir/client/Client";
import { Organization } from "../resources/organization/client/Client";
import { Patient } from "../resources/patient/client/Client";

export declare namespace Medical {
    interface Options {
        environment?: core.Supplier<environments.MetriportEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Medical {
    constructor(protected readonly _options: Medical.Options) {}

    protected _document: Document | undefined;

    public get document(): Document {
        return (this._document ??= new Document(this._options));
    }

    protected _facility: Facility | undefined;

    public get facility(): Facility {
        return (this._facility ??= new Facility(this._options));
    }

    protected _fhir: Fhir | undefined;

    public get fhir(): Fhir {
        return (this._fhir ??= new Fhir(this._options));
    }

    protected _organization: Organization | undefined;

    public get organization(): Organization {
        return (this._organization ??= new Organization(this._options));
    }

    protected _patient: Patient | undefined;

    public get patient(): Patient {
        return (this._patient ??= new Patient(this._options));
    }
}
