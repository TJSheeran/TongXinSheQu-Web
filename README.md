# 同心社区-Web端

## 目录结构

```
│  App.jsx
│  config.js
│  index.js
│
├─assets
│  ├─css
│  │      index.less
│  │      reset.less
│  │      variables.less
│  │
│  └─icon
│          chatgpticon.svg
│          locker.png
│
├─constant
│      index.js
│
├─router
│      index.js
│
├─services
│  │  index.js
│  │
│  ├─request
│  │      config.js
│  │      index.js
│  │
│  └─utils
│          api.js
│          fetchUtil.js
│
├─store
│      header.js
│      index.js
│      login.js
│      tab.js
│
├─utils
│      index.js
│
└─views
    ├─Agreement
    │      index.jsx
    │
    ├─Detail
    │  │  index.js
    │  │  index.less
    │  │
    │  └─components
    │      ├─AICard
    │      │      index.js
    │      │      index.less
    │      │
    │      ├─AnswerCard
    │      │      index.js
    │      │      index.less
    │      │
    │      ├─AnswerList
    │      │      constant.js
    │      │      index.js
    │      │      index.less
    │      │
    │      └─AnswerModal
    │              index.js
    │              index.less
    │
    ├─Discuss
    │  │  index.jsx
    │  │  style.less
    │  │
    │  └─components
    │      ├─DiscussCard
    │      │      index.js
    │      │
    │      └─DiscussList
    ├─FeedbackModal
    │      index.jsx
    │      index.less
    │
    ├─Footer
    │      index.js
    │
    ├─Header
    │  │  index.js
    │  │  index.less
    │  │
    │  └─components
    │      ├─DrawerContent
    │      │      index.js
    │      │
    │      ├─PopoverContent
    │      │      index.js
    │      │      index.less
    │      │
    │      └─PublishModal
    │              index.js
    │              index.less
    │
    ├─Home
    │  │  index.jsx
    │  │  style.less
    │  │
    │  └─components
    │      ├─CaixiCard
    │      │      index.js
    │      │      index.less
    │      │
    │      ├─CaixiList
    │      │      index.js
    │      │
    │      ├─ContentCard
    │      │      index.js
    │      │      index.less
    │      │
    │      └─ContentList
    │              constant.js
    │              index.js
    │              index.less
    │
    ├─loading
    │      index.jsx
    │      index.less
    │
    ├─Login
    │      index.jsx
    │      style.less
    │
    ├─MobileDetail
    │      index.js
    │      style.less
    │
    ├─MobileHome
    │      index.js
    │      style.less
    │
    ├─MobileList
    │  │  index.js
    │  │  style.less
    │  │
    │  └─components
    │      └─ListItem
    │              index.js
    │              index.less
    │
    ├─MobileMyPage
    │      index.jsx
    │      style.less
    │
    ├─MobileRecommend
    │      index.jsx
    │      style.less
    │
    ├─MobileRecommendList
    │      index.jsx
    │      style.less
    │
    ├─Recommend
    │  │  index.js
    │  │  index.less
    │  │
    │  └─components
    │      ├─RecommendCard
    │      │      index.js
    │      │      index.less
    │      │
    │      └─RecommendList
    │              index.js
    │              index.less
    │
    ├─Register
    │      index.js
    │      index.less
    │
    ├─RootHeader
    │      index.js
    │      style.less
    │
    ├─RootTabBar
    │      index.js
    │      index.less
    │
    └─UserPage
        │  index.js
        │  index.less
        │
        ├─UserInfoBlock
        │      index.js
        │      index.less
        │
        └─UserInfoContent
            │  index.js
            │
            ├─UserInfoAnswer
            │      index.js
            │
            ├─UserInfoChange
            │      index.js
            │
            ├─UserInfoFocus
            │  │  index.js
            │  │  index.less
            │  │
            │  ├─UserInfoFocusCard
            │  │      index.js
            │  │      index.less
            │  │
            │  └─UserInfoFocusList
            │          index.js
            │          index.less
            │
            └─UserInfoPublish
                │  index.js
                │  index.less
                │
                ├─UserInfoPublishCard
                │      index.js
                │      index.less
                │
                └─UserInfoPublishList
                        index.js
                        index.less
``` 

