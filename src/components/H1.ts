/**
 * Created by plter on 8/11/16.
 */
namespace what {
    export class H1 extends TextView {

        constructor(tagNameOrTag: string|HTMLElement = "h1", value?: what.Value<string>) {
            super(tagNameOrTag, value);
        }
    }
}