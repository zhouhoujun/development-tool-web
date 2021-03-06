# packaged development-tool-web

This repo is for distribution on `npm`. The source for this module is in the
[main repo](https://github.com/zhouhoujun/development-tool-web/src/mastert).
Please file issues and pull requests against that repo.
This package use to develop kit for typescript node project development via gulp tasks.

# note

* `if you use jspm package manager, do not setting jspm baseURL!!!`

## Install

You can install this package either with `npm`.

### npm

```shell

npm install development-tool-web

```



You can `import` modules:

## import module

```ts
import * as gulp from 'gulp';
import  { Development } from 'development-tool';
import { IWebTaskOption } from 'development-tool-web';

```

## Create development tool

```ts
Development.create(gulp, __dirname, [
        <IWebTaskOption>{
            src: 'src',
            //testSrc: '...',
            //e2eSrc: '...',
            //watchSrc: '...'
            dist: 'lib',
            // buildDist:'build path',
            // releaseDist: 'release path',
            // depolyDist: 'depoly path'
            asserts:{
                // use IAsserts task to deal with ts file, if src not setting, use  src/**/*.ts
                // pipes, output is addation pipe work.
                ts: {
                    loader: {
                        module:'development-assert-ts',
                        // add pipe works for module tasks.
                        pipe(stream, ctx, dist, gulp){ ... }
                        pipes: Pipe[] | (ctx, dist, gulp)=> Pipe[],
                        output: OutputPipe[] | (stream, ctx, dist, gulp)=> OutputPipe[]
                    }
                },
                tsb:{
                    src:'srcb/**/*.ts',
                    loader:'development-assert-ts',
                    // also can add pipe works for module tasks here.
                    pipe(stream, ctx, dist, gulp){ ... }
                    pipes: Pipe[] | (ctx, dist, gulp)=> Pipe[],
                    output: OutputPipe[] | (stream, ctx, dist, gulp)=> OutputPipe[]
                },
                js:{
                    loader:'development-assert-js',
                    //add pipe works for module tasks here.
                    pipe(stream, ctx, dist, gulp){ ... }
                    pipes: Pipe[] | (ctx, dist, gulp)=> Pipe[],
                    output: OutputPipe[] | (stream, ctx, dist, gulp)=> OutputPipe[]
                }
                json: 'src/**/*.json',
                css:'src/common/**/*.css',
                moduleBcss: ['src/moduleB/**/*.css'],
                moduleAcss: {
                    src: ['src/apath/**/*.css', 'src/bpath/**/*.css'],
                    //testSrc: '...',
                    //e2eSrc: '...',
                    //watchSrc: '...'
                    dist: 'dist path',
                    // buildDist:'build path',
                    // releaseDist: 'release path',
                    // depolyDist: 'depoly path'
                },
                ...
            },
            loader: 'development-tool-web',
            // also can add pipe works for module tasks here.
            pipe(stream, ctx, dist, gulp){ ... }
            pipes: Pipe[] | (ctx, dist, gulp)=> Pipe[],
            output: OutputPipe[] | (stream, ctx, dist, gulp)=> OutputPipe[]
        }
    ]);
```

## Create development tool with addation sub tasks

```ts
Development.create(gulp, __dirname, {
    tasks:{
        src: 'src',
        dist: 'lib',
        loader: 'development-tool-web',
        tasks:[
            {
                src: 'files be dealt with',
                //testSrc: '...',
                //e2eSrc: '...',
                //watchSrc: '...'
                dist: 'dist path',
                // buildDist:'build path',
                // releaseDist: 'release path',
                // depolyDist: 'depoly path'
                loader:'development-tool-*' //the module must implement ITaskDefine.
            },
            {
                src: ['src/apath/**/*.css', 'src/bpath/**/*.css'],
                //testSrc: '...',
                //e2eSrc: '...',
                //watchSrc: '...'
                dist: 'dist path',
                // buildDist:'build path',
                // releaseDist: 'release path',
                // depolyDist: 'depoly path'
                loader: {
                    configModule: path.join(__dirname, './src/task.ts'), //the module must implement ITaskDefine.
                    dir: [path.join(__dirname, './src/mytasks')]
                },
                tasks: [
                    {
                        src: 'files be dealt with',
                        //testSrc: '...',
                        //e2eSrc: '...',
                        //watchSrc: '...'
                        dist: 'dist path',
                        // buildDist:'build path',
                        // releaseDist: 'release path',
                        // depolyDist: 'depoly path'
                        loader: {
                            //./src/mytasks folder must has module implement ITaskDefine.
                            dir: path.join(__dirname, './src/mytasks')
                        }
                    },
                    {
                        src: 'files be dealt with',
                        //testSrc: '...',
                        //e2eSrc: '...',
                        //watchSrc: '...'
                        dist: 'dist path',
                        // buildDist:'build path',
                        // releaseDist: 'release path',
                        // depolyDist: 'depoly path'
                        loader: {
                            module: path.join(__dirname, './src/mytasks/dosomething'),
                            configModule: path.join(__dirname, './src/mytasks/config') //the module must implement ITaskDefine.
                        }
                    }
                ]
            }
            ...
        ]
    }
});
```

https://github.com/zhouhoujun/development-tool-web.git

## Documentation

Documentation is available on the
[development-tool-web docs site](https://github.com/zhouhoujun/development-tool-web).

## License

MIT © [Houjun](https://github.com/zhouhoujun/)