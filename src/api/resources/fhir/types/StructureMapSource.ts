/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMapSource {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Type or variable this rule applies to. */
    context?: Metriport.fhir.Id;
    /** Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content. */
    min?: number;
    /** Specified maximum cardinality for the element - a number or a "_". This is optional; if present, it acts an implicit check on the input content (_ just serves as documentation; it's the default value). */
    max?: string;
    /** Specified type for the element. This works as a condition on the mapping - use for polymorphic elements. */
    type?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueBase64Binary?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueBoolean?: boolean;
    /** A value to use if there is no existing value in the source object. */
    defaultValueCanonical?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueCode?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDate?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDateTime?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDecimal?: number;
    /** A value to use if there is no existing value in the source object. */
    defaultValueId?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueInstant?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueInteger?: number;
    /** A value to use if there is no existing value in the source object. */
    defaultValueMarkdown?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueOid?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValuePositiveInt?: number;
    /** A value to use if there is no existing value in the source object. */
    defaultValueString?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueTime?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueUnsignedInt?: number;
    /** A value to use if there is no existing value in the source object. */
    defaultValueUri?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueUrl?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueUuid?: string;
    /** A value to use if there is no existing value in the source object. */
    defaultValueAddress?: Metriport.fhir.Address;
    /** A value to use if there is no existing value in the source object. */
    defaultValueAge?: Metriport.fhir.Age;
    /** A value to use if there is no existing value in the source object. */
    defaultValueAnnotation?: Metriport.fhir.Annotation;
    /** A value to use if there is no existing value in the source object. */
    defaultValueAttachment?: Metriport.fhir.Attachment;
    /** A value to use if there is no existing value in the source object. */
    defaultValueCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** A value to use if there is no existing value in the source object. */
    defaultValueCoding?: Metriport.fhir.Coding;
    /** A value to use if there is no existing value in the source object. */
    defaultValueContactPoint?: Metriport.fhir.ContactPoint;
    /** A value to use if there is no existing value in the source object. */
    defaultValueCount?: Metriport.fhir.Count;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDistance?: Metriport.fhir.Distance;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDuration?: Metriport.fhir.Duration;
    /** A value to use if there is no existing value in the source object. */
    defaultValueHumanName?: Metriport.fhir.HumanName;
    /** A value to use if there is no existing value in the source object. */
    defaultValueIdentifier?: Metriport.fhir.Identifier;
    /** A value to use if there is no existing value in the source object. */
    defaultValueMoney?: Metriport.fhir.Money;
    /** A value to use if there is no existing value in the source object. */
    defaultValuePeriod?: Metriport.fhir.Period;
    /** A value to use if there is no existing value in the source object. */
    defaultValueQuantity?: Metriport.fhir.Quantity;
    /** A value to use if there is no existing value in the source object. */
    defaultValueRange?: Metriport.fhir.Range;
    /** A value to use if there is no existing value in the source object. */
    defaultValueRatio?: Metriport.fhir.Ratio;
    /** A value to use if there is no existing value in the source object. */
    defaultValueReference?: Metriport.fhir.Reference;
    /** A value to use if there is no existing value in the source object. */
    defaultValueSampledData?: Metriport.fhir.SampledData;
    /** A value to use if there is no existing value in the source object. */
    defaultValueSignature?: Metriport.fhir.Signature;
    /** A value to use if there is no existing value in the source object. */
    defaultValueTiming?: Metriport.fhir.Timing;
    /** A value to use if there is no existing value in the source object. */
    defaultValueContactDetail?: Metriport.fhir.ContactDetail;
    /** A value to use if there is no existing value in the source object. */
    defaultValueContributor?: Metriport.fhir.Contributor;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDataRequirement?: Metriport.fhir.DataRequirement;
    /** A value to use if there is no existing value in the source object. */
    defaultValueExpression?: Metriport.fhir.Expression;
    /** A value to use if there is no existing value in the source object. */
    defaultValueParameterDefinition?: Metriport.fhir.ParameterDefinition;
    /** A value to use if there is no existing value in the source object. */
    defaultValueRelatedArtifact?: Metriport.fhir.RelatedArtifact;
    /** A value to use if there is no existing value in the source object. */
    defaultValueTriggerDefinition?: Metriport.fhir.TriggerDefinition;
    /** A value to use if there is no existing value in the source object. */
    defaultValueUsageContext?: Metriport.fhir.UsageContext;
    /** A value to use if there is no existing value in the source object. */
    defaultValueDosage?: Metriport.fhir.Dosage;
    /** A value to use if there is no existing value in the source object. */
    defaultValueMeta?: Metriport.fhir.Meta;
    /** Optional field for this source. */
    element?: string;
    /** How to handle the list mode for this element. */
    listMode?: Metriport.fhir.StructureMapSourceListMode;
    /** Named context for field, if a field is specified. */
    variable?: Metriport.fhir.Id;
    /** FHIRPath expression - must be true or the rule does not apply. */
    condition?: string;
    /** FHIRPath expression - must be true or the mapping engine throws an error instead of completing. */
    check?: string;
    /** A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found. */
    logMessage?: string;
}
