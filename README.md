<p align="center">
    <img src="https://raw.githubusercontent.com/badges/shields/master/readme-logo.svg?sanitize=true" 
        height="130">
</p>
<p align="center">
    <a href="https://shields.io/community#backers"  alt="Open Collective 上的支持者">
        <img src="https://img.shields.io/opencollective/backers/shields"  /></a>
    <a href="https://shields.io/community#sponsors"  alt="Open Collective 上的赞助商">
        <img src="https://img.shields.io/opencollective/sponsors/shields"  /></a>
    <a href="https://github.com/badges/shields/pulse"  alt="活跃度">
        <img src="https://img.shields.io/github/commit-activity/m/badges/shields"  /></a>
    <a href="https://github.com/badges/shields/discussions"  alt="讨论">
        <img src="https://img.shields.io/github/discussions/badges/shields"  /></a>
    <a href="https://github.com/badges/shields/actions/workflows/daily-tests.yml"> 
        <img src="https://img.shields.io/github/actions/workflow/status/badges/shields/daily-tests.yml?label=每日测试" 
            alt="每日测试状态"></a>
    <a href="https://coveralls.io/github/badges/shields"> 
        <img src="https://img.shields.io/coveralls/github/badges/shields" 
            alt="代码覆盖率"></a>
    <a href="https://discord.gg/HjJCwm5"> 
        <img src="https://img.shields.io/discord/308323056592486420?logo=discord&logoColor=white" 
            alt="在 Discord 上聊天"></a>
</p>

这是 [Shields.io][shields.io] 的主页，它提供了简洁、一致且易读的 SVG 和光栅格式徽章，可以轻松地包含在 GitHub 的 readme 文件或其他任何网页中。该服务支持数十种持续集成服务、包注册表、发行版、应用商店、社交网络、代码覆盖服务和代码分析服务。每个月它提供超过 16 亿张图片，并被世界上一些最受欢迎的开源项目所使用，包括 [VS Code][vscode]、[Vue.js][vue] 和 [Bootstrap][bootstrap] 等。

[vscode]: https://github.com/Microsoft/vscode 
[vue]: https://github.com/vuejs/vue 
[bootstrap]: https://github.com/twbs/bootstrap 

本仓库托管：

- [Shields.io][shields.io] 的前端和服务器代码
- 一个用于生成徽章的 [NPM 库][badge-maker]
  - [文档][badge-maker-docs]
  - [更新日志][badge-maker-changelog]
- [徽章设计规范][badge-spec]

[shields.io]: https://shields.io/ 
[badge-maker]: https://www.npmjs.com/package/badge-maker 
[badge-spec]: https://github.com/badges/shields/tree/master/spec 
[badge-maker-docs]: https://github.com/badges/shields/tree/master/badge-maker/README.md 
[badge-maker-changelog]: https://github.com/badges/shields/tree/master/badge-maker/CHANGELOG.md 

## 示例

