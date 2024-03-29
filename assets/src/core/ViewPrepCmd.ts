/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:创建Mediator，并把它注册到View.
 */
import AppMediator from "../AppMediator";
import {INotification, SimpleCommand} from "../../lib/puremvc";

export default class ViewPrepCmd extends SimpleCommand {
    public constructor() {
        super();
    }

    public execute(message: INotification): void {
        //游戏主舞台
        this.facade.registerMediator(new AppMediator(message.getBody()));
    }
}