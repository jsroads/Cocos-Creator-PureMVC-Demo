/**
 * Created by jsroads on 2021/4/26.8:35 下午
 * Note:
 */
import {_decorator, Node} from 'cc';
import BaseMediator from "../base/BaseMediator";
import {INotification} from "../../lib/puremvc";

const {ccclass, menu} = _decorator;
@ccclass("MainSceneMediator")
export default class MainSceneMediator extends BaseMediator {
    constructor(node?: Node) {
        super(node);
        MainSceneMediator.NAME = this.mediatorName;
    }

    public onRegister(): void {
        console.log("MainSceneMediator 初始化完毕");
    }

    public listNotificationInterests(): string[] {
        return [
        ];
    }

    public handleNotification(message: INotification): void {
        switch (message.getName()) {
            default:
        }
    }


    protected lazyEventListener(): void {
       console.log("MainSceneMediator 需要处理的监听等")
    }
}