import {js} from "cc";
import BaseView from "./BaseView";

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
