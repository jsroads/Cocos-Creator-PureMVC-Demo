/**
 * Created by jsroads on 2020/6/18. 2:48 下午
 * Note:
 */
import Browser from "../channel/Browser";

export default class TimeUtils {
    /**东八区 北京*/
    static BEI_JING:number = 8 * 60 * 60 * 1000;
    /** 当前时区 和 东八区 北京 相等*/
    static timezone = -1 * new Date(Browser.now).getTimezoneOffset() / 60;
    /**一天的毫秒数*/
    static ONE_DAY_MILLISECOND:number = 1 * 24 * 60 * 60 * 1000;
    /**时间格式*/
    static leftStr:string = "hh:mm:ss";
    /**
     * 根据秒数 获得 "mm:ss"格式的倒计时
     * @param second
     * @returns {string}
     */
    static getRemainTimeBySecond(second:number):string {
        return this.formatBySecond(second, "mm:ss");
    }

    /**
     * 时间转成 对应的格式  默认 hh:mm:ss
     * @param second 秒数
     * @param format  hh:mm:ss 或者  hh:mm 或者  mm:ss
     * @returns {string}
     */
    static formatBySecond(second:number, format:string):string {
        this.leftStr = format || this.leftStr;
        if(second<=0)return this.leftStr.replace('mm', "00")
            .replace('mm', "00")
            .replace('ss', "00");
        let h = Math.floor(second / 3600);
        let m = Math.floor((second % 3600) / 60);
        let s = Math.floor(second % 60);
        return this.leftStr.replace('hh', ('0' + (h + "")).slice(-2))
            .replace('mm', ('0' + (m + "")).slice(-2))
            .replace('ss', ('0' + (s + "")).slice(-2))
    }

    //获取本周最小时间戳
    getCurrentWeekMinTimeStamp() {
        return this.getWeekMinTimeStampByTimeStamp(Browser.now);
    }

    //获取指定时间戳的周的最小时间戳
    getWeekMinTimeStampByTimeStamp(timeStamp) {
        let minTime = this.getMinTimeStampByTimeStamp(timeStamp);
        let now = new Date(minTime);
        let dayOfWeek = now.getDay();
        if (dayOfWeek == 0) {
            dayOfWeek = 7
        }
        return minTime - (dayOfWeek - 1) * TimeUtils.ONE_DAY_MILLISECOND;
    }

    //判断两个时间戳是否是同一周
    /**
     * 思路: 因为1970年1月1 是周4   所以（天数+4）/7 取整 就是周数  如果相同就是同一周反之就不是
     经过测试,是以星期一作为每周的第一天的 注意 是以时区 计算了
     * @param timeStamp1
     * @param timeStamp2
     * @returns {boolean}
     */
    timeStampIsSameWeek(timeStamp1, timeStamp2) {
        //因为1970年1月1 是周4   所以（天数+4）/7 取整 就是周数 但 北京是东八区
        // 这个是按照 周日是 第一天算的 所以 （天数+4）/7 -->（天数+3）/7
        let old_count = Math.floor((timeStamp1 + TimeUtils.BEI_JING) / TimeUtils.ONE_DAY_MILLISECOND);
        let now_other = Math.floor((timeStamp2 + TimeUtils.BEI_JING) / TimeUtils.ONE_DAY_MILLISECOND);
        return Math.floor((old_count + 3) / 7) == Math.floor((now_other + 3) / 7);
        // 原来的代码
        // var oneDayTime = 1000*60*60*24;
        // var old_count =parseInt(old.getTime()/oneDayTime);
        // var now_other =parseInt(now.getTime()/oneDayTime);
        // return parseInt((old_count+4)/7) == parseInt((now_other+4)/7);
        // 因为1970年1月1 是周4   所以（天数+4）/7 取整 就是周数  如果相同就是同一周反之就不是
        // 经过测试,是以星期一作为每周的第一天的
    }

    //判断两个时间戳是否是同一天
    timeStampIsSameDay(timeStamp1, timeStamp2) {
        let old_count = Math.floor((timeStamp1 + TimeUtils.BEI_JING) / TimeUtils.ONE_DAY_MILLISECOND);
        let now_other = Math.floor((timeStamp2 + TimeUtils.BEI_JING) / TimeUtils.ONE_DAY_MILLISECOND);
        return old_count === now_other;
    }

    //判断两个时间戳相差几天
    diffDaysByTimeStamp(timeStamp1, timeStamp2) {
        let old_count = Math.floor((timeStamp1 + TimeUtils.BEI_JING) / TimeUtils.ONE_DAY_MILLISECOND);
        let now_other = Math.floor((timeStamp2 + TimeUtils.BEI_JING) / TimeUtils.ONE_DAY_MILLISECOND);
        return Math.abs(old_count - now_other);
    }

    //获取今日的最大时间戳
    getTodayMaxTimeStamp() {
        return this.getMaxTimeStampByTimeStamp(Browser.now);
    }

    //获取今日的最小时间戳
    getTodayMinTimeStamp() {
        return this.getMinTimeStampByTimeStamp(Browser.now);
    }

    //获取明天的最小时间戳
    getTomorrowMinTimeStamp() {
        return this.getMinTimeStampByTimeStamp(Browser.now + TimeUtils.ONE_DAY_MILLISECOND);
    }

    //通过一个时间戳获取该时间戳对应的日期最大时间戳
    getMaxTimeStampByTimeStamp(timeStamp) {
        let nowDate = new Date(timeStamp);
        nowDate.setHours(23);
        nowDate.setMinutes(59);
        nowDate.setMilliseconds(999);
        let maxTime = nowDate.setSeconds(59);
        return maxTime;
    }

    /**通过一个时间戳获取该时间戳对应的日期最小时间戳*/
    getMinTimeStampByTimeStamp(timeStamp) {
        let nowDate = new Date(timeStamp);
        nowDate.setHours(0);
        nowDate.setMinutes(0);
        nowDate.setMilliseconds(0);
        let minTime = nowDate.setSeconds(0);
        return minTime;
    }

}