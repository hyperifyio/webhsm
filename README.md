# hyperifyio/webhsm

## Development Status

See [WebHSM MVPv1](https://github.com/hyperifyio/webhsm/issues/1). We organize 
our work in a simple Project -> Task -> Subtask hierarchy.

## Overview

`webhsm` is a SoftHSM solution designed specifically for web applications. It 
offers a secure, PKCS#11 compatible API, enabling web apps to securely store 
cryptographic private keys within the browser's IndexDB. The key innovation of 
`webhsm` is its ability to safeguard secrets in such a manner that front-end 
applications are restricted from directly accessing them; instead, they must 
utilize the PKCS#11 compatible API for any cryptographic operations.

## Architecture

The security model of `webhsm` hinges on operating from a separate cross-origin 
context. This isolation is achieved through the use of an iframe, which serves
as the environment for initiating a web worker. The web worker, developed in Go 
and compiled to WebAssembly (wasm), executes the cryptographic operations. This 
approach ensures that the cryptographic keys and operations are insulated from 
the main application context, enhancing security and integrity.

## Primary Objective

The initial aim of `webhsm` is to support the foundational requirements for 
mutual TLS (mTLS) in client-side applications. This encompasses secure storage 
and management of client x509 certificates and their corresponding private keys,
facilitating secure client-server communication within web applications.

## Features

- **PKCS#11 Compatible API**: Enables standard cryptographic operations, 
  ensuring compatibility with existing security protocols. See 
  [PKCS11 Compatibility Backlog](https://github.com/hyperifyio/webhsm/issues/4) 
  for current development status in `webhsm`.
- **Secure Key Storage**: Leverages the browser's IndexDB for storing 
  cryptographic keys, with enhanced security measures to prevent direct access 
  by front-end code.
- **Isolated Execution Environment**: Utilizes cross-origin iframes and web 
  workers to segregate cryptographic operations from the main application, 
  safeguarding against unauthorized access.
- **WebAssembly (wasm) Support**: Employs Go-compiled wasm for executing 
  cryptographic operations, combining performance with portability.

## Getting Started

(TODO: Detailed instructions on setting up `webhsm`, including any prerequisites, 
installation steps, and a basic usage guide, would be provided here.)

## Contribution

We welcome contributions to `webhsm`! Whether you're interested in improving 
existing functionality, or reporting issues, your input is invaluable to the 
project. 

You can join our community at [Discord](https://discord.com/invite/UBTrHxA78f).

## License

`webhsm` is available under the Functional Source License, Version 1.1, MIT 
Future License (FSL-1.1-MIT), allowing use, copying, modification, and 
redistribution for permitted purposes, excluding competing uses. Two years 
post-release, the software will also be available under MIT license terms. Refer 
to the [LICENSE.md](LICENSE) file for complete license details.

## Support

For support or further inquiries, particularly regarding the SaaS offering and
its suitability for securing private services and embedded application
connections, please contact us directly at info@hg.fi.
