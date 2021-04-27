/**
 * Created by jsroads on 2020/6/17.3:27 下午
 * Note:
 */
import {_decorator} from "cc";
import {INotification, SimpleCommand} from "../../lib/puremvc";
import LoginProxy from "./LoginProxy";

const {ccclass, property, menu} = _decorator;
@ccclass("LoginCmd")
export default class LoginCmd extends SimpleCommand {
    constructor() {
        super();
    }

    public execute(message: INotification): void {
        /*登录*/
        let loginProxy: LoginProxy = <LoginProxy>this.facade.retrieveProxy(LoginProxy.NAME);
        loginProxy.login(message.getBody());

    }
}