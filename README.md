# what
Without html application technology


##使用示例

效果演示:[https://osdg.github.io/what/examples/TextInput/Release/](https://osdg.github.io/what/examples/TextInput/Release/)

```typescript
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
```