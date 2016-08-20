/**
 * Created by plter on 8/10/16.
 */

namespace what.examples.renderapplication {

    export class Main extends Application {
        constructor() {
            super(document.querySelector("#application") as HTMLDivElement);

            var head = new H1(document.querySelector("#head") as HTMLElement, new Value("Hello World"));
            head.addClassName("h");
        }
    }

    new Main();
}