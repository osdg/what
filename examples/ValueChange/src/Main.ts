/**
 * Created by plter on 8/11/16.
 */

namespace what.examples {
    class Main extends Application {

        private _value: Value<string> = new Value("Start");
        private _h1: H1;

        constructor() {
            super();

            this._h1 = new H1(this._value);
            this.addChild(this._h1);

            var count = 0;
            setInterval(function () {
                count++;

                this._value.value = "" + count;
            }.bind(this), 100);
        }
    }

    new Main();
}