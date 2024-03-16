// Copyright (c) 2024. Heusala Group Oy <info@hg.fi>. All rights reserved.

/** WebHSM class provides the implementation for WebHSM in the parent frontend application.
 * It starts the WebHSM in an iframe from different origin.
 */
class WebHSM {

    public static WorkerURL : string = 'http://localhost:8080';

    public static start (
        url : string = WebHSM.WorkerURL
    ) : WebHSM {
        let hsm = new WebHSM( url );
        hsm.init()
        return hsm;
    }


    private readonly _url : string;
    private _iframe : HTMLIFrameElement | undefined;
    private _iframeLoaded : boolean;

    private constructor (
        url : string
    ) {
        this._url = url;
        this._iframeLoaded = false;
    }

    private _onLoadIframe () {
        console.log('Worker has been started and communication channel established.');
    }

    private _sendMessage (message: any) {
        if (!this._iframe?.contentWindow) throw new TypeError(`iframe uninitialized`);
        if (!this._iframeLoaded) throw new TypeError(`iframe not yet loaded`);
        this._iframe.contentWindow.postMessage(message, this._url);
    }


    public init () : this {
        if (this._iframe) throw new TypeError('iframe already initialized');
        this._iframe = document.createElement('iframe');
        this._iframe.src = `${this._url}/webhsm.html`;
        this._iframe.style.display = 'none';
        document.body.appendChild(this._iframe);
        this._iframe.onload = () : void => {
            this._iframeLoaded = true;
            this._onLoadIframe()
        };
        return this;
    }


}