- 代码覆盖率百分比：![coverage](https://img.shields.io/badge/coverage-80%-yellowgreen) 
- 稳定版本发布：![version](https://img.shields.io/badge/version-1.2.3-blue) 
- 包管理器发布：![gem](https://img.shields.io/badge/gem-2.2.0-blue) 
- 第三方依赖状态：![dependencies](https://img.shields.io/badge/dependencies-out%20of%20date-orange) 
- 静态代码分析等级：![codacy](https://img.shields.io/badge/codacy-B-green) 
- [SemVer](https://semver.org/) 版本遵守：![semver](https://img.shields.io/badge/semver-2.0.0-blue) 
- 每周 [Liberapay](https://liberapay.com/) 捐款金额：![receives](https://img.shields.io/badge/receives-2.00%20USD%2Fweek-yellow) 
- Python 包下载量：![downloads](https://img.shields.io/badge/downloads-13k%2Fmonth-brightgreen) 
- Chrome 网上应用店扩展评分：![rating](https://img.shields.io/badge/rating-★★★★☆-brightgreen) 
- [Uptime Robot](https://uptimerobot.com) 百分比：![uptime](https://img.shields.io/badge/uptime-100%-brightgreen) 

[制作你自己的徽章！][custom badges]
（快速示例：`https://img.shields.io/badge/left-right-f39f37`） 

[custom badges]: https://img.shields.io/badges/static-badge 

### 快速开始

浏览 [完整的徽章列表][shields.io] 并通过搜索栏或浏览类别找到特定的徽章。点击徽章以填写该类型徽章所需的数据元素（如你的用户名或仓库）并可选地自定义（标签、颜色等）。然后就可以使用了！

使用底部的按钮复制你的徽章 url 或代码片段，然后可以添加到你的 GitHub readme 文件或其他网页上。

## 贡献

Shields 是一个社区项目。我们邀请你通过问题和拉取请求参与进来！你可以浏览 [贡献指南][contributing]。

添加或更改服务时 [请添加测试][service-tests]。

这个项目有很多积压的建议！如果你是新来的，也许你愿意打开一个拉取请求来处理它们中的一个。

你可以阅读一个 [如何添加徽章的教程][tutorial]。

[![GitHub issues by-label](https://img.shields.io/github/issues/badges/shields/good%20first%20issue)](https://github.com/badges/shields/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) 

如果你想报告或贡献与安全漏洞相关的修复，请首先参考我们的 [安全政策][security]。

[service-tests]: https://github.com/badges/shields/blob/master/doc/service-tests.md 
[tutorial]: https://github.com/badges/shields/blob/master/doc/TUTORIAL.md 
[contributing]: https://github.com/badges/shields/blob/master/CONTRIBUTING.md 
[security]: https://github.com/badges/shields/blob/master/SECURITY.md 

## 开发

1. 安装 Node 20 或更高版本。你可以使用你选择的 [包管理器][]。
   测试需要在 Node 20 和 22 中通过。
2. 克隆这个仓库。
3. 运行 `npm ci` 安装依赖项。
4. 运行 `npm start` 启动徽章服务器和前端开发服务器。
5. 打开 `http://localhost:3000/` 查看前端。

当服务器源文件更改时，徽章服务器应该自动重启（使用 [nodemon][]）。当前端文件更改时，前端开发服务器（`docusaurus start`）也应该自动重新加载。但是徽章定义只在服务器首次启动前构建。要重新生成它们，要么运行 `npm run prestart` 或手动重启服务器。

要从命令行调试徽章，运行 `npm run badge -- /npm/v/nock`。
它也可以使用完整的 URL 工作，如
`npm run badge -- https://img.shields.io/npm/v/nock`。 

使用 `npm run debug:server` 以调试模式启动服务器。
[这个配方][nodemon debug] 展示了如何在 [VS Code][] 中调试 Node.js 应用程序。

Shields 对 [Gitpod][gitpod] 有实验性支持，这是一个预配置的开发环境，可以在你的浏览器中运行。要使用 Gitpod，点击下面的按钮并用 GitHub 登录。Gitpod 还提供了一个浏览器插件，尽管不是必需的。
请在问题 [#2772](https://github.com/badges/shields/issues/2772) 中报告任何 Gitpod 错误、问题或建议。

[![Edit with Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/tc999/shields) 

[快照测试][] 确保我们不会无意中做出影响 SVG 或 JSON 输出的更改。当故意更改输出时，运行 `SNAPSHOT_DRY=1 npm run test:package` 预览对保存的快照的更改，并使用 `SNAPSHOT_UPDATE=1 npm run test:package` 更新它们。

服务器可以配置为使用 [Sentry][] ([配置][sentry configuration]) 和 [Prometheus][] ([配置][prometheus configuration])。

我们的 [完整测试套件][full test suite] 以及 [代码覆盖率][code coverage] 每天都会运行。

[package manager]: https://nodejs.org/en/download/package-manager/ 
[gitpod]: https://www.gitpod.io/ 
[snapshot tests]: https://glebbahmutov.com/blog/snapshot-testing/ 
[prometheus]: https://prometheus.io/ 
[prometheus configuration]: https://github.com/badges/shields/blob/master/doc/self-hosting.md#prometheus 
[sentry]: https://sentry.io/ 
[sentry configuration]: https://github.com/badges/shields/blob/master/doc/self-hosting.md#sentry 
[nodemon]: https://nodemon.io/ 
[nodemon debug]: https://github.com/Microsoft/vscode-recipes/tree/master/nodemon 
[vs code]: https://code.visualstudio.com/ 
[full test suite]: https://github.com/badges/shields/actions/workflows/daily-tests.yml 
[code coverage]: https://coveralls.io/github/badges/shields 

## 托管你自己的服务器

有关 [托管你自己的服务器][self-hosting] 的文档。

[self-hosting]: https://github.com/badges/shields/blob/master/doc/self-hosting.md 

## 相关项目

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) 

状态徽章在开源和私有软件项目中被广泛使用。
学者们研究了徽章提供的关于软件项目质量的“信号”。有许多现有的库用于渲染这些徽章，以及 Shields 徽章服务的替代品。[awesome-badges][] 是这些资源的精选集合。
[贡献][contributing to awesome-badges] 可能会被考虑在那里。
（该项目在该集合中的存在不应被解释为 Shields 项目的背书或推广）

[awesome-badges]: https://github.com/badges/awesome-badges 
[contributing to awesome-badges]: https://github.com/badges/awesome-badges/blob/main/CONTRIBUTING.md 

## 历史

b.adge.me 是这项服务的原始网站。当时 Heroku 有一个特性，使得使用顶级域名变得困难，因此域名看起来很奇怪。它使用的代码来自 2013 年的一个名为 [gh-badges][old-gh-badges] 的库，两者都是由 [Thaddée Tyl][espadrine] 开发的。
该项目通过使用 b.adge.me 代码并与 shields.io 合并，关闭了 b.adge.me。

最初的徽章规范是在 2013 年由 [Olivier Lacan][olivierlacan] 开发的。它受到了 Travis CI 和类似徽章的启发（那时候徽章少得多）。2014 年，Thaddée Tyl 在 Travis CI 的一名员工的帮助下重新设计了它，并说服大家切换到它。旧的设计就是现在所说的塑料风格；新的是平面风格。

你可以阅读更多关于 [项目起源][thread]、[SVG 徽章规范的动机][motivation] 和 [规范本身][spec]。

[olivierlacan]: https://github.com/olivierlacan 
[espadrine]: https://github.com/espadrine 
[old-gh-badges]: https://github.com/badges/gh-badges 
[motivation]: https://github.com/badges/shields/blob/master/spec/motivation.md 
[spec]: https://github.com/badges/shields/blob/master/spec/SPECIFICATION.md 
[thread]: https://github.com/h5bp/lazyweb-requests/issues/150 

## 项目负责人

维护者：

- [calebcartwright](https://github.com/calebcartwright)  (核心团队)
- [chris48s](https://github.com/chris48s)  (核心团队)
- [Daniel15](https://github.com/Daniel15)  (核心团队)
- [paulmelnikow](https://github.com/paulmelnikow)  (核心团队)
- [platan](https://github.com/platan)  (核心团队)
- [PyvesB](https://github.com/PyvesB)  (核心团队)
- [RedSparr0w](https://github.com/RedSparr0w)  (核心团队)

运营：

- [calebcartwright](https://github.com/calebcartwright) 
- [chris48s](https://github.com/chris48s) 
- [paulmelnikow](https://github.com/paulmelnikow) 
- [PyvesB](https://github.com/PyvesB) 

校友：

- [espadrine](https://github.com/espadrine) 
- [olivierlacan](https://github.com/olivierlacan) 

## 许可证

所有资产和代码都在 [CC0 许可证](LICENSE) 下，除非另有说明，否则属于公共领域。

## 社区

感谢那些捐赠资金、服务或时间以保持项目运行的人们和公司。[https://shields.io/community](https://shields.io/community)