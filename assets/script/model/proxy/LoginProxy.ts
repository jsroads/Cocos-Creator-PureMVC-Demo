/**
 * Created by jsroads on 2020/6/11.3:00 下午
 * Note:
 */
import BaseProxy from "./BaseProxy";
import {NotificationConst} from "../../core/NotificationConst";
import {cccExtensionClass} from "../../../lib/ccc";

@cccExtensionClass
export default class LoginProxy extends BaseProxy {
    constructor(proxyName?: string, data?: any) {
        super(null, data);
        LoginProxy.NAME = this.proxyName;
    }
    public login(data) {
        this.sendNotification(NotificationConst.LOGIN_SUCCESS);
    }
}
