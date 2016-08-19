/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class TextView extends Component {

        constructor(tagName: string, value: what.Value<string>) {
            super(tagName);

            this._thisTextChangeHandler = this.textChangeHandler.bind(this);

            this.text = value;
        }

        private _text: Value<string>;

        get text(): what.Value<string> {
            return this._text;
        }

        set text(value: what.Value<string>) {
            if (this._text) {
                this._text.removeEventListener(ValueEvent.CHANGE, this._thisTextChangeHandler);
            }
            this._text = value;
            this._text.addEventListener(ValueEvent.CHANGE, this._thisTextChangeHandler);

            this.refresh();
        }

        private textChangeHandler(e: ValueEvent<string>) {
            this.refresh();
        }

        private _thisTextChangeHandler;

        /**
         * Refresh the content or value by the new value
         */
        protected refresh(): void {
            this.htmlNode.innerHTML = this.text.data;
        }
    }
}