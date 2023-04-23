/**
 * Created by jsroads on 2021/4/26.8:35 下午
 * Note:
 */
import {_decorator} from "cc";
import BaseMediator from "../base/BaseMediator";
import {MsgConst} from "../config/MsgConst";
import {INotification} from "../../lib/puremvc";
import {LoadScene} from "db://assets/src/com/LoadScene";

const {ccclass, menu} = _decorator;
@ccclass("LoadSceneMediator")
export default class LoadSceneMediator extends BaseMediator<LoadScene> {
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
                // let component = this.getComponent<LoadScene>("LoadScene")
                this.viewComponent.loadMainScene();
                break;
            default:
        }
    }

    protected login() {
        // this.facade.registerMediator(new MainSceneMediator());
    }

    protected lazyEventListener(): void {
        this.entity.once("init_game", (data: any) => {
            console.log("开始准备其他的数据：" + data)
            this.sendNotification(MsgConst.LOADSCENE_START_COMPLETE)
        })
        this.entity.once("login_game", (data: any) => {
            console.log("登陆数据：" + data);
            this.sendNotification(MsgConst.LOGIN_CMD,data)
        })
    }
}