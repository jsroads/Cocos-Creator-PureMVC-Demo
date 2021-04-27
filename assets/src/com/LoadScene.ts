/**
 * Created by jsroads on 2021/4/26.8:35 下午
 * Note:
 */
import {_decorator, director, EventTouch, SceneAsset} from 'cc';
import {BaseScene} from "../base/BaseScene";

const {ccclass, property} = _decorator;

@ccclass('LoadScene')
export class LoadScene extends BaseScene {
    protected onLoad() {
        super.onLoad();
    }

    protected start() {
        console.log("首个场景初始化完毕")
        this.node.emit("init_game", "OK");
        director.preloadScene("main", (completedCount: number, totalCount: number, item: any) => {
        }, (error: null | Error, sceneAsset?: SceneAsset) => {
            console.log(" main场景预加载完毕");
        });
    }

    private loginHandler(touch: EventTouch, data: string) {
        this.node.emit("login_game", "123456789");
    }

    public loadMainScene(){
        director.loadScene("main", (res) => {
            console.log("load 转场 进入场景 main");
        });
    }
    protected onDestroy() {
        super.onDestroy();
    }
}