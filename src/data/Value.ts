/**
 * Created by plter on 8/11/16.
 */

namespace what {

    export class Value<T> extends EventDispatcher<ValueEvent<T>> {

        private _data: T;

        constructor(data: T) {
            super();
            this._data = data;
        }

        get data(): T {
            return this._data;
        }

        set data(value: T) {
            var old = this._data;

            if (this.dispatchEvent(
                    new ValueEvent(ValueEvent.CHANGING, value, this._data, {
                        bubbles: false,
                        cancelable: true
                    })
                )) {
                this._data = value;
                this.dispatchEvent(new ValueEvent(ValueEvent.CHANGE, value, old));
            }
        }
    }
}