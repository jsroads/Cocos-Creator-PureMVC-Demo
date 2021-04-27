/**
 * Created by jsroads on 2021/03/01.5:58 下午
 * Note:
 */
/**
 *
 *
 *                                                    __----~~~~~~~~~~~------___
 *                                   .  .   ~~//====......          __--~ ~~
 *                   -.            \_|//     |||\\  ~~~~~~::::... /~
 *                ___-==_       _-~o~  \/    |||  \\            _/~~-
 *        __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *    _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *  .~       .~       |   \\ -_    /  /-   /   ||      \   /
 * /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 * |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *          '         ~-|      /|    |-~\~~       __--~~
 *                      |-~~-_/ |    |   ~\_   _-~            /\
 *                           /  \     \__   \/~                \__
 *                       _--~ _/ | .-~~____--~-/                  ~~==.
 *                      ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                 -_     ~\      ~~---l__i__i__i--~~_/
 *                                 _-~-__   ~)  \--______________--~~
 *                               //.-~~~-~_--~- |-------~~~~~~~~
 *                                      //.-~~~--\
 *                               神兽保佑
 *                              代码无BUG!
 */

import {_decorator, Component, game, macro, Node, SystemEvent, systemEvent} from "cc";
import {AppFacade} from "./core/AppFacade";
import {IMediator, IProxy} from "../lib/puremvc";
import Browser from "./Browser";

const {ccclass, disallowMultiple, menu, executionOrder} = _decorator;
@ccclass("AppNode")
@disallowMultiple()
@menu('常住节点组件/AppNode')
@executionOrder(-10000)
export default class AppNode extends Component {
    public static registerProxy(proxy: IProxy): void {
        AppFacade.getInstance().registerProxy(proxy);
    }

    public static retrieveProxy(name: string, data?: any): IProxy {
        let proxy = AppFacade.getInstance().retrieveProxy(name);
        data && proxy.setData(data);
        return proxy;
    }

    public static removeProxy(name: string): IProxy {
        return AppFacade.getInstance().removeProxy(name);
    }

    public static registerMediator(mediator: IMediator, node?: Node): void {
        let name = mediator.getMediatorName();
        if (AppFacade.getInstance().hasMediator(name)) {
            console.error(`Mediator ${mediator.getMediatorName()} 已经注册`);
        }
        console.log("注册", JSON.stringify(name));
        AppFacade.getInstance().registerMediator(mediator);
        node && mediator && mediator.setViewComponent(node);
    }

    public static retrieveMediator(name: string, node?: Node): IMediator {
        if (!AppFacade.getInstance().hasMediator(name)) {
            console.error(`Mediator ${name} 未注册`);
        }
        let mediator = AppFacade.getInstance().retrieveMediator(name);
        node && mediator && mediator.setViewComponent(node);
        return mediator;
    }

    public static removeMediator(name: string): IMediator {
        if (!AppFacade.getInstance().hasMediator(name)) {
            console.error(`Mediator ${name} 未注册`);
        }
        console.log("取消注册", JSON.stringify(name));
        return AppFacade.getInstance().removeMediator(name);
    }

    public static sendNotification(name: string, body?: any, type?: string): void {
        AppFacade.getInstance().sendNotification(name, body, type);
    }

    protected onLoad() {
        /** 添加当前节点为常住节点*/
        game.addPersistRootNode(this.node);
        // cc.game.removePersistRootNode(this.node);
        // setDisplayStats(true);
        /*平台初始化判断*/
        Browser.init();
        console.log("puremvc框架开始初始化...");
        AppFacade.getInstance().startup(this);
    }

    protected async start() {
        if (Browser.onAndroid) {
            console.log("Android添加监听返回键")
            systemEvent.on(SystemEvent.EventType.KEY_DOWN, (event) => {
                switch (event.keyCode) {
                    case macro.KEY.back:
                        game.end();
                        break;
                    default:
                }
            }, this);
        }
    }
}
