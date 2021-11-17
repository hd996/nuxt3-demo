# Nuxt3 Demo
> nuxt3 demo

## 集成功能列表
- [x] `Saas`
- [x] `ESLint + Prettier`
- [x] `Element Plus`
- [x] `I18n`
- [x] `数据库`
- [x] `多环境部署`

## 开发
导入 `init.sql`

```bash
$ yarn install
$ yarn dev

# 健康检查
$ curl http://localhost:3000/api/health
# 数据库API接口
$ curl http://localhost:3000/api/user
```

## 上线
- 参考 `Dockerfile`，我部署使用的是 [`Kubernetes`](https://kubernetes.io/)

## 你可能遇到的问题 & 解决方案
- [I18n](https://github.com/intlify/nuxt3)
- [Nuxt3 I18n Discussions](https://github.com/nuxt-community/i18n-module/discussions/1287)
- [Element Plus](https://github.com/element-plus/element-plus-nuxt-starter)
- [静态资源CDN](https://github.com/nuxt/framework/issues/1467)
- [环境配置](https://github.com/lorenwest/node-config)
  - 可以参考 `config` 目录以及 `server/db.ts` 中的使用
  - 在 `Dockerfile` 注入 `NODE_ENV` 变量，确保打包时的环境变量和上线后统一
- `数据库`: 使用的是 `Sequelize` ，如果使用 `Typeorm` 可能在配置 `entities` 有问题，所以也没有尝试使用

## 相关链接
- [色彩方案](https://color-generate-docs.sh2.agoralab.co/)
  - 在 `assets/scss/_var.scss` 下有根据主色生成的色阶，可以通过我写的色彩方案生成，参考 `Ant Design` 的代码，喜欢的帮忙点个 `Star`
- [Nuxt3](https://v3.nuxtjs.org/getting-started/introduction)

## 最后要说的话
- 目前 `Nuxt3` 仍存在很多问题，包括相关配套工具的没有适配，不建议此时放到生产环境，但如果是一些比较简单的项目，我倒觉得可以试一试
- 喜欢的帮忙点个 `Star`
