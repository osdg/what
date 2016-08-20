/**
 * Created by plter on 8/10/16.
 */

namespace what {
    export class Component {

        private static KEY_WHAT_COMPONENT: string = "whatComponent";
        private _htmlNode: HTMLElement;
        private onContextMenuHandler;
        private heightValueChangeHandler;
        private widthValueChangeHandler;

        constructor(tagNameOrTag: string|HTMLElement) {

            this.component_createListeners();

            switch (typeof tagNameOrTag) {
                case "string":
                    this._htmlNode = document.createElement(tagNameOrTag as string);
                    break;
                case "object":
                    if (tagNameOrTag instanceof HTMLElement) {
                        this._htmlNode = tagNameOrTag;
                    } else {
                        throw new Error("Argument type error");
                    }
                    break;
                default:
                    throw new Error("Argument type error");
            }

            this._htmlNode[Component.KEY_WHAT_COMPONENT] = this;
        }

        public get htmlNode(): HTMLElement {
            return this._htmlNode;
        }

        public get parent(): Component {
            return this.htmlNode.parentNode ? this.htmlNode.parentNode[Component.KEY_WHAT_COMPONENT] : null;
        }

        /**
         * Set the css styles
         * @param {string|Object} nameOrStyles
         * @param {string} value
         */
        css(nameOrStyles: string|any, value?: string) {
            switch (typeof nameOrStyles) {
                case "string":
                    this.htmlNode.style[nameOrStyles] = value;
                    break;
                case "object":
                    for (var k in nameOrStyles) {
                        this.css(k, nameOrStyles[k]);
                    }
                    break;
                default:
                    throw new Error("Invalid argument,the first argument must be a string or an object");
            }
        }

        addChild(child: Component) {
            this.htmlNode.appendChild(child.htmlNode);
        }

        removeChild(child: Component) {
            this.htmlNode.removeChild(child.htmlNode);
        }

        set innerHTML(value: string) {
            this.htmlNode.innerHTML = value;
        }

        get innerHTML(): string {
            return this.htmlNode.innerHTML;
        }

        get width(): what.Value<number> {
            return this._width;
        }

        set width(value: what.Value<number>) {
            if (this._width) {
                this._width.removeEventListener(ValueEvent.CHANGE, this.widthValueChangeHandler);
            }
            this._width = value;
            this._width.addEventListener(ValueEvent.CHANGE, this.widthValueChangeHandler);
            this.widthValueChangeHandler(null);
        }

        get height(): what.Value<number> {
            return this._height;
        }

        set height(value: what.Value<number>) {
            if (this._height) {
                this._height.removeEventListener(ValueEvent.CHANGE, this.heightValueChangeHandler);
            }
            this._height = value;
            this._height.addEventListener(ValueEvent.CHANGE, this.heightValueChangeHandler);
            this.heightValueChangeHandler(null);
        }

        private _width: Value<number> = new Value(0);
        private _height: Value<number> = new Value(0);


        get useCustomContextMenu(): boolean {
            return this._useCustomContextMenu;
        }

        set useCustomContextMenu(value: boolean) {
            this._useCustomContextMenu = value;
            if (this._useCustomContextMenu) {
                this.htmlNode.addEventListener("contextmenu", this.onContextMenuHandler);
            } else {
                this.htmlNode.removeEventListener("contextmenu", this.onContextMenuHandler);
            }
        }

        private _useCustomContextMenu: boolean = false;

        private _customContextMenu: ContextMenu;

        get customContextMenu(): ContextMenu {
            return this._customContextMenu;
        }

        set customContextMenu(value: ContextMenu) {
            if (this._customContextMenu) {
                document.body.removeChild(this._customContextMenu.node);
            }
            this._customContextMenu = value;

            if (this._customContextMenu) {
                document.body.appendChild(this._customContextMenu.node);
                this._customContextMenu.hide();
            }
        }

        private component_createListeners() {
            this.onContextMenuHandler = function (event) {
                if (this._useCustomContextMenu) {
                    event.preventDefault();
                    event.stopPropagation();

                    if (this.customContextMenu) {
                        this.customContextMenu.showMenu(event.clientX, event.clientY);
                    }
                }
            }.bind(this);

            this.heightValueChangeHandler = function (e) {
                this.css("height", this.height.value + "px");
            }.bind(this);

            this.widthValueChangeHandler = function (e) {
                this.css("width", this.width.value + "px");
            }.bind(this);
        }
    }
}