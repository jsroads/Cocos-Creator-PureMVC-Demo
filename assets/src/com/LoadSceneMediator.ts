/**
 * Created by jsroads on 2021/4/26.8:35 下午
 * Note:
 */
import {_decorator, Node} from 'cc';
import BaseMediator from "../base/BaseMediator";
import {MsgConst} from "../config/MsgConst";
import {INotification} from "../../lib/puremvc";

const {ccclass, menu} = _decorator;
@ccclass("LoadSceneMediator")
export default class LoadSceneMediator extends BaseMediator {
    constructor(node?: Node) {
        super(node);
        LoadSceneMediator.NAME = this.mediatorName;
    }

    public onRegister(): void {
        console.log("LoadSceneMediator 初始化完毕");
    }

    public listNotificationInterests(): string[] {
        return [
            MsgConst.LOGIN_SUCCESS,
        ];
    }

    public handleNotification(message: INotification): void {
        switch (message.getName()) {
            case MsgConst.LOGIN_SUCCESS:
                let component = this.viewComponent.getComponent("LoadScene")
                component.loadMainScene();
                break;
            default:
        }
    }

    protected login() {
        // this.facade.registerMediator(new MainSceneMediator());
    }

    protected lazyEventListener(): void {
        this.viewComponent.once("init_game", (data: any) => {
            console.log("开始准备其他的数据：" + data)
            this.sendNotification(MsgConst.LOADSCENE_START_COMPLETE)
        })
        this.viewComponent.once("login_game", (data: any) => {
            console.log("登陆数据：" + data);
            this.sendNotification(MsgConst.LOGIN_CMD,data)
        })
    }
}