/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of participant.
 */
export type TestReportParticipantType = "test-engine" | "client" | "server";

export const TestReportParticipantType = {
    TestEngine: "test-engine",
    Client: "client",
    Server: "server",
} as const;
