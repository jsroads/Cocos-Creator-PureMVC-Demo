/**
 * Created by jsroads on 2020/6/11.2:51 下午
 * Note:
 */
import Proxy = puremvc.Proxy;
import IProxy = puremvc.IProxy;
import {cccExtensionClass} from "../../../lib/ccc";
import {Handler} from "../../utils/Handler";
@cccExtensionClass
export default abstract class BaseProxy extends Proxy implements IProxy {
    public static NAME: string = "BaseProxy";
    constructor(proxyName?: string, data?: any) {
        super(proxyName, data);
        this.proxyName = cc.js.getClassName(this);
    }
    public send(url: string, headers, params, cb: Handler) {
        /*此处设计Http逻辑省略  直接返回成功*/
        cb.runWith({status:"OK"})
    }
}