/**
 * Created by plter on 6/21/16.
 */

namespace what {
    export class ContextMenu {

        private _node;
        private _ul;
        private static _currentMenu: ContextMenu;

        public static CSS_CLASS_NAME: string = "what-menu";

        constructor() {
            this._node = document.createElement("div");
            this._node.style.position = "fixed";
            this._node.className = ContextMenu.CSS_CLASS_NAME;

            this._ul = document.createElement("ul");
            this._node.appendChild(this._ul);
        }

        get node() {
            return this._node;
        }

        addItem(item: ContextMenuItem) {
            this._ul.appendChild(item.node);
        }

        showMenu(x, y) {
            ContextMenu.hideCurrentMenu();

            ContextMenu._currentMenu = this;
            this._node.style.display = "block";
            this._node.style.left = x + "px";
            this._node.style.top = y + "px";

            document.onmouseup = function (event) {
                if (event.button == 0) {
                    this.hide();
                }
            }.bind(this);
        }

        hide() {
            this._node.style.display = "none";
        }

        static hideCurrentMenu() {
            if (ContextMenu._currentMenu) {
                ContextMenu._currentMenu.hide();
            }
        }
    }
}

(function () {
    document.oncontextmenu = function (event) {
        what.ContextMenu.hideCurrentMenu();
    };
})();