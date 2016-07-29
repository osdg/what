package org.osdg.what.components

import kotlin.browser.document

/**
 * Created by plter on 7/29/16.
 */
open class Application : IContainer {
    override fun addChild(child: Component) {
        getRootContainer().addChild(child);
    }

    override fun removeChild(child: Component) {
        getRootContainer().removeChild(child);
    }

    override fun childrenCount(): Int? {
        return getRootContainer().childrenCount();
    }

    override fun getChildAt(index: Int): Component {
        return getRootContainer().getChildAt(index);
    }

    fun getRootContainer(): Box {
        return _rootContainer;
    }

    private val _rootContainer = Box();

    init {
        document.body?.appendChild(_rootContainer.getHtmlNode()!!);
    }
}