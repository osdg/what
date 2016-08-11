# what
Without html application technology


##使用示例
```typescript
namespace what.examples {
    class Main extends Application {

        private _time: Value<string>;
        private _h1: H1;

        constructor() {
            super();

            this._time = new Value("00:00:00");
            this._h1 = new H1(this._time);
            this.addChild(this._h1);

            setInterval(this.timerHandler.bind(this), 1000);
        }

        private timerHandler() {
            var date = new Date();
            this._time.data = this.timeFormat(date.getHours()) + ":" + this.timeFormat(date.getMinutes()) + ":" + this.timeFormat(date.getSeconds());
        }

        private timeFormat(num): string {
            return (num < 10 ? "0" : "") + num;
        }
    }

    new Main();
}
```