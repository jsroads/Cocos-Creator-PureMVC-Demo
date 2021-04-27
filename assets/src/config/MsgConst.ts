/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note: 游戏消息集合
 */

export enum MsgConst {
    /**游戏框架启动*/
    START_UP = "start_up",
    /**显示加载场景*/
    LOADSCENE_START_COMPLETE = "loadscene_start_complete",
    /** HTTP 登录游戏*/
    LOGIN_CMD = "login_cmd",
    //---------------------cmd 结束----------------
    /**HTTP登录游戏成功*/
    LOGIN_SUCCESS = "login_success",
    /**登录游戏失败*/
    LOGIN_FAIL = "login_fail",
}
