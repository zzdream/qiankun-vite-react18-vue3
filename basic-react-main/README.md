# easy.ai-site

## 前言

在前端项目工程日益复杂的今天，一套完善的开发环境配置可以极大的提升开发效率，提高代码质量，方便多人合作，以及后期的项目迭代和维护

## 项目规范分：

1. 项目目录结构规范
2. 代码格式规范
3. git 提交规范

## 技术栈

react18.2.0 + react-router18 + react-router-dom6 + vite4 + typescript + eslint + prettier + husky + lint-staged + commitlint + pnpm + axios + iconfont + less + rem

## 规范

## 1 代码格式规范和语法检测

1. vscode：统一前端编辑器。
2. editorconfig: 统一团队 vscode 编辑器默认配置。
3. prettier: 保存文件自动格式化代码。
4. eslint: 检测代码语法规范和错误。
5. lint-staged: 只检测暂存区文件代码，优化 eslint 检测速度。

## 2 代码 git 提交规范

1. husky:可以监听 githooks 执行，在对应 hook 执行阶段做一些处理的操作。
2. pre-commit：githooks 之一， 在 commit 提交前使用 tsc 和 eslint 对语法进行检测。
3. commit-msg：githooks 之一，在 commit 提交前对 commit 备注信息进行检测。
4. commitlint：在 githooks 的 pre-commit 阶段对 commit 备注信息进行检测。
5. commitizen：git 的规范化提交工具，辅助填写 commit 信息。

## 3 提交事例

### git commit -m "feat: xxx" （备注：冒号后面空格）

1. 'feat', // 新功能 feature
2. 'fix', // 修复 bug
3. 'docs', // 文档注释
4. 'style', // 代码格式(不影响代码运行的变动)
5. 'refactor', // 重构(既不增加新功能，也不是修复 bug)
6. 'perf', // 性能优化
7. 'test', // 增加测试
8. 'chore', // 构建过程或辅助工具的变动
9. 'revert', // 回退
10. 'build' // 打包

### git cz

git cz 代替 git commit 需要全局安装 pnpm i commitizen -g
跟据提示执行即可

## 插件安装

1. 安装 vscode 插件 EditorConfig
2. 安装 vscode 插件 Prettier
3. 安装 vscode 插件 ESLint

## 目录结构

1. src 所有开发代码均需放在 src 目录下
2. assets 存在静态资源文件
3. common 存在业务公共组件
4. components 存在基础公共组件
5. hooks 存在公共 hook
6. layerout 页面布局组件
7. router 页面路由组件
8. store 工程数据资源管理
9. utils 工具文件（包括封装的请求，所有的接口路径已经公共函数等）
10. pages 项目路由组件

## vite 配置

1. 配置页面获取全局变量 process.env
2. 配置路径别名 src 为@
3. 配置打包大文件拆分和静态资源分类打包
4. 本地下采用 proxy 代理方式
5. 支持 gzip 压缩 ng 需要配合
6. 可配置 cdn 加速
