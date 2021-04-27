/**
 * Created by jsroads on 2020/6/18. 6:08 下午
 * Note:抽象类
 */
import {_decorator, Component, js, Node} from 'cc';
import {Mediator} from "../../lib/puremvc";

const {ccclass, menu} = _decorator;
@ccclass("BaseMediator")
export default abstract class BaseMediator extends Mediator {
    protected constructor(node?: Node) {
        super("", node);
        this.mediatorName = js.getClassName(this);
    }

    public setViewComponent<T extends Node>(node: T) {
        super.setViewComponent(node);
        (node || this.viewComponent) && this.lazyEventListener && this.lazyEventListener();
    }

    public getViewComponent<T extends Node>(): T {
        return <T>super.getViewComponent();
    }

    /**后续监听 必须 this.view 存在后*/
    protected abstract lazyEventListener(): void;

    /** 获得 this.view 挂载脚本*/
    protected getComponent(className?: string): Component {
        let viewScript: Component = <Component>this.viewComponent.getComponent(className || this.viewComponent.name) || this.viewComponent.getComponent(Component)
        return viewScript;
    }
}