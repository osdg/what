/**
 * Created by plter on 8/12/16.
 */

namespace what {
    export class Box extends Div {

        constructor() {
            super();

            this.css("display", "flex");
        }

        flex(value: string) {
            this.css("flex", value);
        }
    }
}