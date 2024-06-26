/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export interface CoverageEligibilityResponseBenefit {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Classification of benefit being provided. */
    type: Metriport.fhir.CodeableConcept;
    /** The quantity of the benefit which is permitted under the coverage. */
    allowedUnsignedInt?: number;
    /** The quantity of the benefit which is permitted under the coverage. */
    allowedString?: string;
    /** The quantity of the benefit which is permitted under the coverage. */
    allowedMoney?: Metriport.fhir.Money;
    /** The quantity of the benefit which have been consumed to date. */
    usedUnsignedInt?: number;
    /** The quantity of the benefit which have been consumed to date. */
    usedString?: string;
    /** The quantity of the benefit which have been consumed to date. */
    usedMoney?: Metriport.fhir.Money;
}
