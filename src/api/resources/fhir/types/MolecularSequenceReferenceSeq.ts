/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * Raw data describing a biological sequence.
 */
export interface MolecularSequenceReferenceSeq {
    /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
    id?: string;
    /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
    extension?: Metriport.fhir.Extension[];
    /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
    modifierExtension?: Metriport.fhir.Extension[];
    /** Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specific proteins at one or more origins of replication ([SO:0000340](http://www.sequenceontology.org/browser/current_svn/term/SO:0000340)). */
    chromosome?: Metriport.fhir.CodeableConcept;
    /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'. Version number must be included if a versioned release of a primary build was used. */
    genomeBuild?: string;
    /** A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand. */
    orientation?: Metriport.fhir.MolecularSequenceReferenceSeqOrientation;
    /** Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field. For example, the prefix, “NG*” identifies reference sequence for genes, “NM*” for messenger RNA transcripts, and “NP\_” for amino acid sequences. */
    referenceSeqId?: Metriport.fhir.CodeableConcept;
    /** A pointer to another MolecularSequence entity as reference sequence. */
    referenceSeqPointer?: Metriport.fhir.Reference;
    /** A string like "ACGT". */
    referenceSeqString?: string;
    /** An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm. */
    strand?: Metriport.fhir.MolecularSequenceReferenceSeqStrand;
    /** Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
    windowStart?: number;
    /** End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
    windowEnd?: number;
}
