/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface ContractContext {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Asset context reference may include the creator, custodian, or owning Person or Organization (e.g., bank, repository), location held, e.g., building, jurisdiction. */
    reference?: Metriport.fhir.Reference;
    /** Coded representation of the context generally or of the Referenced entity, such as the asset holder type or location. */
    code?: Metriport.fhir.CodeableConcept[];
    /** Context description. */
    text?: string;
}
