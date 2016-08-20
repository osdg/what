/**
 * Created by plter on 8/10/16.
 */

namespace what.examples.helloworld {

    export class Main extends Application {
        constructor() {
            super(document.querySelector("#application") as HTMLDivElement);

            var h1 = new Component("h1");
            h1.innerHTML = "Hello World";
            h1.css({left: "10%", top: "10%", position: "absolute"});
            this.addChild(h1);
        }
    }

    new Main();
}