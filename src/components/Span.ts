/**
 * Created by plter on 8/12/16.
 */

namespace what {

    export class Span extends Text {

        constructor(value: what.Value<string>) {
            super("span", value);
        }
    }
}