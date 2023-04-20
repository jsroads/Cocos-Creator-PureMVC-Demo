/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:注册Command ，建立 Command 与Notification 之间的映射
 */

import {NotificationConst} from "./NotificationConst";
import LoginCommand from "../controller/LoginCommand";
import {INotification, SimpleCommand} from "../../lib/puremvc";

export default class ControllerCommand extends SimpleCommand {
    constructor() {
        super();
    }
    public execute(note: INotification): void {
        /**登录游戏*/
        this.facade.registerCommand(NotificationConst.LOGIN, LoginCommand);
    }
}