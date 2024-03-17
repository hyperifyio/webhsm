"use strict";
// Copyright (c) 2024. Heusala Group Oy <info@hg.fi>. All rights reserved.
/** This handles the functionality inside the iframe for WebHSM.
 * It starts the web worker for WebHSM.
 */
var WebHSMWebWorker = /** @class */ (function () {
    function WebHSMWebWorker(hsmWorker) {
        this._hsmWorker = hsmWorker;
    }
    WebHSMWebWorker.start = function (hsmWorkerUrl) {
        if (hsmWorkerUrl === void 0) { hsmWorkerUrl = WebHSMWebWorker.WorkerURL; }
        return new WebHSMWebWorker(new Worker(hsmWorkerUrl));
    };
    WebHSMWebWorker.prototype.init = function () {
        console.log('WebHSM web worker has been started.');
        return this;
    };
    WebHSMWebWorker.WorkerURL = 'webhsm-worker.js';
    return WebHSMWebWorker;
}());
