/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
export interface Identifier {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** The purpose of this identifier. */
    use?: Metriport.fhir.IdentifierUse;
    /** A coded type for the identifier that can be used to determine which identifier to use for a specific purpose. */
    type?: Metriport.fhir.CodeableConcept;
    /** Establishes the namespace for the value - that is, a URL that describes a set values that are unique. */
    system?: Metriport.fhir.Uri;
    /** The portion of the identifier typically relevant to the user and which is unique within the context of the system. */
    value?: string;
    /** Time period during which identifier is/was valid for use. */
    period?: Metriport.fhir.Period;
    /** Organization that issued/manages the identifier. */
    assigner?: Metriport.fhir.Reference;
}
