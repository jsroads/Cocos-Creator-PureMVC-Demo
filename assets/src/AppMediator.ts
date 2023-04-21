/**
 * Created by jsroads on 2020/6/11.2:42 下午
 * Note:
 */
import {_decorator, Node} from 'cc';
import {MsgConst} from "./config/MsgConst";
import BaseMediator from "./base/BaseMediator";
import {INotification} from "../lib/puremvc";

const {ccclass} = _decorator;
@ccclass("AppMediator")
export default class AppMediator extends BaseMediator {
    constructor(node?: Node) {
        super(node);
    }

    public onRegister(): void {
        console.log("puremvc 初始化完毕");
    }
    public listNotificationInterests(): string[] {
        return [
            MsgConst.LOADSCENE_START_COMPLETE,
        ];
    }

    public handleNotification(message: INotification): void {
        switch (message.getName()) {
            case MsgConst.LOADSCENE_START_COMPLETE:
                this.lazyEventListener();
                break;
            default:
        }
    }
    protected lazyEventListener() {
        //因为AppMediator 注册 是传统方式 故而不会主动调用 lazyEventListener
        console.log("这里可以延迟监听Node节点事件或者注册其他的Mediator")
    }
}