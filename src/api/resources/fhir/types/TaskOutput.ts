/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A task to be performed.
 */
export interface TaskOutput {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** The name of the Output parameter. */
    type: Metriport.fhir.CodeableConcept;
    /** The value of the Output parameter as a basic type. */
    valueBase64Binary?: string;
    /** The value of the Output parameter as a basic type. */
    valueBoolean?: boolean;
    /** The value of the Output parameter as a basic type. */
    valueCanonical?: string;
    /** The value of the Output parameter as a basic type. */
    valueCode?: string;
    /** The value of the Output parameter as a basic type. */
    valueDate?: string;
    /** The value of the Output parameter as a basic type. */
    valueDateTime?: string;
    /** The value of the Output parameter as a basic type. */
    valueDecimal?: number;
    /** The value of the Output parameter as a basic type. */
    valueId?: string;
    /** The value of the Output parameter as a basic type. */
    valueInstant?: string;
    /** The value of the Output parameter as a basic type. */
    valueInteger?: number;
    /** The value of the Output parameter as a basic type. */
    valueMarkdown?: string;
    /** The value of the Output parameter as a basic type. */
    valueOid?: string;
    /** The value of the Output parameter as a basic type. */
    valuePositiveInt?: number;
    /** The value of the Output parameter as a basic type. */
    valueString?: string;
    /** The value of the Output parameter as a basic type. */
    valueTime?: string;
    /** The value of the Output parameter as a basic type. */
    valueUnsignedInt?: number;
    /** The value of the Output parameter as a basic type. */
    valueUri?: string;
    /** The value of the Output parameter as a basic type. */
    valueUrl?: string;
    /** The value of the Output parameter as a basic type. */
    valueUuid?: string;
    /** The value of the Output parameter as a basic type. */
    valueAddress?: Metriport.fhir.Address;
    /** The value of the Output parameter as a basic type. */
    valueAge?: Metriport.fhir.Age;
    /** The value of the Output parameter as a basic type. */
    valueAnnotation?: Metriport.fhir.Annotation;
    /** The value of the Output parameter as a basic type. */
    valueAttachment?: Metriport.fhir.Attachment;
    /** The value of the Output parameter as a basic type. */
    valueCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** The value of the Output parameter as a basic type. */
    valueCoding?: Metriport.fhir.Coding;
    /** The value of the Output parameter as a basic type. */
    valueContactPoint?: Metriport.fhir.ContactPoint;
    /** The value of the Output parameter as a basic type. */
    valueCount?: Metriport.fhir.Count;
    /** The value of the Output parameter as a basic type. */
    valueDistance?: Metriport.fhir.Distance;
    /** The value of the Output parameter as a basic type. */
    valueDuration?: Metriport.fhir.Duration;
    /** The value of the Output parameter as a basic type. */
    valueHumanName?: Metriport.fhir.HumanName;
    /** The value of the Output parameter as a basic type. */
    valueIdentifier?: Metriport.fhir.Identifier;
    /** The value of the Output parameter as a basic type. */
    valueMoney?: Metriport.fhir.Money;
    /** The value of the Output parameter as a basic type. */
    valuePeriod?: Metriport.fhir.Period;
    /** The value of the Output parameter as a basic type. */
    valueQuantity?: Metriport.fhir.Quantity;
    /** The value of the Output parameter as a basic type. */
    valueRange?: Metriport.fhir.Range;
    /** The value of the Output parameter as a basic type. */
    valueRatio?: Metriport.fhir.Ratio;
    /** The value of the Output parameter as a basic type. */
    valueReference?: Metriport.fhir.Reference;
    /** The value of the Output parameter as a basic type. */
    valueSampledData?: Metriport.fhir.SampledData;
    /** The value of the Output parameter as a basic type. */
    valueSignature?: Metriport.fhir.Signature;
    /** The value of the Output parameter as a basic type. */
    valueTiming?: Metriport.fhir.Timing;
    /** The value of the Output parameter as a basic type. */
    valueContactDetail?: Metriport.fhir.ContactDetail;
    /** The value of the Output parameter as a basic type. */
    valueContributor?: Metriport.fhir.Contributor;
    /** The value of the Output parameter as a basic type. */
    valueDataRequirement?: Metriport.fhir.DataRequirement;
    /** The value of the Output parameter as a basic type. */
    valueExpression?: Metriport.fhir.Expression;
    /** The value of the Output parameter as a basic type. */
    valueParameterDefinition?: Metriport.fhir.ParameterDefinition;
    /** The value of the Output parameter as a basic type. */
    valueRelatedArtifact?: Metriport.fhir.RelatedArtifact;
    /** The value of the Output parameter as a basic type. */
    valueTriggerDefinition?: Metriport.fhir.TriggerDefinition;
    /** The value of the Output parameter as a basic type. */
    valueUsageContext?: Metriport.fhir.UsageContext;
    /** The value of the Output parameter as a basic type. */
    valueDosage?: Metriport.fhir.Dosage;
    /** The value of the Output parameter as a basic type. */
    valueMeta?: Metriport.fhir.Meta;
}
