/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export interface QuestionnaireResponse extends Metriport.fhir.BaseResource {
    resourceType: "QuestionnaireResponse";
    /** A business identifier assigned to a particular completed (or partially completed) questionnaire. */
    identifier?: Metriport.fhir.Identifier;
    /** The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse. For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression. */
    basedOn?: Metriport.fhir.Reference[];
    /** A procedure or observation that this questionnaire was performed as part of the execution of. For example, the surgery a checklist was executed as part of. */
    partOf?: Metriport.fhir.Reference[];
    /** The Questionnaire that defines and organizes the questions for which answers are being provided. */
    questionnaire?: Metriport.fhir.Canonical;
    /** The position of the questionnaire response within its overall lifecycle. */
    status?: Metriport.fhir.QuestionnaireResponseStatus;
    /** The subject of the questionnaire response. This could be a patient, organization, practitioner, device, etc. This is who/what the answers apply to, but is not necessarily the source of information. */
    subject?: Metriport.fhir.Reference;
    /** The Encounter during which this questionnaire response was created or to which the creation of this record is tightly associated. */
    encounter?: Metriport.fhir.Reference;
    /** The date and/or time that this set of answers were last changed. */
    authored?: Metriport.fhir.DateTime;
    /** Person who received the answers to the questions in the QuestionnaireResponse and recorded them in the system. */
    author?: Metriport.fhir.Reference;
    /** The person who answered the questions about the subject. */
    source?: Metriport.fhir.Reference;
    /** A group or question item from the original questionnaire for which answers are provided. */
    item?: Metriport.fhir.QuestionnaireResponseItem[];
}
