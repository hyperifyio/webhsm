# `webhsm` by [HyperifyIO](https://github.com/hyperifyio): Revolutionizing Web Application Security

`webhsm` contributes to HyperifyIO's broader vision of enhancing digital 
security through innovative solutions for custom Public Key Infrastructure 
(PKI). As a pivotal element of our security toolkit, it addresses the critical 
need for secure cryptographic operations within web applications.

## Reinventing Cryptographic Security for the Web

`webhsm` offers a groundbreaking SoftHSM solution tailored for the unique 
challenges of web environments. It provides a PKCS#11 compatible API that 
allows web applications to securely manage cryptographic private keys inside 
the browser's IndexDB. The genius of `webhsm` lies in its novel approach to 
securing sensitive information: it prevents direct access by front-end 
applications, requiring the use of its PKCS#11 API for any cryptographic 
actions.

## Architectural Innovation

At the core of `webhsm`'s security model is its ability to operate in a 
distinct cross-origin context, ensuring that cryptographic keys and operations 
are securely isolated from the main application. This is achieved through a 
combination of iframes and web workers, with the latter running Go-compiled 
WebAssembly (wasm) to perform cryptographic tasks. This innovative architecture 
not only enhances security but also maintains the integrity of the 
cryptographic operations.

## Mission-Critical Security

The primary mission of `webhsm` is to lay the foundation for mutual TLS (mTLS) 
in client-side applications, enabling the secure management and storage of 
client x509 certificates and their private keys. This is essential for 
establishing secure client-server communications within web applications, 
making `webhsm` an indispensable tool for developers looking to bolster their 
app's security.

## Development

See [PKCS11 Compatibility](https://github.com/hyperifyio/webhsm/issues/4). We organize 
our work in a simple Project (or use case) -> Task -> Subtask hierarchy.

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
