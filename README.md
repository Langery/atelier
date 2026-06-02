# Atelier · 建筑作品集

> 二十年看建筑的人·留下的笔记与速写

一本电子杂志形式的个人作品集。
收录 20 篇关于建筑、空间与光线的观察随笔。
每篇配一张由编者生成的风格化配图。

—— **本卷不收评论、不收访谈、不收专业术语。**
**写的是去过现场的人都能写出来的东西——**
**区别只在站得够不够久、记得够不够细。**

## 卷期

| 编号 | 名称 | 内容 |
| --- | --- | --- |
| 00 | 创刊号 | 卷首 + 目录 + 快速入口 |
| 01 | 序言 | 编者说明 + 现场足迹时间线 |
| 02 | 作品 | 20 篇正文 + 分页 + 分类筛选 |
| 02.5 | 图版 | 20 张图独立页，纯图为主 |
| 03 | 片段 | 4 篇随笔 + 8 条 marginalia |
| 04 | 版权页 | 元数据 + 编后手记 + 勘误 |
| 05 | 读者来信 | 3 封来信 + 编者回复 |

## 技术栈

- **Vue 3** + Composition API
- **Vite 8** 构建
- **vue-router 4** 多页路由
- 手写 CSS（不使用 Tailwind）
- 字体：EB Garamond · Cormorant Garamond · Inter · Courier New
- 配图：MiniMax image-01 生成
- 部署：GitHub Pages

## 本地运行

```bash
npm install
npm run dev      # http://localhost:5173
```

## 构建

```bash
npm run build
# 产物在 dist/
```

## 部署

仓库使用 gh-pages 分支发布。修改 `vite.config.js` 的 `base` 为仓库名后：

```bash
npm run build
npx gh-pages -d dist
```

## 键盘快捷键

| 键 | 动作 |
| --- | --- |
| 0 | 回首页 |
| 1 / 2 / 3 / 4 | 序言 / 作品 / 片段 / 版权页 |
| ← / → | 作品页上 / 下一篇（首尾循环） |
| Esc | 浏览器默认 |

## 项目结构

```
src/
├── App.vue              # 全局导航 / 滚动进度 / 返回顶部 / 页脚
├── main.js              # 入口
├── style.css            # 全局排版与配色
├── router/
│   └── index.js         # 7 条页面路由 + 404
├── data/
│   └── works.js         # 20 篇作品 + 正文
└── views/
    ├── Hero.vue         # 创刊号
    ├── About.vue        # 序言
    ├── Works.vue        # 作品列表 (含分页+筛选)
    ├── Work.vue         # 作品详情 (含参考阅读+上下篇)
    ├── Plates.vue       # 图版页
    ├── Fragments.vue    # 片段+引文+marginalia
    ├── Colophon.vue     # 版权页+手记+勘误
    ├── Mail.vue         # 读者来信
    └── NotFound.vue     # 404

public/
├── favicon.svg          # 衬线 A + 赭红线
└── works/               # 20 张配图
    ├── I.jpg
    ├── II.jpg
    └── ...
```

## 风格

- 文艺杂志感
- 调色板：墨 `#1a1a1a` / 纸 `#f5f1e8` / 赭红 `#c8553d` / 浅纸 `#ebe4d3` / 灰文 `#6b6b6b`
- 排版：不对称网格、衬线大标题、首字下沉、章节错位
- 配图：莫兰迪底色 + 冷暖光对比，胶片颗粒感

## 版权

CC BY-NC 4.0 · 配图与文字均为编者个人作品

## 勘误

参 `/colophon` 页末"本期勘误"区块。
