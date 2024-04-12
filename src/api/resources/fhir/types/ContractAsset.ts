/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface ContractAsset {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Differentiates the kind of the asset . */
    scope?: Metriport.fhir.CodeableConcept;
    /** Target entity type about which the term may be concerned. */
    type?: Metriport.fhir.CodeableConcept[];
    /** Associated entities. */
    typeReference?: Metriport.fhir.Reference[];
    /** May be a subtype or part of an offered asset. */
    subtype?: Metriport.fhir.CodeableConcept[];
    /** Specifies the applicability of the term to an asset resource instance, and instances it refers to orinstances that refer to it, and/or are owned by the offeree. */
    relationship?: Metriport.fhir.Coding;
    /** Circumstance of the asset. */
    context?: Metriport.fhir.ContractContext[];
    /** Description of the quality and completeness of the asset that imay be a factor in its valuation. */
    condition?: string;
    /** Type of Asset availability for use or ownership. */
    periodType?: Metriport.fhir.CodeableConcept[];
    /** Asset relevant contractual time period. */
    period?: Metriport.fhir.Period[];
    /** Time period of asset use. */
    usePeriod?: Metriport.fhir.Period[];
    /** Clause or question text (Prose Object) concerning the asset in a linked form, such as a QuestionnaireResponse used in the formation of the contract. */
    text?: string;
    /** Id [identifier??] of the clause or question text about the asset in the referenced form or QuestionnaireResponse. */
    linkId?: string[];
    /** Response to assets. */
    answer?: Metriport.fhir.ContractAnswer[];
    /** Security labels that protects the asset. */
    securityLabelNumber?: Metriport.fhir.UnsignedInt[];
    /** Contract Valued Item List. */
    valuedItem?: Metriport.fhir.ContractValuedItem[];
}
