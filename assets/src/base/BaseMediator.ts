/**
 * Created by jsroads on 2020/6/18. 6:08 下午
 * Note:抽象类
 */
import {Component, js, Node} from 'cc';
import {Mediator} from "../../lib/puremvc";
// const {ccclass} = _decorator;
// @ccclass("BaseMediator")
export default abstract class BaseMediator extends Mediator<Node>{
     constructor(viewComponent: Node = null) {
        super("", viewComponent);
        this.mediatorName = <string>js.getClassName(this);
        const SelfCls = js.getClassByName(this.mediatorName);
        SelfCls["NAME"] = this.mediatorName;
    }

    public setViewComponent(viewComponent: Node) {
        super.setViewComponent(viewComponent);
        (viewComponent || this.viewComponent) && this.lazyEventListener && this.lazyEventListener();
    }

    public getViewComponent(): Node {
        return super.getViewComponent();
    }

    /**后续监听 必须 this.view 存在后*/
    protected abstract lazyEventListener(): void;

    /** 获得 this.view 挂载脚本*/
    protected getComponent<T extends Component>(className?: string): T | null {
        const componentName = className || this.viewComponent.name;
        let viewScript: T | null = this.viewComponent.getComponent(componentName) as T || this.viewComponent.getComponent(Component) as unknown as T;
        return viewScript;
    }

}