/**
 * Created by jsroads on 2020/6/11.3:00 下午
 * Note:
 */
import {_decorator} from 'cc';
import BaseProxy from "./BaseProxy";
import {MsgConst} from "../config/MsgConst";

const {ccclass, menu} = _decorator;
@ccclass("LoginProxy")
export default class LoginProxy extends BaseProxy {
    constructor(data?: any) {
        super(data);
        LoginProxy.NAME = this.proxyName;
    }

    public login(data?: any) {
        console.log("登陆成功！")
        this.sendNotification(MsgConst.LOGIN_SUCCESS,"LOGIN_OK")
        // this.sendNotification(MsgConst.LOGIN_FAIL,"LOGIN_FAIL")
    }
}
