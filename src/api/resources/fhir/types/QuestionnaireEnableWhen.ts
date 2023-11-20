/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export interface QuestionnaireEnableWhen {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** The linkId for the question whose answer (or lack of answer) governs whether this item is enabled. */
    question?: string;
    /** Specifies the criteria by which the question is enabled. */
    operator?: Metriport.fhir.QuestionnaireEnableWhenOperator;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerBoolean?: boolean;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerDecimal?: number;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerInteger?: number;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerDate?: string;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerDateTime?: string;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerTime?: string;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerString?: string;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerCoding?: Metriport.fhir.Coding;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerQuantity?: Metriport.fhir.Quantity;
    /** A value that the referenced question is tested using the specified operator in order for the item to be enabled. */
    answerReference?: Metriport.fhir.Reference;
}