/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Metriport from "../../..";

/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export interface SearchParameter extends Metriport.fhir.BaseResource {
    resourceType: "SearchParameter";
    /** An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this search parameter is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the search parameter is stored on different servers. */
    url?: Metriport.fhir.Uri;
    /** The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
    version?: string;
    /** A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
    name?: string;
    /** Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. i.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter. */
    derivedFrom?: Metriport.fhir.Canonical;
    /** The status of this search parameter. Enables tracking the life-cycle of the content. */
    status?: Metriport.fhir.SearchParameterStatus;
    /** A Boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
    experimental?: boolean;
    /** The date (and optionally time) when the search parameter was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes. */
    date?: Metriport.fhir.DateTime;
    /** The name of the organization or individual that published the search parameter. */
    publisher?: string;
    /** Contact details to assist a user in finding and communicating with the publisher. */
    contact?: Metriport.fhir.ContactDetail[];
    /** And how it used. */
    description?: Metriport.fhir.Markdown;
    /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate search parameter instances. */
    useContext?: Metriport.fhir.UsageContext[];
    /** A legal or geographic region in which the search parameter is intended to be used. */
    jurisdiction?: Metriport.fhir.CodeableConcept[];
    /** Explanation of why this search parameter is needed and why it has been designed as it has. */
    purpose?: Metriport.fhir.Markdown;
    /** The code used in the URL or the parameter name in a parameters resource for this search parameter. */
    code?: Metriport.fhir.Code;
    /** The base resource type(s) that this search parameter can be used against. */
    base?: Metriport.fhir.Code[];
    /** The type of value that a search parameter may contain, and how the content is interpreted. */
    type?: Metriport.fhir.SearchParameterType;
    /** A FHIRPath expression that returns a set of elements for the search parameter. */
    expression?: string;
    /** An XPath expression that returns a set of elements for the search parameter. */
    xpath?: string;
    /** How the search parameter relates to the set of elements returned by evaluating the xpath query. */
    xpathUsage?: Metriport.fhir.SearchParameterXpathUsage;
    /** Types of resource (if a resource is referenced). */
    target?: Metriport.fhir.Code[];
    /** Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match. */
    multipleOr?: boolean;
    /** Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match. */
    multipleAnd?: boolean;
    /** Comparators supported for the search parameter. */
    comparator?: Metriport.fhir.SearchParameterComparatorItem[];
    /** A modifier supported for the search parameter. */
    modifier?: Metriport.fhir.SearchParameterModifierItem[];
    /** Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type. */
    chain?: string[];
    /** Used to define the parts of a composite search parameter. */
    component?: Metriport.fhir.SearchParameterComponent[];
}
