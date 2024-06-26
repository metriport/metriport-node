/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The operator type defines the conditional behavior of the assert. If not defined, the default is equals.
 */
export type TestScriptAssertOperator =
    | "equals"
    | "notEquals"
    | "in"
    | "notIn"
    | "greaterThan"
    | "lessThan"
    | "empty"
    | "notEmpty"
    | "contains"
    | "notContains"
    | "eval";

export const TestScriptAssertOperator = {
    Equals: "equals",
    NotEquals: "notEquals",
    In: "in",
    NotIn: "notIn",
    GreaterThan: "greaterThan",
    LessThan: "lessThan",
    Empty: "empty",
    NotEmpty: "notEmpty",
    Contains: "contains",
    NotContains: "notContains",
    Eval: "eval",
} as const;
