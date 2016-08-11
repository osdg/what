/**
 * Created by plter on 8/10/16.
 */

namespace what {
    export class Component {

        private _htmlNode;

        constructor(tagName: string) {
            this._htmlNode = document.createElement(tagName);
        }

        get htmlNode() {
            return this._htmlNode;
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
            return this.htmlNode;
        }
    }
}