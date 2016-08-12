/**
 * Created by plter on 8/12/16.
 */

namespace what {
    export class VBox extends Box {

        constructor() {
            super();

            this.css("flex-direction", "column");
        }
    }
}