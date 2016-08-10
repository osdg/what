/**
 * Created by plter on 8/10/16.
 */

namespace what {
    export class Component {

        _htmlNode;

        constructor(tagName: string) {
            this._htmlNode = document.createElement(tagName);
        }

        get htmlNode() {
            return this._htmlNode;
        }
    }
}