## 项目说明

### 项目结构

- `App.jsx`: 应用的入口文件，负责应用的初始化和路由配置。
- `config.js`: 项目配置文件，包含一些常量和配置信息。
- `index.js`: 项目的主文件，负责应用的启动和初始化。

- `assets`: 资源文件夹，包含项目中使用的图片、样式文件等。
- `constant`: 常量文件夹，包含一些常量和配置信息。
- `router`: 路由文件夹，包含路由配置和路由组件。
- `services`: 服务文件夹，包含项目中使用的API接口和相关方法。
- `store`: 状态管理文件夹，包含项目中使用的Redux store和相关方法。
- `utils`: 工具文件夹，包含项目中使用的工具函数和方法。
- `views`: 视图文件夹，包含项目中使用的视图组件和相关方法。
  - `Agreement`: 用户协议
  - `Detail`: 帖子详情
  - `Discuss`: 讨论
  - `FeedbackModal`: 反馈弹窗
  - `Footer`: 底部
  - `Header`: 头部
  - `Home`: 首页
  - `Login`: 登录
  - `MobileDetail`: 移动端帖子详情
  - `MobileHome`: 移动端首页
  - `MobileList`: 移动端列表
  - `MobileMyPage`: 移动端我的页面
  - `MobileRecommend`: 移动端推荐
  - `MobileRecommendList`: 移动端推荐列表
  - `Recommend`: 推荐
  - `Register`: 注册
  - `RootHeader`: 根头部
  - `RootTabBar`: 根底部
  - `UserPage`: 用户页面
    - `UserInfoBlock`: 用户信息块
    - `UserInfoContent`: 用户信息内容
      - `UserInfoAnswer`: 用户信息回答
      - `UserInfoChange`: 用户信息修改
      - `UserInfoFocus`: 用户信息关注
      - `UserInfoFocusCard`: 用户信息关注卡片
      - `UserInfoFocusList`: 用户信息关注列表
      - `UserInfoPublish`: 用户信息发布
      - `UserInfoPublishCard`: 用户信息发布卡片
      - `UserInfoPublishList`: 用户信息发布列表 


### 项目功能
本项目是一个基于React的社区交流平台,主要功能包括:

1. 用户认证:
   - 登录
   - 注册
   - 用户协议

2. 内容浏览:
   - 首页推荐
   - 帖子详情
   - 评论列表
   - 搜索功能
   - 分类浏览
   - 热门话题

3. 用户互动:
   - 发布帖子
   - 点赞/收藏
   - 关注用户
   - 评论回复

4. 个人中心:
   - 用户信息展示
   - 发布/回答管理
   - 关注列表
   - 收藏列表
   - 消息通知
   - 积分系统

5. 其他功能:
   - 移动端适配
   - AI辅助回答
   - 问题反馈
   - 移动端适配

### 技术栈

- 前端框架: React
- 状态管理: Redux
- 路由管理: React Router
- UI 组件库: Ant Design
- 网络请求: Axios
- 样式处理: Less
- 构建工具: Webpack

### 开发环境搭建

1. 克隆项目到本地:
   ```
   git clone 
   ```

2. 进入项目目录:
   ```
   cd TongXinSheQu-Web
   ```

3. 安装依赖:
   ```
   npm install
   ```

4. 启动开发服务器:
   ```
   npm start
   ```

5. 在浏览器中打开 http://localhost:3000 查看项目

### 部署说明

1. 构建生产环境代码:
   ```
   npm run build
   ```

2. 将生成的 `build` 文件夹部署到您的 Web 服务器

### 贡献指南

我们欢迎所有形式的贡献，无论是新功能、bug 修复还是文档改进。请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 
3. 提交您的更改 
4. 将您的更改推送到分支 
5. 打开一个 Pull Request

### 联系方式

如有任何问题或建议，请联系项目维护者：

- 官方网站: https://www.tongxinshequ.com







