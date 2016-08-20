/**
 * Created by plter on 8/11/16.
 */

namespace what {

    export class Value<T> extends EventDispatcher<ValueEvent<T>> {

        private _value: T;

        constructor(data: T) {
            super();
            this._value = data;
        }

        get value(): T {
            return this._value;
        }

        set value(t: T) {
            var old = this._value;
            if (old != t) {
                if (this.dispatchEvent(
                        new ValueEvent(ValueEvent.CHANGING, t, this._value, {
                            bubbles: false,
                            cancelable: true
                        })
                    )) {
                    this._value = t;
                    this.dispatchEvent(new ValueEvent(ValueEvent.CHANGE, t, old));
                }
            }
        }

        toString(): string {
            return this.value.toString();
        }
    }
}