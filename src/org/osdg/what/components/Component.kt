package org.osdg.what.components

import org.w3c.dom.Element
import kotlin.browser.document

/**
 * Created by plter on 7/29/16.
 */

open class Component(htmlTag: String, value: String? = null) : IContainer {

    private var _htmlTag: String? = null
    private var _htmlNode: Element? = null

    init {
        _htmlTag = htmlTag;

        _htmlNode = document.createElement(_htmlTag!!);
        _htmlNode.asDynamic()["whatComponent"] = this;

        if (value != null) {
            _htmlNode?.innerHTML = value;
        }
    }

    override fun addChild(child: Component) {
        getHtmlNode()?.appendChild(child.getHtmlNode()!!);
    }

    override fun removeChild(child: Component) {
        getHtmlNode()?.removeChild(child.getHtmlNode()!!);
    }

    override fun childrenCount(): Int? {
        return getHtmlNode()?.childElementCount;
    }

    override fun getChildAt(index: Int): Component {
        return getHtmlNode()?.children.asDynamic()[index]["whatComponent"];
    }

    fun getHtmlNode(): Element? {
        return _htmlNode;
    }

}