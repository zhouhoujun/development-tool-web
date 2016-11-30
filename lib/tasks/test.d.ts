/// <reference types="gulp" />
/// <reference types="karma" />
import { Gulp } from 'gulp';
import { ITask, ITaskInfo, ITaskContext } from 'development-core';
import * as karma from 'karma';
import { KarmaJspmOption } from '../WebTaskOption';
export declare class KarmaTest implements ITask {
    private info;
    constructor(info: ITaskInfo);
    getInfo(): ITaskInfo;
    setup(ctx: ITaskContext, gulp: Gulp): any;
    initkarmaJspmPlugin(cfg: karma.ConfigOptions, ctx: ITaskContext): karma.ConfigOptions;
    getDefaultAdapter(): {
        name: string;
        template: string;
    };
    checkAdapter(karmajspm: KarmaJspmOption, ctx: ITaskContext): string;
}
