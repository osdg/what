/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class Text extends Component {

        private _value: Value<string>;

        constructor(tagName: string, value: Value<string>) {
            super(tagName);

            this._value = value;
            this.refreshTextContent();
            this._value.addEventListener(ValueEvent.CHANGE, this.valueChangeHandler.bind(this));
        }

        private valueChangeHandler(event: ValueEvent<string>) {
            this.refreshTextContent();
        }

        private refreshTextContent() {
            this.innerHTML = this._value.data;
        }
    }
}