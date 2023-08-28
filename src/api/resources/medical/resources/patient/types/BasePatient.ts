/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../../../..";

export interface BasePatient {
    /**
     * The Patient's first name(s).
     * You may provide a comma/space delimited string to specify
     * multiple first and last names. For example, the following inputs
     * would be equivalent: "John,Jonathan" & "John Jonathan"
     *
     */
    firstName: string;
    /** The Patient's last name(s). */
    lastName: string;
    /** The Patient's date of birth (DOB), formatted `YYYY-MM-DD` as per ISO 8601. */
    dob: string;
    /** The Patient's gender at birth, can be one of `M` or `F`. */
    genderAtBirth: string;
    /**
     * An array of the Patient's personal IDs, such as a driver's license.
     * May be empty.
     *
     */
    personalIdentifiers?: Metriport.medical.PersonalIdentifier[];
    address?: Metriport.medical.Addresses;
    contact?: Metriport.medical.Contacts;
}