/**
 * Created by plter on 8/11/16.
 */

namespace what {
    export class Application extends Component {

        constructor() {
            super("div");
            this.initApplicationProperties();

            document.body.appendChild(this.htmlNode);
            this.resizeApplicationSize();

            window.addEventListener("resize", this.windowResizeHandler.bind(this));
        }

        private windowResizeHandler(event: Event) {
            this.resizeApplicationSize();
        }

        private resizeApplicationSize() {
            this.htmlNode.style.width = window.innerWidth + "px";
            this.htmlNode.style.height = window.innerHeight + "px";
        }

        private initApplicationProperties() {
            document.body.style.margin = "0";
            document.body.style.overflow = "hidden";
        }
    }
}