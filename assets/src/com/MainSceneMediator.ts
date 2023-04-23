/**
 * Created by jsroads on 2021/4/26.8:35 下午
 * Note:
 */
import {_decorator} from "cc";
import BaseMediator from "../base/BaseMediator";
import {INotification} from "../../lib/puremvc";
import {MainScene} from "db://assets/src/com/MainScene";

const {ccclass} = _decorator;
@ccclass("MainSceneMediator")
export default class MainSceneMediator extends BaseMediator<MainScene> {

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