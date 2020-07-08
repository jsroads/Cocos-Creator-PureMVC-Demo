import Mediator = puremvc.Mediator;
import {cccExtensionClass} from "../../lib/ccc";
/**
 * Created by jsroads on 2020/6/18. 6:08 下午
 * Note:抽象类
 */
@cccExtensionClass
export default abstract class BaseMediator extends Mediator  {
    constructor(mediatorName?: string, viewComponent?: any) {
        super(mediatorName, viewComponent);
        this.mediatorName = cc.js.getClassName(this);
    }
    setViewComponent(viewComponent: cc.Node) {
        super.setViewComponent(viewComponent);
        viewComponent&&this.lazyEventListener&&this.lazyEventListener();
    }
    getViewComponent(): cc.Node {
        return <cc.Node>super.getViewComponent();
    }
    /**后续监听 必须 this.viewComponent 存在后*/
    protected abstract lazyEventListener():void;
}