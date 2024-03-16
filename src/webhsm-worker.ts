// Copyright (c) 2024. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
//
// This JS code handles the functionality inside the web worker for WebHSM.
// It starts the wasm part of WebHSM written in Go.

importScripts('wasm_exec.js');

const go = new Go();
WebAssembly.instantiateStreaming(fetch('webhsm.wasm'), go.importObject).then((result) => {
    go.run(result.instance);
});
