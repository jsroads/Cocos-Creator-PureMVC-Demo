/**
 * Created by jsroads on 2020/6/11.2:51 下午
 * Note:
 */
import {_decorator, js} from "cc";
import {IProxy, Proxy} from "../../lib/puremvc";

const {ccclass, property, menu} = _decorator;
@ccclass("BaseProxy")
export default abstract class BaseProxy extends Proxy implements IProxy {
    public static NAME: string = "BaseProxy";

    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
        this.proxyName = js.getClassName(this);
    }

    public send(requestData: any) {

    }

    public failMessage(res: any) {
        console.log("登录失败", res);
    }
}