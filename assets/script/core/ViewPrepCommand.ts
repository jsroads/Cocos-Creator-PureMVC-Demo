/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:创建Mediator，并把它注册到View.
 */
import SimpleCommand = puremvc.SimpleCommand;
import AppMediator from "./AppMediator";

export default class ViewPrepCommand extends SimpleCommand {
    public constructor() {
        super();
    }
    public execute(notification: puremvc.INotification): void {
        //游戏主舞台
        this.facade.registerMediator(new AppMediator(notification.getBody()));
    }
}