/**
 * Created by plter on 8/12/16.
 */

namespace what {
    export class HBox extends Box {

        constructor(tagNameOrTag?: string|HTMLDivElement) {
            super(tagNameOrTag);

            this.css("flex-direction", "row");
        }
    }
}