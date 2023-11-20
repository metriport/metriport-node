/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface ObservationComponent {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Describes what was observed. Sometimes this is called the observation "code". */
    code: Metriport.fhir.CodeableConcept;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueQuantity?: Metriport.fhir.Quantity;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueCodeableConcept?: Metriport.fhir.CodeableConcept;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueString?: string;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueBoolean?: boolean;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueInteger?: number;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueRange?: Metriport.fhir.Range;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueRatio?: Metriport.fhir.Ratio;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueSampledData?: Metriport.fhir.SampledData;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueTime?: string;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valueDateTime?: string;
    /** The information determined as a result of making the observation, if the information has a simple value. */
    valuePeriod?: Metriport.fhir.Period;
    /** Provides a reason why the expected value in the element Observation.component.value[x] is missing. */
    dataAbsentReason?: Metriport.fhir.CodeableConcept;
    /** A categorical assessment of an observation value. For example, high, low, normal. */
    interpretation?: Metriport.fhir.CodeableConcept[];
    /** Guidance on how to interpret the value by comparison to a normal or recommended range. */
    referenceRange?: Metriport.fhir.ObservationReferenceRange[];
}