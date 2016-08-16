/**
 * Created by plter on 8/11/16.
 */

namespace what.examples {
    class Main extends Application {

        constructor() {
            super();

            var hbox = new HBox();
            hbox.css({height: "200px"});
            this.addChild(hbox);

            var div = new Box();
            div.flex("1");
            div.css({backgroundColor: "red", height: "100%"});
            hbox.addChild(div);

            div = new Box();
            div.flex("1");
            div.css({backgroundColor: "green", height: "100%"});
            hbox.addChild(div);

            div = new Box();
            div.css({backgroundColor: "blue", width: "50px", height: "100%"});
            hbox.addChild(div);
        }
    }

    new Main();
}