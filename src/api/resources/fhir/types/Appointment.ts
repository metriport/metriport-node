/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 */
export interface Appointment extends Metriport.fhir.BaseResource {
    resourceType: "Appointment";
    /** This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
    identifier?: Metriport.fhir.Identifier[];
    /** The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status. */
    status?: Metriport.fhir.AppointmentStatus;
    /** The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply. */
    cancelationReason?: Metriport.fhir.CodeableConcept;
    /** A broad categorization of the service that is to be performed during this appointment. */
    serviceCategory?: Metriport.fhir.CodeableConcept[];
    /** The specific service that is to be performed during this appointment. */
    serviceType?: Metriport.fhir.CodeableConcept[];
    /** The specialty of a practitioner that would be required to perform the service requested in this appointment. */
    specialty?: Metriport.fhir.CodeableConcept[];
    /** The style of appointment or patient that has been booked in the slot (not service type). */
    appointmentType?: Metriport.fhir.CodeableConcept;
    /** The coded reason that this appointment is being scheduled. This is more clinical than administrative. */
    reasonCode?: Metriport.fhir.CodeableConcept[];
    /** Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure. */
    reasonReference?: Metriport.fhir.Reference[];
    /** The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority). */
    priority?: Metriport.fhir.UnsignedInt;
    /** The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field. */
    description?: string;
    /** Additional information to support the appointment provided when making the appointment. */
    supportingInformation?: Metriport.fhir.Reference[];
    /** Date/Time that the appointment is to take place. */
    start?: Metriport.fhir.Instant;
    /** Date/Time that the appointment is to conclude. */
    end?: Metriport.fhir.Instant;
    /** Number of minutes that the appointment is to take. This can be less than the duration between the start and end times. For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work. Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end. */
    minutesDuration?: Metriport.fhir.PositiveInt;
    /** The slots from the participants' schedules that will be filled by the appointment. */
    slot?: Metriport.fhir.Reference[];
    /** The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment. */
    created?: Metriport.fhir.DateTime;
    /** Additional comments about the appointment. */
    comment?: string;
    /** While Appointment.comment contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before). */
    patientInstruction?: string;
    /** The service request this appointment is allocated to assess (e.g. incoming referral or procedure request). */
    basedOn?: Metriport.fhir.Reference[];
    /** List of participants involved in the appointment. */
    participant: Metriport.fhir.AppointmentParticipant[];
    /** A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system. */
    requestedPeriod?: Metriport.fhir.Period[];
}
