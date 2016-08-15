/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class Application extends Div {

        constructor() {
            super();
            this.initApplicationProperties();
            this.width = this.appWidth;
            this.height = this.appHeight;

            document.body.appendChild(this.htmlNode);
            this.resizeApplicationSize();

            window.addEventListener("resize", this.windowResizeHandler.bind(this));
        }

        private windowResizeHandler(event: Event) {
            this.resizeApplicationSize();
        }

        private resizeApplicationSize() {
            this.appWidth.data = window.innerWidth;
            this.appHeight.data = window.innerHeight;
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
    }
}