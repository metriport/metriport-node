/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

export type ResourceList =
    | Metriport.fhir.Account
    | Metriport.fhir.ActivityDefinition
    | Metriport.fhir.AdverseEvent
    | Metriport.fhir.AllergyIntolerance
    | Metriport.fhir.Appointment
    | Metriport.fhir.AppointmentResponse
    | Metriport.fhir.AuditEvent
    | Metriport.fhir.Basic
    | Metriport.fhir.Binary
    | Metriport.fhir.BiologicallyDerivedProduct
    | Metriport.fhir.BodyStructure
    | Metriport.fhir.Bundle
    | Metriport.fhir.CapabilityStatement
    | Metriport.fhir.CarePlan
    | Metriport.fhir.CareTeam
    | Metriport.fhir.CatalogEntry
    | Metriport.fhir.ChargeItem
    | Metriport.fhir.ChargeItemDefinition
    | Metriport.fhir.Claim
    | Metriport.fhir.ClaimResponse
    | Metriport.fhir.ClinicalImpression
    | Metriport.fhir.CodeSystem
    | Metriport.fhir.Communication
    | Metriport.fhir.CommunicationRequest
    | Metriport.fhir.CompartmentDefinition
    | Metriport.fhir.Composition
    | Metriport.fhir.ConceptMap
    | Metriport.fhir.Condition
    | Metriport.fhir.Consent
    | Metriport.fhir.Contract
    | Metriport.fhir.Coverage
    | Metriport.fhir.CoverageEligibilityRequest
    | Metriport.fhir.CoverageEligibilityResponse
    | Metriport.fhir.DetectedIssue
    | Metriport.fhir.Device
    | Metriport.fhir.DeviceDefinition
    | Metriport.fhir.DeviceMetric
    | Metriport.fhir.DeviceRequest
    | Metriport.fhir.DeviceUseStatement
    | Metriport.fhir.DiagnosticReport
    | Metriport.fhir.DocumentManifest
    | Metriport.fhir.DocumentReference
    | Metriport.fhir.EffectEvidenceSynthesis
    | Metriport.fhir.Encounter
    | Metriport.fhir.Endpoint
    | Metriport.fhir.EnrollmentRequest
    | Metriport.fhir.EnrollmentResponse
    | Metriport.fhir.EpisodeOfCare
    | Metriport.fhir.EventDefinition
    | Metriport.fhir.Evidence
    | Metriport.fhir.EvidenceVariable
    | Metriport.fhir.ExampleScenario
    | Metriport.fhir.ExplanationOfBenefit
    | Metriport.fhir.FamilyMemberHistory
    | Metriport.fhir.Flag
    | Metriport.fhir.Goal
    | Metriport.fhir.GraphDefinition
    | Metriport.fhir.Group
    | Metriport.fhir.GuidanceResponse
    | Metriport.fhir.HealthcareService
    | Metriport.fhir.ImagingStudy
    | Metriport.fhir.Immunization
    | Metriport.fhir.ImmunizationEvaluation
    | Metriport.fhir.ImmunizationRecommendation
    | Metriport.fhir.ImplementationGuide
    | Metriport.fhir.InsurancePlan
    | Metriport.fhir.Invoice
    | Metriport.fhir.Library
    | Metriport.fhir.Linkage
    | Metriport.fhir.List
    | Metriport.fhir.Location
    | Metriport.fhir.Measure
    | Metriport.fhir.MeasureReport
    | Metriport.fhir.Media
    | Metriport.fhir.Medication
    | Metriport.fhir.MedicationAdministration
    | Metriport.fhir.MedicationDispense
    | Metriport.fhir.MedicationKnowledge
    | Metriport.fhir.MedicationRequest
    | Metriport.fhir.MedicationStatement
    | Metriport.fhir.MedicinalProduct
    | Metriport.fhir.MedicinalProductAuthorization
    | Metriport.fhir.MedicinalProductContraindication
    | Metriport.fhir.MedicinalProductIndication
    | Metriport.fhir.MedicinalProductIngredient
    | Metriport.fhir.MedicinalProductInteraction
    | Metriport.fhir.MedicinalProductManufactured
    | Metriport.fhir.MedicinalProductPackaged
    | Metriport.fhir.MedicinalProductPharmaceutical
    | Metriport.fhir.MedicinalProductUndesirableEffect
    | Metriport.fhir.MessageDefinition
    | Metriport.fhir.MessageHeader
    | Metriport.fhir.MolecularSequence
    | Metriport.fhir.NamingSystem
    | Metriport.fhir.NutritionOrder
    | Metriport.fhir.Observation
    | Metriport.fhir.ObservationDefinition
    | Metriport.fhir.OperationDefinition
    | Metriport.fhir.OperationOutcome
    | Metriport.fhir.Organization
    | Metriport.fhir.OrganizationAffiliation
    | Metriport.fhir.Parameters
    | Metriport.fhir.Patient
    | Metriport.fhir.PaymentNotice
    | Metriport.fhir.PaymentReconciliation
    | Metriport.fhir.Person
    | Metriport.fhir.PlanDefinition
    | Metriport.fhir.Practitioner
    | Metriport.fhir.PractitionerRole
    | Metriport.fhir.Procedure
    | Metriport.fhir.Provenance
    | Metriport.fhir.Questionnaire
    | Metriport.fhir.QuestionnaireResponse
    | Metriport.fhir.RelatedPerson
    | Metriport.fhir.RequestGroup
    | Metriport.fhir.ResearchDefinition
    | Metriport.fhir.ResearchElementDefinition
    | Metriport.fhir.ResearchStudy
    | Metriport.fhir.ResearchSubject
    | Metriport.fhir.RiskAssessment
    | Metriport.fhir.RiskEvidenceSynthesis
    | Metriport.fhir.Schedule
    | Metriport.fhir.SearchParameter
    | Metriport.fhir.ServiceRequest
    | Metriport.fhir.Slot
    | Metriport.fhir.Specimen
    | Metriport.fhir.SpecimenDefinition
    | Metriport.fhir.StructureDefinition
    | Metriport.fhir.StructureMap
    | Metriport.fhir.Subscription
    | Metriport.fhir.Substance
    | Metriport.fhir.SubstanceNucleicAcid
    | Metriport.fhir.SubstancePolymer
    | Metriport.fhir.SubstanceProtein
    | Metriport.fhir.SubstanceReferenceInformation
    | Metriport.fhir.SubstanceSourceMaterial
    | Metriport.fhir.SubstanceSpecification
    | Metriport.fhir.SupplyDelivery
    | Metriport.fhir.SupplyRequest
    | Metriport.fhir.Task
    | Metriport.fhir.TerminologyCapabilities
    | Metriport.fhir.TestReport
    | Metriport.fhir.TestScript
    | Metriport.fhir.ValueSet
    | Metriport.fhir.VerificationResult
    | Metriport.fhir.VisionPrescription
    | Metriport.fhir.Project
    | Metriport.fhir.ClientApplication
    | Metriport.fhir.User
    | Metriport.fhir.Login
    | Metriport.fhir.PasswordChangeRequest
    | Metriport.fhir.JsonWebKey
    | Metriport.fhir.Bot
    | Metriport.fhir.AccessPolicy
    | Metriport.fhir.UserConfiguration
    | Metriport.fhir.ProjectMembership
    | Metriport.fhir.BulkDataExport
    | Metriport.fhir.SmartAppLaunch
    | Metriport.fhir.DomainConfiguration
    | Metriport.fhir.AsyncJob
    | Metriport.fhir.Agent;
