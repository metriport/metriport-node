/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the gene is the "sense" strand, and the opposite complementary strand is the "antisense" strand.
 */
export type MolecularSequenceReferenceSeqOrientation = "sense" | "antisense";

export const MolecularSequenceReferenceSeqOrientation = {
    Sense: "sense",
    Antisense: "antisense",
} as const;
