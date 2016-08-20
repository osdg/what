/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class Application extends Div {

        private windowResizeHandler;
        private titleChangeHandler;

        constructor(element?: HTMLDivElement) {
            super(element);

            this.initApplicationProperties();
            this.width = this.appWidth;
            this.height = this.appHeight;

            document.body.appendChild(this.htmlNode);
            this.resizeApplicationSize();

            this.application_createListeners();
            window.addEventListener("resize", this.windowResizeHandler);
        }

        private resizeApplicationSize() {
            this.appWidth.value = window.innerWidth;
            this.appHeight.value = window.innerHeight;
        }

        private initApplicationProperties() {
            document.body.style.margin = "0";
            document.body.style.overflow = "hidden";
        }

        get appWidth(): what.Value<number> {
            return this._appWidth;
        }

        get appHeight(): what.Value<number> {
            return this._appHeight;
        }

        private _appWidth: Value<number> = new Value(0);
        private _appHeight: Value<number> = new Value(0);

        private refreshTitle() {
            document.title = this.title.value;
        }

        private _title: Value<string>;

        get title(): what.Value<string> {
            return this._title;
        }

        set title(value: what.Value<string>) {
            if (this._title) {
                this._title.removeEventListener(ValueEvent.CHANGE, this.titleChangeHandler);
            }
            this._title = value;
            this._title.addEventListener(ValueEvent.CHANGE, this.titleChangeHandler);
            this.refreshTitle();
        }

        private application_createListeners(): void {
            this.windowResizeHandler = function (e: Event) {
                this.resizeApplicationSize();
            }.bind(this);

            this.titleChangeHandler = function (e: ValueEvent<string>) {
                this.refreshTitle();
            }.bind(this);
        }
    }
}