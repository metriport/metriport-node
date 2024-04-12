/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 */
export interface EvidenceVariableCharacteristic {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user. */
    description?: string;
    /** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
    definitionReference?: Metriport.fhir.Reference;
    /** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
    definitionCanonical?: string;
    /** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
    definitionCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
    definitionExpression?: Metriport.fhir.Expression;
    /** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
    definitionDataRequirement?: Metriport.fhir.DataRequirement;
    /** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
    definitionTriggerDefinition?: Metriport.fhir.TriggerDefinition;
    /** Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings. */
    usageContext?: Metriport.fhir.UsageContext[];
    /** When true, members with this characteristic are excluded from the element. */
    exclude?: boolean;
    /** Indicates what effective period the study covers. */
    participantEffectiveDateTime?: string;
    /** Indicates what effective period the study covers. */
    participantEffectivePeriod?: Metriport.fhir.Period;
    /** Indicates what effective period the study covers. */
    participantEffectiveDuration?: Metriport.fhir.Duration;
    /** Indicates what effective period the study covers. */
    participantEffectiveTiming?: Metriport.fhir.Timing;
    /** Indicates duration from the participant's study entry. */
    timeFromStart?: Metriport.fhir.Duration;
    /** Indicates how elements are aggregated within the study effective period. */
    groupMeasure?: Metriport.fhir.EvidenceVariableCharacteristicGroupMeasure;
}
