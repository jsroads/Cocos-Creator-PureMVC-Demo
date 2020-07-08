/**
 * Created by jsroads on 2020/6/18. 2:26 下午
 * Note:
 */
export default class StringUtils {
    /**判断是否是JSON 格式的字符串的正则*/
    static regJson:RegExp = /^[{\[].*[}\]]$/;
    /**判断是否是JSON 格式的字符串*/
    static isJSONStr(value:string):boolean{
        return this.regJson.test(value);
    }

    /**
     *  文本内容转换
     * @param str 需要替换的原内容
     * @param list 替换参数列表
     */
    static trans(str:string, list:[]):string {
        return str.replace(/{([0-9]+)}/g, (word) => {
            // console.log("word:" + word.substring(1, word.length - 1));
            return list[word.substring(1, word.length - 1)];
        })
    }
}