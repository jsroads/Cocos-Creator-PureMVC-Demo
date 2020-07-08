/**
 * Created by jsroads on 2020/6/18. 3:01 下午
 * Note:
 */
export default class MathUtils {
    /**@private */
    private static _pi: number = 180 / Math.PI;
    /**@private */
    private static _pi2: number = Math.PI / 180;
    /**
     * 角度转弧度。
     * @param	angle 角度值。
     * @return	返回弧度值。
     */
    static toRadian(angle: number): number {
        return angle * MathUtils._pi2;
    }

    /**
     * 弧度转换为角度。
     * @param	radian 弧度值。
     * @return	返回角度值。
     */
    static toAngle(radian: number): number {
        return radian * MathUtils._pi;
    }


    /**
     * 取得 a 对 b 的倍数最接近的数 向上取值 比如 41 对于 10 是 50
     * @param a {number}
     * @param b {number}
     * @param fractionDigits {number}
     * @returns {number}
     */
    static mCeil(a:number, b:number, fractionDigits:number):number {
        fractionDigits = fractionDigits || 0;
        return +((Math.ceil(a / b) * b).toFixed(fractionDigits));
    }

    /**
     * 取得 a 对 b 的倍数最接近的数 向下取值 比如 41 对于 10 是 40
     * @param a {number}
     * @param b {number}
     * @param fractionDigits {number}
     * @returns {number}
     */
    static mFloor(a:number, b:number, fractionDigits:number):number {
        fractionDigits = fractionDigits || 0;
        return +((Math.floor(a / b) * b).toFixed(fractionDigits));
    }

    /**
     * 取得两个数区间的整数
     * @param lower
     * @param upper
     */
    public static getRandomInteger(lower: number, upper?: number): number {
        if (arguments.length === 1) {
            upper = lower;
            lower = 0;
        }
        return Math.floor(Math.random() * (upper - lower)) + lower;
    }

    /**
     * 取得两个数区间的数 (整形和浮点型)
     * @param min
     * @param max
     */
    public static randomIn(min: number, max: number) {
        return min + Math.random() * (max - min);
    }

}