# DGV-Suite Website (Updated from the Uploaded Paper)

这个版本已经按你上传的论文《DGV-Suite: A Benchmark Suite of Task-Specific Subsets for Dairy Goat Vision》完成了一次针对性改写，适合直接部署到 **GitHub Pages**。

## 已完成的修改

- 将模板标题替换为 **DGV-Suite**
- 根据论文摘要更新了首页简介与亮点
- 根据论文统计更新了概览卡片：
  - 32,007 images
  - 1,459 videos
  - 8 task subsets
  - 159 goat IDs
  - 17 keypoints
  - 7 behavior classes
- 根据论文的数据采集与标注协议重写了 Dataset 部分
- 根据论文 Table 2 重写了 **6 个监督任务** 的 benchmark 表格
- 将你上传的 `DGV.pdf` 内置为网站中的可打开 PDF
- 从论文页面中裁剪了 6 张图，作为项目页展示图示
- 保留了 **中英双语切换**

## 目录结构

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
    ├── img/
    │   ├── hero-cover.svg
    │   ├── example-1.png
    │   ├── example-2.png
    │   ├── example-3.png
    │   ├── example-4.png
    │   ├── example-5.png
    │   └── example-6.png
    └── paper/
        └── DGV-Suite.pdf
```

## 部署到 GitHub Pages

1. 把本目录全部文件上传到仓库根目录
2. 打开仓库 `Settings → Pages`
3. 选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. 保存后等待几分钟
5. 站点地址通常为：

```text
https://你的用户名.github.io/仓库名/
```

## 建议你接下来继续修改的地方

### 1. 作者信息
当前沿用了论文匿名投稿版本中的：

- `Anonymous Author(s)`
- `Submission Id: 123-A56-BU3`

如果你要公开发布，建议在：
- `index.html`
- `assets/js/script.js`

中替换为真实作者和单位。

### 2. 资源链接
当前资源区已经接入：
- 论文 PDF
- 项目页 URL
- benchmark 区块
- BibTeX

如果后续你有：
- 数据下载地址
- 代码仓库
- 补充材料
- 视频 demo

建议继续加入资源卡片。

### 3. 引用信息
当前 BibTeX 使用的是匿名投稿格式。正式发布前应替换为最终版本。

## 本地预览

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

