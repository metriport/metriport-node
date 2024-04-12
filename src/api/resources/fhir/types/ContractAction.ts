/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.
 */
export interface ContractAction {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** True if the term prohibits the action. */
    doNotPerform?: boolean;
    /** Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term. */
    type: Metriport.fhir.CodeableConcept;
    /** Entity of the action. */
    subject?: Metriport.fhir.ContractSubject[];
    /** Reason or purpose for the action stipulated by this Contract Provision. */
    intent: Metriport.fhir.CodeableConcept;
    /** Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse. */
    linkId?: string[];
    /** Current state of the term action. */
    status: Metriport.fhir.CodeableConcept;
    /** Encounter or Episode with primary association to specified term activity. */
    context?: Metriport.fhir.Reference;
    /** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
    contextLinkId?: string[];
    /** When action happens. */
    occurrenceDateTime?: string;
    /** When action happens. */
    occurrencePeriod?: Metriport.fhir.Period;
    /** When action happens. */
    occurrenceTiming?: Metriport.fhir.Timing;
    /** Who or what initiated the action and has responsibility for its activation. */
    requester?: Metriport.fhir.Reference[];
    /** Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse. */
    requesterLinkId?: string[];
    /** The type of individual that is desired or required to perform or not perform the action. */
    performerType?: Metriport.fhir.CodeableConcept[];
    /** The type of role or competency of an individual desired or required to perform or not perform the action. */
    performerRole?: Metriport.fhir.CodeableConcept;
    /** Indicates who or what is being asked to perform (or not perform) the ction. */
    performer?: Metriport.fhir.Reference;
    /** Id [identifier??] of the clause or question text related to the reason type or reference of this action in the referenced form or QuestionnaireResponse. */
    performerLinkId?: string[];
    /** Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Indicates another resource whose existence justifies permitting or not permitting this action. */
    reasonReference?: Metriport.fhir.Reference[];
    /** Describes why the action is to be performed or not performed in textual form. */
    reason?: string[];
    /** Id [identifier??] of the clause or question text related to the reason type or reference of this action in the referenced form or QuestionnaireResponse. */
    reasonLinkId?: string[];
    /** Comments made about the term action made by the requester, performer, subject or other participants. */
    note?: Metriport.fhir.Annotation[];
    /** Security labels that protects the action. */
    securityLabelNumber?: Metriport.fhir.UnsignedInt[];
}
