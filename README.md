# Metriport Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/metriport)](https://www.npmjs.com/package/@fern-api/metriport)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Metriport Node.js library provides access to the Metriport API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.metriport.com/home/welcome).

## Installation

```
npm install --save @fern-api/metriport
# or
yarn add @fern-api/metriport
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/metriport-ts-sdk-ws1txg?file=app.ts&view=editor)

```typescript
import { MetriportClient, Metriport } from '@fern-api/metriport';

const metriport = new MetriportClient({
    apiKey: 'YOUR_API_KEY',
});

const response = await metriport.medical.organization.create({
  type: Metriport.OrgType.PostAcuteCare,
  name: "Metriport Inc.",
  location: {
    addressLine1: "2261 Market Street",
    addressLine2: "#4818",
    city: "San Francisco",
    state: Metriport.UsState.CA,
    zip: "94114",
    country: "USA",
  }
});

console.log('Received response from Metriport!', response);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [MetriportError](src/errors/MetriportError.ts) will be thrown:

```ts
import { MetriportError } from '@fern-api/metriport';

try {
  await metriport.medical.patients.get("patient-id");
} catch (err) {
  if (err instanceof MetriportError) {
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
