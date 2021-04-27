import {_decorator, js} from 'cc';
import BaseView from "./BaseView";

const {ccclass, property} = _decorator;
export class BaseScene extends BaseView {
    protected onLoad() {
        const className = js.getClassName(this);
        const MediatorName = `${className}Mediator`;
        super.initMediator(MediatorName);
    }

    protected onDestroy() {
        super.onDestroy();
    }
}
