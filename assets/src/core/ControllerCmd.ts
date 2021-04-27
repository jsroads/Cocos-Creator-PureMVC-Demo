/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:注册Command ，建立 Command 与Notification 之间的映射
 */
import {INotification, SimpleCommand} from "../../lib/puremvc";
import {MsgConst} from "../config/MsgConst";
import LoginCmd from "../com/LoginCmd";


export default class ControllerCmd extends SimpleCommand {
    constructor() {
        super();
    }

    public execute(note: INotification): void {
        /**登录游戏*/
        this.facade.registerCommand(MsgConst.LOGIN_CMD, LoginCmd);
    }
}