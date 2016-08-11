/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class ValueEvent<T> extends WEvent {

        /**
         * bubbles: false
         * cancelable: false
         * @type {string}
         */
        public static CHANGE: string = "change";

        /**
         * bubbles: false
         * cancelable: true
         * @type {string}
         */
        public static CHANGING: string = "changing";


        private _newValue: T;
        private _oldValue: T;

        constructor(type: string, newValue: T, oldValue: T, eventInitDict?: EventInit) {
            super(type, eventInitDict);

            this._newValue = newValue;
            this._oldValue = oldValue;
        }

        get newValue(): T {
            return this._newValue;
        }

        get oldValue(): T {
            return this._oldValue;
        }
    }
}