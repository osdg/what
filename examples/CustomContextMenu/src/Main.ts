/**
 * Created by plter on 8/10/16.
 */

namespace what.examples.helloworld {

    export class Main extends Application {
        constructor() {
            super();

            this.useCustomContextMenu = true;

            this.customContextMenu = new ContextMenu();
            this.customContextMenu.addItem(new ContextMenuItem("Hello"));
            this.customContextMenu.addItem(new ContextMenuItem("World"));
            this.customContextMenu.addItem(new ContextMenuItem("Item"));
        }
    }

    new Main();
}