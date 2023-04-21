/**
 * Created by jsroads on 2021/4/23.2:10 下午
 * Note:
 */
import {js,Node} from "cc";
import AppNode from "../AppNode";
import BaseUI from "./BaseUI";
import {IBaseUI} from "../data/Inters";
import {Mediator} from "../../lib/puremvc";
export default abstract class BaseView extends BaseUI implements IBaseUI {
    private viewMsg: any = {};
    public initData(data?: any, mediatorName?: string, ...params: any): void {
        super.initData(data, params);
        mediatorName && this.initMediator(mediatorName);
    }
    public initMediator(name: string) {
        this.viewMsg.mediatorName = name;
        let cls = js.getClassByName(name);
        AppNode.registerMediator(<Mediator<Node>>new cls(this.node), this.node);
    }
    protected onDestroy() {
        super.onDestroy();
        if (this.viewMsg.mediatorName) {
            let mediator = AppNode.removeMediator(this.viewMsg.mediatorName);
            mediator && mediator.setViewComponent(null);
        }
    }
}