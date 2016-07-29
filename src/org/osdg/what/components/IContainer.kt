package org.osdg.what.components

/**
 * Created by plter on 7/29/16.
 */
interface IContainer {
    fun addChild(child: Component)
    fun removeChild(child: Component)
    fun childrenCount(): Int?
    fun getChildAt(index: Int): Component
}