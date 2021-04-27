/**
 * Created by jsroads on 2020/6/20. 11:24 上午
 * Note:
 */

import {Component} from "cc";
import {IBaseUI} from "../data/Inters";
export default abstract class BaseUI extends Component implements IBaseUI {
    protected info: any;
    protected cache: any = {};

    public initData(data?: any, ...params: any): void {
        this.info = data || this.info;
        this.onInitData(this.info, params);
    }

    public refresh(data: any, ...params: any): void {
        this.info = data || this.info;
        this.onRefresh(this.info, params);
    }

    protected onInitData(data?: any, ...params: any): void {

    }

    protected onRefresh(data: any, ...params: any): void {

    }

    protected onDestroy() {
        this.info = null;
        this.cache = null;
    }
}