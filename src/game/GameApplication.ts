/**
 * Created by plter on 8/12/16.
 */

namespace what {
    export class GameApplication extends AbsoluteLayout {

        constructor() {
            super();

            document.body.appendChild(this.htmlNode);
        }
    }
}