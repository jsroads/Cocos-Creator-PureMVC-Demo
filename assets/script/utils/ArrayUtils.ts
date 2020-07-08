/**
 * Created by jsroads on 2020/6/18. 2:51 下午
 * Note:
 */
export default class ArrayUtils {

    static isArray(arg):boolean {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    /**
     * 数组多维多重字段 属性排序
     * sortBy 函数接受一个成员名字符串，排序方式(默认升序)和一个可选的次要比较函数做为参数
     * 并返回一个可以用来包含该成员的对象数组进行排序的比较函数
     * 当两个对象指定成员相等时，次要比较函数被用来决出高下
     * desc是 descend 降序意思，   asc 是 ascend 升序意思
     * employees.sort(sortBy('age','asc',sortBy('name','desc')));
     * desc 从高到低降序   asc 从小到大升序
     * @param name
     * @param des
     * @param minor
     */
    static sortBy(name:string, des, minor) {
        return function (o, p) {
            let a, b, l, g;
            if (typeof des === 'function')
                minor = des, des = null;
            l = (des == 'desc' ? 1 : -1),
                g = (des == 'desc' ? -1 : 1);
            if (o && p && typeof o === 'object' && typeof p === 'object') {
                a = o[name];
                b = p[name];
                if (a === b) {
                    return typeof minor === 'function' ? minor(o, p) : 0;
                }
                if (typeof a === typeof b) {
                    return a < b ? l : g;
                }
                return typeof a < typeof b ? l : g;
            } else {
                throw ("error: is null  or  type is different for compare");
            }
        }
    }


    /**
     * 从数组里面 随机几个元素
     * @param arr
     * @param count
     * @returns {T[]}
     */
    static getRandomArrayElements(arr:Array<any>, count:number):Array<any> {
        let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
}