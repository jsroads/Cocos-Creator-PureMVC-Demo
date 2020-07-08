/**
 * Created by jsroads on 2020/6/29. 8:09 下午
 * Note:Cocos Creator 提供了cc.js.getClassName这么一个函数，
 * 但是遗憾的时候，当代码混淆后， ccclass装饰过的类是能通过该方法拿到类名，但是自定义的类就拿不到了，
 * 自定义的类混淆后拿到的往往是"t"。
 * 参考地址 https://blog.csdn.net/RICKShaozhiheng/article/details/87922938
 *
 */
/**
 * 将类名赋给该类
 * @param target
 */
export function cccExtensionClass(target: any) {
    let frameInfo = cc['_RF'].peek();
    let script = frameInfo.script;
    cc.js.setClassName(script, target);
    // console.log("@@@@@@@@@@@@@",cc.js.getClassName(target));
}

//在需要的类前像ccclass一样使用这个装饰器就行了:
//
// @heClass
// export abstract class HashObject {
//     private static s_hashCount: number = 1;
//     private _hashCode: number;
//
//     public constructor() {
//         this._hashCode = HashObject.s_hashCount++;
//     }
//
//     public get hashCode(): number {
//         return this._hashCode;
//     }
// }