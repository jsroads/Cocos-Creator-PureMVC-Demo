/**
 * Created by jsroads on 2020/6/11.2:40 下午
 * Note:
 */
import MacroCommand = puremvc.MacroCommand;
import ControllerCommand from "./ControllerCommand";
import ModelPrepCommand from "./ModelPrepCommand";
import ViewPrepCommand from "./ViewPrepCommand";

export default class StartupCommand extends MacroCommand {
    constructor() {
        super();
    }
    //添加子Command 初始化MacroCommand.
    public initializeMacroCommand(): void {
        /**
         * 命令会按照“先进先出”（FIFO）的顺序被执行.
         * 在用户与数据交互之前，Model必须处于一种一致的已知的状态.
         * 一旦Model 初始化完成，View视图就可以显示数据允许用户操作与之交互.
         * 因此，一般“ 开启”（startup ）过程首先Model初始化，然后View初始化。
         */
        this.addSubCommand(ControllerCommand);
        this.addSubCommand(ModelPrepCommand);
        this.addSubCommand(ViewPrepCommand);
    }
}