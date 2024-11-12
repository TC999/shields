# 贡献于 Shields

Shields 是一个社区项目。我们邀请您通过财务捐助、问题和拉取请求参与其中！

## 您可以提供帮助的方式

### 财务捐助

我们在我们的 [open collective](https://opencollective.com/shields) 上完全透明地欢迎财务捐助。任何人都可以提交费用。如果费用对社区的发展有意义，它将被核心贡献者“合并”到我们的开放集体的账本中，提交费用的人将获得报销。

### 贡献代码

这个项目有很多积压的建议！如果您是新来的，也许您愿意打开一个拉取请求来解决它们中的一个：

[![GitHub issues by-label](https://img.shields.io/github/issues/badges/shields/good%20first%20issue.svg)](https://github.com/badges/shields/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) 

### 贡献文档

您可以通过改进项目的使用和开发者指南来提供帮助。

教程在 [/doc](https://github.com/badges/shields/tree/master/doc)：

- 当您阅读文档时，您可以修正错误并添加自己的想法。
- 当您的拉取请求遵循文档但实践发生了变化时，考虑指出这一点并为下一个人更改文档。

API 文档在 [contributing.shields.io](https://contributing.shields.io/)：

- 这些文档是通过使用 [JSDoc](https://jsdoc.app/about-getting-started.html) 注释代码生成的。
  [示例](https://github.com/badges/shields/blob/b3be4d94d5ef570b8daccfd088c343a958988843/core/base-service/base-json.js#L26-L41) 
- 为现有代码添加 JSDoc 注释是一个很好的首次贡献，也是熟悉代码库的好方法。

### 帮助他人

您可以通过代码审查来帮助，这可以减少错误，并且随着时间的推移，有一个美妙的副作用，就是使代码更易读，因此更易于接近。这也是教授和学习的好方法。欢迎加入！
友好、感激和乐于助人。您可以对简单的更改进行首次审查，如徽章添加。这些通常被标记为 [service badge][service badge pr tag]。

请审查 [这些无可挑剔的指南][code review guidelines]。

您可以监控 [issues][]、[discussions][] 和 [chat room][]，并帮助对贡献 Shields 或在其项目中使用它有疑问的其他人。

如果您需要开始的帮助，随时联系 [维护者][]
如果需要帮助。

[service badge pr tag]: https://github.com/badges/shields/pulls?q=is%3Apr+is%3Aopen+label%3Aservice-badge 
[code review guidelines]: https://kickstarter.engineering/a-guide-to-mindful-communication-in-code-reviews-48aab5282e5e 
[issues]: https://github.com/badges/shields/issues 
[discussions]: https://github.com/badges/shields/discussions 
[chat room]: https://discordapp.com/invite/HjJCwm5 
[maintainers]: https://github.com/badges/shields#project-leaders 

### 建议改进

有很多建议在案。您可以通过参与这些建议来提供帮助，这有助于向其他可能采纳它们的贡献者传达社区需求。

不需要发表新的评论。只需在顶部帖子添加一个 :thumbsup: 或 :heart:。

如果您有自己的建议，请 [搜索开放问题][issues]。如果您没有看到它，欢迎 [提出一个新问题][open an issue]。

[open an issue]: https://github.com/badges/shields/issues/new/choose 

### 请求新徽标

我们通过 [the SimpleIcons project][simple-icons github] 使用徽标，并鼓励您在那里贡献徽标。请在这样做之前审查他们的 [指导][simple-icons contributing]。

[simple-icons github]: https://github.com/simple-icons/simple-icons 
[simple-icons contributing]: https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md 

### 传播消息

欢迎对仓库进行星级评分。这将有助于提高项目的可见性，从而吸引更多的用户和贡献者使用 Shields！

我们还要求使用并喜爱 Shields 的开发人员进行 [一次性 \$10 捐助](https://opencollective.com/shields)，请传播这个词！

## 获取帮助

有三个地方可以获得帮助：

1. 如果您是新来的，一个好的开始地方是 [教程][]。
2. 如果您需要帮助开始或实施更改，请 [开始讨论][discussions] 提出问题。我们保证可以这样做。如果已经有一个问题为您正在工作的特徵开放，您可以直接在那里发布。
3. 您也可以加入 [聊天室][] 并在那里提问。

[tutorial]: doc/TUTORIAL.md

## 徽章指南

- Shields.io 托管主要被开发人员使用或被开发人员广泛使用的服务集成。
- 徽章的左侧不应做广告。它应该是一个简洁描述右侧含义的小写 _名词_。
- 除了使用 `social` 风格的徽章外，徽标和链接应该 _默认关闭_。
- 徽章不应从未记录或逆向工程的 API 端点获取数据。
- 徽章不应通过抓取网页来获取数据 - 这些很可能会频繁中断。而 API 发布者有动机为他们的用户维护一个稳定的平台，网页的作者没有这样的动机。
- 徽章可能需要用户在徽章 URL 中指定一个令牌，只要它仅限于获取信息并且不暴露任何敏感信息。必须清楚地记录生成具有正确范围的令牌。

## 徽章 URL

- 新徽章的格式应该是 `/SERVICE/NOUN/PARAMETERS` 的形式。
- 关于此的更多文档在 [badge-urls](https://github.com/badges/shields/blob/master/doc/badge-urls.md) 

## 编码指南

### Prettier

这个项目使用 Prettier 格式化其源代码。使用 Prettier 最愉快的方式是让它在您保存时为您格式化代码。您可以 [将其集成到您的编辑器][integrate prettier] 中。

无论您是否将其集成到编辑器中，默认情况下，pre-commit 钩子都会在提交前运行 Prettier。

[integrate prettier]: https://prettier.io/docs/en/editors.html 

### 测试

当添加或更改服务 [请编写测试][service-tests]，并确保 [您的拉取请求标题遵循所需约定](#running-service-tests-in-pull-requests) 以确保您的测试被执行。
当更改其他代码时，请添加单元测试。

集成测试默认不运行。对于大多数贡献来说，跳过这些是可以的，除非您直接在 postgres 上存储 GitHub 令牌池的代码上工作。

要运行集成测试：

- 您必须安装 PostgreSQL。使用 `brew install postgresql`、`apt-get install postgresql` 等。
- 使用 env var `POSTGRES_URL=postgresql://user:pass@127.0.0.1:5432/db_name` 或者通过使用
  ```yaml
  private:
    postgres_url: 'postgresql://user:pass@127.0.0.1:5432/db_name'
  ```
  在一个 yaml 配置文件中设置连接字符串。
- 运行 `npm run migrate up` 应用 DB 迁移
- 运行 `npm run test:integration` 运行测试

[service-tests]: https://github.com/badges/shields/blob/master/doc/service-tests.md 

### 代码组织

有一个 [高级代码演练](doc/code-walkthrough.md) 描述了项目的布局。

## 拉取请求

所有代码更改都是通过拉取请求合并的，拉取请求在合并时总是被压缩成一个提交。因此，没有要求在您的 PR 中压缩提交，但如果您认为这将有助于审查，欢迎在您的 PR 分支上压缩或重构提交。结构良好的提交总是更容易审查！

由于所有更改都是通过 PR 的压缩合并到主分支的，我们 **不支持** 一旦进入我们的主分支就覆盖 git 历史的任何方面。特别是这意味着我们不支持修改提交消息，也不调整提交作者信息一旦合并。

因此，贡献者有责任在标记 PR 为准备好审查和合并之前审查这类信息并根据需要进行调整。

您可以通过 `git config` 审查和修改您的本地 [git 配置][git-config]，并且还可以在这里找到关于修改您的提交消息的更多信息 [amending-commits]。

[git-config]: https://git-scm.com/book/zh/v2/%e8%87%aa%e5%ae%9a%e4%b9%89-Git-%e9%85%8d%e7%bd%ae-Git
[amending-commits]: https://docs.github.com/zh/github/committing-changes-to-your-project/changing-a-commit-message#rewriting-the-most-recent-commit-message 

### 在拉取请求中运行服务测试

受影响的服务名称必须在拉取请求标题中用方括号括起来，以便 CI 引擎运行这些服务测试。当拉取请求影响多个服务时，它们应该用空格分隔。测试运行器不区分大小写，因此为了可读性，它们应该大写。

例如：

- **[Travis] Fix timeout issues**
- **[Travis Sonar] Support user token authentication**
- **Add tests for [CRAN] and [CPAN]**

请注意，许多服务是相关服务“家族”的一部分。根据您的 PR 中的更改，您可能需要只运行单个服务的测试，或者运行一个“家族”中的所有服务的测试。

例如，一个 PR 标题 **[GitHubForks] Foo** 将只运行 GitHub Forks 徽章的特定服务测试，而一个标题 **[GitHub] Foo** 将运行所有 GitHub 徽章的服务测试。

在极少数情况下，如果需要在 PR 中查看完整服务测试运行的输出（所有 2,000+ 测试），请在标题中包含 `[*****]`。除非所有测试都通过，否则构建将失败，因此可能需要在合并前将其移除并重新运行测试。
