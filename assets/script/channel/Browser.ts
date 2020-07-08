/**
 * Created by jsroads on 2020/6/11.7:25 下午
 * Note:
 */
export default class Browser {
    constructor() {
        if (cc.sys.isNative) {
            console.log("本地平台");
            if (cc.sys.isMobile) {
                console.log("本地移动平台");
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    console.log("本地Android平台");
                    Browser.onAndroid = true;
                    return true;
                } else if (cc.sys.os == cc.sys.OS_IOS) {
                    console.log("本地ios平台");
                    Browser.onIOS = true;
                    return false;
                }
            } else {
                console.log("Web平台");
                return false;
            }
        } else {
            console.log("未知Web平台");
            return false;
        }
    }

    //本地时间和服务器时间间隔
    public static timeInterval: number;


    public static get now(): number {
        return cc.sys.now() + Browser.timeInterval * 1000;
    }

    public static get clientWidth(): number {
        return cc.view.getCanvasSize().width;
    }

    public static get clientHeight(): number {
        return cc.view.getCanvasSize().height;
    }

    public static get width(): number {
        return cc.view.getDesignResolutionSize().width;
    }

    public static get height(): number {
        return Browser.width * (Browser.clientHeight / Browser.clientWidth);
    }

    public static get browserType(): string {
        if (Browser.onAndroid) {
            return "android";//android 平台
        } else if (Browser.onIOS) {
            return "ios";//ios 平台
        } else if (Browser.onMiniGame) {
            return "wx";//小游戏 平台修改这里
        } else {
            return "web";//默认 web 平台
        }
    }


    /** 是否小游戏环境（微信，头条，QQ，百度，Vivo，OPPO ）。*/
    public static get onMiniGame(): boolean {
        return cc.sys.platform === cc.sys.WECHAT_GAME;
        // return cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME;
    }

    /** 是否用户id和密码登录 环境（待定）。*/
    public static onUserKey: boolean = false;
    /** 是否Android 环境。*/
    public static onAndroid:boolean = false;
    /** 是否iOS 环境。*/
    public static onIOS:boolean = false;
}

// if (cc.sys.isNative) {
//     cc.log("本地平台");
//     if (cc.sys.isMobile) {
//         cc.log("本地移动平台");
//         if (cc.sys.os == cc.sys.OS_ANDROID) {
//             cc.log("本地Android平台");
//         } else if (cc.sys.os == cc.sys.OS_IOS) {
//             cc.log("本地ios平台");
//         }
//     } else {
//         cc.log("Web平台");
//     }
// }