/**
 * Created by jsroads on 2021/4/26.8:08 下午
 * Note:
 */
export interface IBaseUI {
    initData(data: any, ...params: any): void;

    refresh(data: any, ...params: any): void;

    onOpened?(): void;
}