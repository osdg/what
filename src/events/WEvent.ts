/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class WEvent {

        private _eventInitDict;
        private _type: string;
        private _defaultPrevented = false;
        private _target = null;

        constructor(type: string, eventInitDict?: EventInit) {
            this._type = type;
            this._eventInitDict = eventInitDict;
        }

        preventDefault() {
            this._defaultPrevented = true;
        }

        get eventInitDict() {
            return this._eventInitDict;
        }

        get type(): string {
            return this._type;
        }

        get defaultPrevented(): boolean {
            return this._defaultPrevented;
        }

        get target(): any {
            return this._target;
        }

        set target(value: any) {
            this._target = value;
        }

        get cancelable(): boolean {
            return this._eventInitDict && this._eventInitDict.cancelable;
        }
    }
}