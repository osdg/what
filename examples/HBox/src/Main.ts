/**
 * Created by plter on 8/11/16.
 */

namespace what.examples {
    class Main extends Application {

        constructor() {
            super(document.querySelector("#app") as HTMLDivElement);

            var hbox = new HBox(document.querySelector(".hbox") as HTMLDivElement);

            var div = new Box(document.querySelector(".hbox .b1") as HTMLDivElement);
            div.flex("1");

            div = new Box(document.querySelector(".hbox .b2") as HTMLDivElement);
            div.flex("1");

            div = new Box(document.querySelector(".hbox .b3") as HTMLDivElement);
            div.css("width", "100px");
        }
    }

    new Main();
}