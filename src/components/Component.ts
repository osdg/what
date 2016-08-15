/**
 * Created by plter on 8/10/16.
 */

namespace what {
    export class Component {

        private static KEY_WHAT_COMPONENT: string = "whatComponent";
        private _htmlNode: HTMLElement;

        constructor(tagName: string) {
            //init listeners
            this.thisWidthValueChangeHandler = this.widthValueChangeHandler.bind(this);
            this.thisHeightValueChangeHandler = this.heightValueChangeHandler.bind(this);

            this._htmlNode = document.createElement(tagName);
            this._htmlNode[Component.KEY_WHAT_COMPONENT] = this;
        }

        get htmlNode(): HTMLElement {
            return this._htmlNode;
        }

        get parent(): Component {
            return this.htmlNode.parentNode[Component.KEY_WHAT_COMPONENT];
        }

        /**
         * Set the css styles
         * @param {String|Object} nameOrStyles
         * @param {String} value
         */
        css(nameOrStyles, value?) {
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


        private widthValueChangeHandler(e: ValueEvent<number>) {
            this.css("width", this.width.data + "px");
        }

        private thisWidthValueChangeHandler: (e: ValueEvent<number>)=>void;

        private heightValueChangeHandler(e: ValueEvent<number>) {
            this.css("height", this.height.data + "px");
        }

        private thisHeightValueChangeHandler: (e: ValueEvent<number>)=>void;


        get width(): what.Value<number> {
            return this._width;
        }

        set width(value: what.Value<number>) {
            if (this._width) {
                this._width.removeEventListener(ValueEvent.CHANGE, this.thisWidthValueChangeHandler);
            }
            this._width = value;
            this._width.addEventListener(ValueEvent.CHANGE, this.thisWidthValueChangeHandler);
            this.thisWidthValueChangeHandler(null);
        }

        get height(): what.Value<number> {
            return this._height;
        }

        set height(value: what.Value<number>) {
            if (this._height) {
                this._height.removeEventListener(ValueEvent.CHANGE, this.thisHeightValueChangeHandler);
            }
            this._height = value;
            this._height.addEventListener(ValueEvent.CHANGE, this.thisHeightValueChangeHandler);
            this.thisHeightValueChangeHandler(null);
        }

        private _width: Value<number> = new Value(0);
        private _height: Value<number> = new Value(0);
    }
}