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

import {_decorator, Component, game, input, Input, KeyCode} from "cc";
import {AppFacade} from "./core/AppFacade";
import {Mediator} from "../lib/puremvc";
import Browser from "./Browser";

const {ccclass, disallowMultiple, menu, executionOrder} = _decorator;
@ccclass("AppNode")
@disallowMultiple()
@menu('常住节点组件/AppNode')
@executionOrder(-10000)
export default class AppNode extends Component {
    // public static registerProxy<T extends Proxy>(proxy: Proxy): void {
    //     AppFacade.getInstance().registerProxy(proxy);
    // }
    //
    // public static retrieveProxy<T extends Proxy>(name: string, data?: any): Proxy {
    //     let proxy = AppFacade.getInstance().retrieveProxy(name);
    //     data && proxy.setData(data);
    //     return proxy;
    // }
    //
    // public static removeProxy(name: string): Proxy {
    //     return AppFacade.getInstance().removeProxy(name);
    // }

    public static bindMediator<V extends Component, T extends Mediator<V>>(mediator: T, component:V): void {
        let name = mediator.getMediatorName();
        if (AppFacade.getInstance().hasMediator(name)) {
            console.error(`Mediator ${mediator.getMediatorName()} 已经注册`);
        }
        console.log("注册", JSON.stringify(name));
        AppFacade.getInstance().registerMediator(mediator);
        component && mediator && mediator.setViewComponent(component);
    }

    // public static retrieveMediator<V, T extends Mediator<V>>(name: string,node:V): T {
    //     if (!AppFacade.getInstance().hasMediator(name)) {
    //         console.error(`Mediator ${name} 未注册`);
    //     }
    //     let mediator = AppFacade.getInstance().retrieveMediator<V, T>(name);
    //     node && mediator && mediator.setViewComponent(node);
    //     return mediator;
    // }

    public static unbindMediator<V extends Component, T extends Mediator<V>>(name: string): T {
        if (!AppFacade.getInstance().hasMediator(name)) {
            console.error(`Mediator ${name} 未注册`);
        }
        console.trace("取消注册", JSON.stringify(name));
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
            input.on(Input.EventType.KEY_DOWN, (event) => {
                switch (event.keyCode) {
                    case KeyCode.MOBILE_BACK:
                        game.end();
                        break;
                    default:
                }
            }, this);
        }
    }
}
