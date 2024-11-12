# 需要认证的徽章

shields.io 与需要认证的 API 交互有两种模式：

1. 我们可以在服务级别存储一个令牌，这允许我们读取每个人项目的公共数据，或提高速率限制。如果您正在寻找有关为自行托管实例配置凭据的信息，请参见 [https://github.com/badges/shields/blob/master/doc/server-secrets.md](https://github.com/badges/shields/blob/master/doc/server-secrets.md)。
2. 如果每个用户都需要提供自己的令牌，那么这个令牌必须是可以在徽章 URL 中作为查询参数传递给我们的。这意味着必须能够生成一个可以在公共 GitHub README 中公开的密钥或令牌，而没有任何负面影响。（即：该密钥或令牌仅公开公共指标）。

如果每个用户都需要为某个特定服务提供自己的令牌，而且只可能生成允许访问敏感数据或允许写入资源的密钥或令牌，我们无法为这项服务提供集成。