# Bilingual Dataset Website Template for GitHub Pages

这是一个可直接部署到 **GitHub Pages** 的中英双语科研数据集网站模板，适合：

- 计算机视觉数据集官网
- 农业智能 / 智慧养殖项目页
- 论文配套 project page
- benchmark / 数据下载展示页

## 文件结构

```text
.
├── index.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── img/
        ├── hero-cover.svg
        ├── example-1.svg
        ├── example-2.svg
        ├── example-3.svg
        ├── example-4.svg
        ├── example-5.svg
        └── example-6.svg
```

## 快速部署到 GitHub Pages

### 方法 1：直接新建仓库部署

1. 在 GitHub 新建一个仓库，例如：`goatmvt-site`
2. 将本模板全部文件上传到仓库根目录
3. 进入仓库 `Settings` → `Pages`
4. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
5. 保存后等待几十秒至几分钟
6. 页面地址通常为：

```text
https://你的用户名.github.io/goatmvt-site/
```

### 方法 2：作为个人主页仓库部署

如果仓库名为：

```text
你的用户名.github.io
```

则网站会部署到根域名：

```text
https://你的用户名.github.io/
```

## 你需要优先替换的内容

### 1. 网站标题与摘要
修改 `index.html` 中这些内容：
- 数据集名称
- 副标题
- 作者与单位
- 摘要文字

### 2. 下载链接
在 `index.html` 中找到资源卡片，将以下链接替换为你的真实地址：
- GitHub / Gitee 代码链接
- 论文链接
- 数据下载链接
- Demo 视频链接（如有）

### 3. 图片样例
当前 `assets/img/` 中是占位 SVG 图。
你可以替换为：
- 原始图像样例
- 检测框结果图
- 分割 mask 图
- 跟踪可视化图
- 行为识别图
- 病害诊断图

建议保持文件名不变，这样不需要再改 HTML。

### 4. Benchmark 表格
在 `index.html` 中的 benchmark 表替换为你的真实结果，例如：
- mAP50 / mAP50-95
- mIoU
- HOTA / MOTA / IDF1
- Rank-1 / mAP
- Accuracy / F1

### 5. BibTeX
在 `index.html` 中替换 `@article{...}` 内容。

## 双语切换说明

- 语言切换逻辑在：`assets/js/script.js`
- 所有使用 `data-i18n` 的元素都可以自动中英切换
- 默认语言为中文，可在脚本中修改为英文

## 推荐你继续扩展的模块

你可以继续增加：

- News / 更新日志
- Leaderboard
- FAQ
- 数据协议下载页
- 视频演示嵌入（YouTube / Bilibili）
- 数据标注格式图
- 方法流程图

## 针对你的奶山羊数据集，建议替换为以下栏目

- Dataset Overview
- Data Collection Setup
- Multi-task Annotation Protocol
- Example Visualizations
- Benchmark Results
- Download & License
- Citation & Contact

## 本地预览

直接双击 `index.html` 即可浏览。

如果你想更稳定地本地预览，也可以在该目录下运行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 备注

本模板为纯静态页面：
- 无后端
- 无数据库
- 可直接托管于 GitHub Pages
- 后续也可迁移到 Vercel / Netlify

