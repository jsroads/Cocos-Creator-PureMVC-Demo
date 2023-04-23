/**
 * Created by jsroads on 2021/4/23.2:10 下午
 * Note:
 */
import {js, Node} from "cc";
import AppNode from "../AppNode";
import BaseUI from "./BaseUI";
import {IBaseUI} from "../data/Inters";
import {Mediator} from "../../lib/puremvc";

export default abstract class BaseView extends BaseUI implements IBaseUI {
    private viewMessage: {mediatorName:string} = {mediatorName:""};
    public initData(data?: any, mediatorName?: string, ...params: any): void {
        super.initData(data, params);
        mediatorName && this.initMediator(mediatorName);
    }
    public initMediator(name: string) {
        this.viewMessage.mediatorName = name;
        let cls = js.getClassByName(name);
        AppNode.bindMediator(<Mediator<this>>new cls(this.node), this);
    }
    protected onDestroy() {
        super.onDestroy();
        if (this.viewMessage.mediatorName) {
            let mediator = AppNode.unbindMediator(this.viewMessage.mediatorName);
            mediator && mediator.setViewComponent(null);
        }
    }
}