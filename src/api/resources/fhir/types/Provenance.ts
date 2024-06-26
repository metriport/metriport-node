/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export interface Provenance extends Metriport.fhir.BaseResource {
    resourceType: "Provenance";
    /** The Reference(s) that were generated or updated by the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity. */
    target: Metriport.fhir.Reference[];
    /** The period during which the activity occurred. */
    occurredPeriod?: Metriport.fhir.Period;
    /** The period during which the activity occurred. */
    occurredDateTime?: string;
    /** The instant of time at which the activity was recorded. */
    recorded?: Metriport.fhir.Instant;
    /** Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc. */
    policy?: Metriport.fhir.Uri[];
    /** Where the activity occurred, if relevant. */
    location?: Metriport.fhir.Reference;
    /** The reason that the activity was taking place. */
    reason?: Metriport.fhir.CodeableConcept[];
    /** An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities. */
    activity?: Metriport.fhir.CodeableConcept;
    /** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
    agent: Metriport.fhir.ProvenanceAgent[];
    /** An entity used in this activity. */
    entity?: Metriport.fhir.ProvenanceEntity[];
    /** A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated. */
    signature?: Metriport.fhir.Signature[];
}
