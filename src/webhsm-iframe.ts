// Copyright (c) 2024. Heusala Group Oy <info@hg.fi>. All rights reserved.

/** This handles the functionality inside the iframe for WebHSM.
 * It starts the web worker for WebHSM.
 */
class WebHSMWebWorker {

    public static WorkerURL : string = 'webhsm-worker.js';

    public static start (
        hsmWorkerUrl : string = WebHSMWebWorker.WorkerURL
    ) : WebHSMWebWorker {
        return new WebHSMWebWorker( new Worker(hsmWorkerUrl) );
    }

    private readonly _hsmWorker : Worker;

    private constructor (
        hsmWorker : Worker
    ) {
        this._hsmWorker = hsmWorker;
    }

    public init () : this {
        console.log('WebHSM web worker has been started.');
        return this;
    }

}
