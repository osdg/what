/**
 * Created by plter on 6/21/16.
 */

namespace what {
    export class ContextMenuItem {

        private _itemSelectedCallback;
        private _li;
        private _a;

        constructor(text: string, itemSelectedCallback?: ()=>void, href?: string, target?: string) {
            this._itemSelectedCallback = itemSelectedCallback;

            this._li = document.createElement("li");

            this._a = document.createElement("a");
            this._li.appendChild(this._a);
            this._a.href = href || "#";
            this._a.target = target || "_self";
            this._a.innerHTML = text;
            this._a.onclick = function (event) {
                if (this._itemSelectedCallback) {
                    this._itemSelectedCallback();
                }
            }.bind(this);
        }

        get node() {
            return this._li;
        }
    }
}