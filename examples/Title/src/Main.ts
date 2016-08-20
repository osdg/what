/**
 * Created by plter on 8/10/16.
 */

namespace what.examples.title {

    export class Main extends Application {
        constructor() {
            super();

            var span = new Span();
            span.text.value = "Input text here and look at the title";
            this.addChild(span);

            var ti = new TextInput();
            this.addChild(ti);

            this.title = ti.text;
        }
    }

    new Main();
}