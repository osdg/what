package org.osdg.what.demos.helloworld

import org.osdg.what.components.Application
import org.osdg.what.components.Component

/**
 * Created by plter on 7/29/16.
 */

class HelloWorld() : Application() {
    init {
        val c = Component("h1", "Hello World");
        c.css("color", "#ff0000");
        addChild(c);
    }
}


fun main(args: Array<String>) {
    HelloWorld();
}