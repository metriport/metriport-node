/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A task to be performed.
 */
export interface Task extends Metriport.fhir.BaseResource {
    resourceType: "Task";
    /** The business identifier for this task. */
    identifier?: Metriport.fhir.Identifier[];
    /** The URL pointing to a _FHIR_-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task. */
    instantiatesCanonical?: Metriport.fhir.Canonical;
    /** The URL pointing to an _externally_ maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task. */
    instantiatesUri?: Metriport.fhir.Uri;
    /** BasedOn refers to a higher-level authorization that triggered the creation of the task. It references a "request" resource such as a ServiceRequest, MedicationRequest, ServiceRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill. This latter resource is referenced by FocusOn. For example, based on a ServiceRequest (= BasedOn), a task is created to fulfill a procedureRequest ( = FocusOn ) to collect a specimen from a patient. */
    basedOn?: Metriport.fhir.Reference[];
    /** An identifier that links together multiple tasks and other requests that were created in the same context. */
    groupIdentifier?: Metriport.fhir.Identifier;
    /** Task that this particular task is part of. */
    partOf?: Metriport.fhir.Reference[];
    /** The current status of the task. */
    status?: Metriport.fhir.TaskStatus;
    /** An explanation as to why this task is held, failed, was refused, etc. */
    statusReason?: Metriport.fhir.CodeableConcept;
    /** Contains business-specific nuances of the business state. */
    businessStatus?: Metriport.fhir.CodeableConcept;
    /** Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc. */
    intent?: Metriport.fhir.TaskIntent;
    /** Indicates how quickly the Task should be addressed with respect to other requests. */
    priority?: Metriport.fhir.Code;
    /** A name or code (or both) briefly describing what the task involves. */
    code?: Metriport.fhir.CodeableConcept;
    /** A free-text description of what is to be performed. */
    description?: string;
    /** The request being actioned or the resource being manipulated by this task. */
    focus?: Metriport.fhir.Reference;
    /** The entity who benefits from the performance of the service specified in the task (e.g., the patient). */
    for?: Metriport.fhir.Reference;
    /** The healthcare event (e.g. a patient and healthcare provider interaction) during which this task was created. */
    encounter?: Metriport.fhir.Reference;
    /** Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end). */
    executionPeriod?: Metriport.fhir.Period;
    /** The date and time this task was created. */
    authoredOn?: Metriport.fhir.DateTime;
    /** The date and time of last modification to this task. */
    lastModified?: Metriport.fhir.DateTime;
    /** The creator of the task. */
    requester?: Metriport.fhir.Reference;
    /** The kind of participant that should perform the task. */
    performerType?: Metriport.fhir.CodeableConcept[];
    /** Individual organization or Device currently responsible for task execution. */
    owner?: Metriport.fhir.Reference;
    /** Principal physical location where the this task is performed. */
    location?: Metriport.fhir.Reference;
    /** A description or code indicating why this task needs to be performed. */
    reasonCode?: Metriport.fhir.CodeableConcept;
    /** A resource reference indicating why this task needs to be performed. */
    reasonReference?: Metriport.fhir.Reference;
    /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task. */
    insurance?: Metriport.fhir.Reference[];
    /** Free-text information captured about the task as it progresses. */
    note?: Metriport.fhir.Annotation[];
    /** Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task. */
    relevantHistory?: Metriport.fhir.Reference[];
    /** If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned. */
    restriction?: Metriport.fhir.TaskRestriction;
    /** Additional information that may be needed in the execution of the task. */
    input?: Metriport.fhir.TaskInput[];
    /** Outputs produced by the Task. */
    output?: Metriport.fhir.TaskOutput[];
}