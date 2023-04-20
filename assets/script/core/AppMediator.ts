/**
 * Created by jsroads on 2020/6/11.2:42 下午
 * Note:
 */
import {NotificationConst} from "./NotificationConst";
import BaseMediator from "./BaseMediator";
import {cccExtensionClass} from "../../lib/ccc";
import { INotification } from "../../lib/puremvc";
@cccExtensionClass
export default class AppMediator extends BaseMediator {
    constructor(viewComponent?: any) {
        super(null, viewComponent);
        AppMediator.NAME = this.mediatorName;
    }
    protected lazyEventListener() {
        // this.facade.registerMediator(new MainSceneMediator());
    }
    public onRegister(): void {
        /*这个地方可以初始化加载场景*/
        // this.facade.registerMediator(new LoadSceneMediator());
        /*回调主场景初始化完毕*/
        let canvas = cc.director.getScene().getChildByName("Canvas");
        let component: any = canvas.getComponent("Helloworld");
        if (component && component.frameSuccess) {
            component.frameSuccess();
        } else {
            console.log("初始场景没有脚本组件！")
        }
    }

    public listNotificationInterests(): string[] {
        return [
            NotificationConst.SHOW_LOADING,
        ];
    }

    public handleNotification(notification: INotification): void {
        switch (notification.getName()) {
            case NotificationConst.SHOW_LOADING:
                this.lazyEventListener();
                break;
            default:
        }
    }
}