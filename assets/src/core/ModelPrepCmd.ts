/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note: 创建Proxy 对象，并注册
 * Model的初始化通常比较简单：创建并注册在“开启”过程中需要用到的Proxy。
 * 这里Command并没有操作或初始任何的Model数据。Proxy 的职责才是取得，创建，和初始化数据对象。
 */
import {INotification, SimpleCommand} from "../../lib/puremvc";
import LoginProxy from "../com/LoginProxy";


export default class ModelPrepCmd extends SimpleCommand {
    constructor() {
        super();
    }

    //由MacroCommand调用
    public execute(note: INotification): void {
        /*登录 短连接*/
        this.facade.registerProxy(new LoginProxy());
    }
}