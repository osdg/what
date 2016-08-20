/**
 * Created by plter on 8/19/16.
 */

namespace what {

    export class TextInput extends TextView {


        private _node: HTMLInputElement;
        private willFresh: boolean = true;

        constructor(tagNameOrTag?: string|HTMLElement = "input", value: what.Value<string> = new Value("")) {
            super(tagNameOrTag, value);

            this._thisNativeTextChangeHandler = this.nativeTextChangeHandler.bind(this);

            this._node = this.htmlNode as HTMLInputElement;
            this._node.type = "text";

            this._node.addEventListener("keyup", this._thisNativeTextChangeHandler);
        }

        protected refresh(): void {
            if (this.willFresh) {
                this._node.value = this.text.value;
            }
        }

        private nativeTextChangeHandler(e) {
            this.willFresh = false;
            this.text.value = this._node.value;
            this.willFresh = true;
        }

        private _thisNativeTextChangeHandler;
    }
}