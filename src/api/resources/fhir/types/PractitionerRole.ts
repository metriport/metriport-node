/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export interface PractitionerRole extends Metriport.fhir.BaseResource {
    resourceType: "PractitionerRole";
    /** Business Identifiers that are specific to a role/location. */
    identifier?: Metriport.fhir.Identifier[];
    /** Whether this practitioner role record is in active use. */
    active?: boolean;
    /** The period during which the person is authorized to act as a practitioner in these role(s) for the organization. */
    period?: Metriport.fhir.Period;
    /** Practitioner that is able to provide the defined services for the organization. */
    practitioner?: Metriport.fhir.Reference;
    /** The organization where the Practitioner performs the roles associated. */
    organization?: Metriport.fhir.Reference;
    /** Roles which this practitioner is authorized to perform for the organization. */
    code?: Metriport.fhir.CodeableConcept[];
    /** Specific specialty of the practitioner. */
    specialty?: Metriport.fhir.CodeableConcept[];
    /** The location(s) at which this practitioner provides care. */
    location?: Metriport.fhir.Reference[];
    /** The list of healthcare services that this worker provides for this role's Organization/Location(s). */
    healthcareService?: Metriport.fhir.Reference[];
    /** Contact details that are specific to the role/location/service. */
    telecom?: Metriport.fhir.ContactPoint[];
    /** A collection of times the practitioner is available or performing this role at the location and/or healthcareservice. */
    availableTime?: Metriport.fhir.PractitionerRoleAvailableTime[];
    /** The practitioner is not available or performing this role during this period of time due to the provided reason. */
    notAvailable?: Metriport.fhir.PractitionerRoleNotAvailable[];
    /** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times. */
    availabilityExceptions?: string;
    /** Technical endpoints providing access to services operated for the practitioner with this role. */
    endpoint?: Metriport.fhir.Reference[];
}