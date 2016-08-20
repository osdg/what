/**
 * Created by plter on 8/12/16.
 */

namespace what {

    export class Span extends TextView {

        constructor(value: what.Value<string> = new Value("")) {
            super("span", value);
        }
    }
}