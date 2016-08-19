/**
 * Created by plter on 8/10/16.
 */

namespace what.examples.textinput {

    export class Main extends Application {
        constructor() {
            super();

            var span = new Span(new Value("Please type here:"));
            this.addChild(span);

            var ti = new TextInput();
            this.addChild(ti);

            var span = new Span(ti.text);
            this.addChild(span);
        }
    }

    new Main();
}