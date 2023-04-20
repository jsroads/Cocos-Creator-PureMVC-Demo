/**
 * Created by jsroads on 2020/6/17.3:27 下午
 * Note:
 */
import LoginProxy from "../model/proxy/LoginProxy";
import {INotification, SimpleCommand} from "../../lib/puremvc";

export default class LoginCommand extends SimpleCommand {
    constructor() {
        super();
    }
    public execute(notification: INotification): void {
        let proxy: LoginProxy = <LoginProxy>this.facade.retrieveProxy(LoginProxy.NAME);
        proxy.login(notification.getBody());
    }
}