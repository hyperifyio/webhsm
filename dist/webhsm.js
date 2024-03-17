"use strict";
// Copyright (c) 2024. Heusala Group Oy <info@hg.fi>. All rights reserved.
/** WebHSM class provides the implementation for WebHSM in the parent frontend application.
 * It starts the WebHSM in an iframe from different origin.
 */
var WebHSM = /** @class */ (function () {
    function WebHSM(url) {
        this._nextCallId = 0;
        this._url = url;
        this._iframeLoaded = false;
    }
    WebHSM.start = function (url) {
        if (url === void 0) { url = WebHSM.WorkerURL; }
        var hsm = new WebHSM(url);
        hsm.init();
        return hsm;
    };
    WebHSM.prototype.init = function () {
        var _this = this;
        if (this._iframe)
            throw new TypeError('iframe already initialized');
        this._iframe = document.createElement('iframe');
        this._iframe.src = "".concat(this._url, "/webhsm.html");
        this._iframe.style.display = 'none';
        document.body.appendChild(this._iframe);
        this._iframe.onload = function () {
            _this._iframeLoaded = true;
            _this._onLoadIframe();
        };
        return this;
    };
    WebHSM.prototype._onLoadIframe = function () {
        console.log('Worker has been started and communication channel established.');
    };
    WebHSM.prototype._sendMessage = function (method, args) {
        var _this = this;
        var _a;
        if (!this._iframeLoaded)
            throw new TypeError("iframe not yet loaded");
        var contentWindow = (_a = this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow;
        if (!contentWindow)
            throw new TypeError("iframe uninitialized");
        return new Promise(function (resolve, reject) {
            try {
                var callId_1 = _this._nextCallId++;
                var handleMessage_1 = function (ev) {
                    var _a, _b;
                    // Check the origin and callId of the response
                    if (ev.origin !== _this._url || ((_a = ev.data) === null || _a === void 0 ? void 0 : _a.callId) !== callId_1) {
                        return;
                    }
                    window.removeEventListener("message", handleMessage_1);
                    if ((_b = ev.data) === null || _b === void 0 ? void 0 : _b.error) {
                        reject(ev.data.error);
                    }
                    else {
                        resolve(ev.data.result);
                    }
                };
                window.addEventListener("message", handleMessage_1);
                contentWindow.postMessage({ method: method, args: args, callId: callId_1 }, _this._url);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    WebHSM.WorkerURL = 'http://localhost:8080';
    return WebHSM;
}());
