/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class Application extends Div {

        constructor() {
            super();
            this.initApplicationProperties();

            document.body.appendChild(this.htmlNode);
            this.resizeApplicationSize();

            window.addEventListener("resize", this.windowResizeHandler.bind(this));
        }

        private windowResizeHandler(event: Event) {
            this.resizeApplicationSize();
        }

        private resizeApplicationSize() {
            this.css("width", window.innerWidth + "px");
            this.css("height", window.innerHeight + "px");
        }

        private initApplicationProperties() {
            document.body.style.margin = "0";
            document.body.style.overflow = "hidden";
        }
    }
}