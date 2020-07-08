/**
 * Created by jsroads on 2020/6/18. 2:30 下午
 * Note:
 */
export default class ObjectUtils {
    /**
     * 深度克隆
     * 对象可以完全脱离原对象
     */
    static deepCopy(source:any):any{
        let target = Array.isArray(source) ? [] : {};
        for (let k in source) {
            if (typeof source[k] === 'object') {
                target[k] = this.deepCopy(source[k])
            } else {
                target[k] = source[k]
            }
        }
        return target
    }
    /**
     * 直接赋值
     * @param ret 被赋值对象
     * @param src 赋值对象
     */
    static assignObject(ret:any, src:any) {
        for (let k in src) {
            ret[k] = typeof src[k] === 'object' ? this.assignObject(ret[k] ? ret[k] : (Array.isArray(src[k]) ? [] : {}), src[k]) : src[k]
        }
        return ret;
    }

    /**
     * 对象转换成数组
     * @param data
     * @returns {*[]}
     */
    static objectToArray(data) {
        let list = Object.keys(data).map((value, index, array) => {
            return data[value];
        });
        return list
    }
}