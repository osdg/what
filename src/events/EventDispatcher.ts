/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class EventDispatcher<E extends WEvent> {

        private _listeners = {};

        addEventListener(type: string, listener: (e: E)=>void): void {
            if (!this._listeners[type]) {
                this._listeners[type] = [];
            }
            var array: Array<(e: E)=>void> = this._listeners[type];

            var index;
            if ((index = array.indexOf(listener)) != -1) {
                array.splice(index, 1);
            }
            array.push(listener);
        }

        dispatchEvent(evt: E): boolean {
            var ls = this._listeners[evt.type];
            if (ls && ls.length) {
                evt.target = this;
                let listener;
                for (var i = 0; i < ls.length; i++) {
                    ls[i](evt);
                }
            }

            return evt.cancelable ? !evt.defaultPrevented : true;
        }

        removeEventListener(type: string, listener: (e: E)=>void, useCapture?: boolean): void {
            var ls = this._listeners[type];
            var index;
            if (ls && (index = ls.indexOf(listener)) != -1) {
                ls.splice(index, 1);
            }
        }

        removeAllEventListener(type: string) {
            this._listeners[type] = [];
        }
    }
}