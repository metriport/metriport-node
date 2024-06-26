/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
export interface PaymentNotice extends Metriport.fhir.BaseResource {
    resourceType: "PaymentNotice";
    /** A unique identifier assigned to this payment notice. */
    identifier?: Metriport.fhir.Identifier[];
    /** The status of the resource instance. */
    status?: Metriport.fhir.Code;
    /** Reference of resource for which payment is being made. */
    request?: Metriport.fhir.Reference;
    /** Reference of response to resource for which payment is being made. */
    response?: Metriport.fhir.Reference;
    /** The date when this resource was created. */
    created?: Metriport.fhir.DateTime;
    /** The practitioner who is responsible for the services rendered to the patient. */
    provider?: Metriport.fhir.Reference;
    /** A reference to the payment which is the subject of this notice. */
    payment: Metriport.fhir.Reference;
    /** The date when the above payment action occurred. */
    paymentDate?: string;
    /** The party who will receive or has received payment that is the subject of this notification. */
    payee?: Metriport.fhir.Reference;
    /** The party who is notified of the payment status. */
    recipient: Metriport.fhir.Reference;
    /** The amount sent to the payee. */
    amount: Metriport.fhir.Money;
    /** A code indicating whether payment has been sent or cleared. */
    paymentStatus?: Metriport.fhir.CodeableConcept;
}
