# Metriport Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/metriport)](https://www.npmjs.com/package/@fern-api/metriport)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Metriport Node.js library provides access to the Metriport API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.metriport.com/home/welcome).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/metriport-ts-sdk?file=app.ts&view=editor)

```typescript
import { MetriportClient } from '@fern-api/metriport';

const client = new MetriportClient({
    apiKey: 'YOUR_API_KEY',
});

const response = await client.document.get({
    patientId: 'some-patient-id',
    facilityId: 'some-facility-id',
});

console.log('Received response from Metriport!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
