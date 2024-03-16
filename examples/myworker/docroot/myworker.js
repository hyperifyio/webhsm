// Copyright (c) 2024. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

// Function to handle messages from the main thread
self.onmessage = function(event) {

    // Get the MessageChannel's port for this worker
    const port = event.ports[0];

    port.onmessage = function(e) {

        console.log("Message received from webhsm:", e.data);

        // Respond back through the MessageChannel port
        port.postMessage("worker example says hello!");
    };

};
