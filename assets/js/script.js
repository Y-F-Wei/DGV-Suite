const translations = {
  zh: {
    nav_overview: "概览",
    nav_abstract: "摘要",
    nav_dataset: "数据集",
    nav_examples: "图示",
    nav_benchmark: "基准",
    nav_download: "资源",
    nav_citation: "引用",
    hero_badge: "奶山羊视觉基准 · GitHub Pages Ready",
    hero_title: "DGV-Suite：面向奶山羊视觉理解的任务特定子集基准套件",
    hero_subtitle: "DGV-Suite 是一个面向奶山羊视觉理解的大规模基准套件，包含 32,007 张图像和 1,459 段视频，在真实牧场环境下支持 8 类代表性任务。",
    btn_project: "项目主页",
    btn_benchmark: "查看基准",
    btn_paper: "论文 PDF",
    chip_1: "8 个任务子集",
    chip_2: "159 个体",
    chip_3: "17 个关键点",
    chip_4: "7 类行为",
    meta_authors_label: "作者",
    meta_authors: "Anonymous Author(s)",
    meta_status_label: "投稿信息",
    meta_status: "Submission Id: 123-A56-BU3",
    meta_links_label: "链接",
    link_project: "项目主页",
    link_pdf: "PDF",
    link_benchmark: "Benchmark",
    overview_title: "数据集概览",
    overview_desc: "DGV-Suite 以任务特定子集形式组织，在统一基准框架下覆盖奶山羊视觉理解中的核心任务。",
    stat_images: "图像数量",
    stat_videos: "视频数量",
    stat_tasks: "任务子集",
    stat_ids: "奶山羊个体",
    stat_keypoints: "解剖关键点",
    stat_behaviors: "行为类别",
    abstract_title: "摘要",
    abstract_p1: "DGV-Suite 针对现有奶山羊数据集规模小、任务孤立、采集条件受限等问题，构建了一个面向真实牧场环境的大规模视觉基准套件。数据集包含 32,007 张图像和 1,459 段视频，覆盖光照变化、遮挡、个体交互等复杂条件。",
    abstract_p2: "该基准支持目标检测、实例分割、语义分割、目标跟踪、姿态估计、行为识别、个体识别和图像生成 8 类任务，并报告了 6 个监督任务上的代表性 baseline，验证了其挑战性与应用价值。",
    highlights_title: "论文亮点",
    highlight_1: "首次以统一 benchmark 形式系统覆盖奶山羊视觉理解中的 8 类代表性任务。",
    highlight_2: "采用任务特定子集而非完全样本级对齐的多任务构造方式，更贴合真实数据采集与标注流程。",
    highlight_3: "数据采自真实室内外牧场场景，包含密集布局、遮挡、相似个体与复杂背景。",
    highlight_4: "提供 6 个监督任务的 benchmark protocol 与代表性模型结果，支持后续公平比较。",
    dataset_title: "数据集与标注协议",
    dataset_desc: "页面内容依据论文中的数据采集、标注流程、子集统计与 benchmark protocol 进行整理。",
    card_collection_title: "采集环境",
    card_collection_body: "数据采自中国西北地区大型奶山羊科研教学牧场，包含半开放式室内羊舍与室外活动区。场内饲养 159 只泌乳期萨能奶山羊，并有 10 只黑山羊在相同管理条件下生活。",
    card_devices_title: "采集设备",
    card_devices_body: "室内外部署多摄像头系统，包括 YW7100HR-SC9 红外网络摄像头和 DS-IPC-B12-I/POE 摄像头；视频为 1080p、25 fps，并辅以 Canon EOS 60D 采集的高分辨率静态图像。",
    card_annotations_title: "标注协议",
    card_annotations_body: "检测采用 LabelImg/PASCAL VOC，实例分割采用 LabelMe/COCO，语义分割采用 EasyData，跟踪采用 ImageLabel/VOT；姿态估计使用 17 个关键点，行为识别包含 7 类行为，个体识别按身份文件夹组织。",
    card_protocol_title: "评测协议",
    card_protocol_body: "6 个监督任务统一采用 7:1:2 的 train/val/test 划分。检测、实例分割和姿态估计使用 AP/AP50/AP75；语义分割使用 mIoU/mDice/mPA；行为识别使用 mAP/mAcc/F1；跟踪使用 EAO/Success/Speed。",
    structure_title: "DGV-Suite 子集结构（依据论文统计）",
    examples_title: "论文图示与数据特征",
    examples_desc: "以下图示基于论文中的关键可视化结果整理，适合作为项目页中的图像样例与统计摘要。",
    example_1: "Figure 1：全球牛、羊、猪、山羊存栏变化趋势",
    example_2: "Figure 2：分割、检测、多边形与关键点标注样例",
    example_3: "Figure 3：姿态估计关键点不可见比例统计",
    example_4: "Figure 4(a)：行为识别类别分布",
    example_5: "Figure 4(b)：跟踪子集头部/身体序列统计",
    example_6: "Figure 4(c-d)：实例数量与语义分割掩码比例分布",
    benchmark_title: "Benchmark Results",
    benchmark_desc: "以下表格对应论文 Table 2，保留了六个监督任务上的代表性 baseline 与官方指标。",
    note_protocol_title: "官方 protocol",
    note_protocol_body: "所有结果均在各任务测试集上报告，验证集用于模型选择与 early stopping。检测/分割/姿态使用 AP 系列指标，语义分割使用 mIoU、mDice、mPA，行为识别使用 mAP、mAcc、F1，跟踪使用 EAO、Success、Speed。",
    note_observation_title: "结果观察",
    note_observation_body: "YOLOv11 在目标检测上最佳，YOLOv12-Seg 在实例分割上最佳，DeepLabV3+ 在语义分割上表现最优，ELSlowFast-LSTM 在行为识别上取得最高 mAP，ODTrack 在跟踪上获得最高 EAO。",
    task_detection_title: "目标检测",
    task_insseg_title: "实例分割",
    task_pose_title: "姿态估计",
    task_semseg_title: "语义分割",
    task_behavior_title: "行为识别",
    task_tracking_title: "目标跟踪",
    table_method: "方法",
    table_backbone: "骨干网络",
    table_speed: "速度",
    benchmark_note: "注：论文表 2 注明，下划线模型在 4060Ti 上训练，其余模型在 A40 GPU 上训练。",
    download_title: "资源与下载",
    download_desc: "这里整理了项目页、论文 PDF、benchmark 说明与引用入口。",
    res_project_title: "项目主页",
    res_project_desc: "论文摘要中提供的官方项目页链接，可承载数据、补充材料与后续更新。",
    res_paper_title: "论文 PDF",
    res_paper_desc: "本模板已内置你上传的 DGV-Suite 论文 PDF，部署后可直接在线打开。",
    res_benchmark_title: "Benchmark Protocol",
    res_benchmark_desc: "包含六个监督任务的数据划分、评测指标与 Table 2 中的代表性结果。",
    res_cite_title: "BibTeX 引用",
    res_cite_desc: "提供匿名投稿版本的 BibTeX，可在定稿时替换作者和 venue 信息。",
    citation_title: "引用",
    btn_copy: "复制 BibTeX",
    contact_title: "联系与说明",
    contact_body: "当前网页内容严格依据上传论文中的匿名版本信息改写。若你后续用于正式公开发布，建议补充作者、单位、数据访问许可、代码仓库与联系邮箱。",
    contact_item_1: "Contact: to be updated after review",
    contact_item_2: "License: benchmark release policy to be updated",
    contact_item_3: "Supplementary: keypoint and behavior definitions are referenced on the project page",
    footer_note: "任务结构化奶山羊视觉基准网站。",
    copied: "已复制",
    copy_failed: "复制失败"
  },
  en: {
    nav_overview: "Overview",
    nav_abstract: "Abstract",
    nav_dataset: "Dataset",
    nav_examples: "Figures",
    nav_benchmark: "Benchmark",
    nav_download: "Resources",
    nav_citation: "Citation",
    hero_badge: "Dairy Goat Vision Benchmark · GitHub Pages Ready",
    hero_title: "DGV-Suite: A Benchmark Suite of Task-Specific Subsets for Dairy Goat Vision",
    hero_subtitle: "DGV-Suite is a large-scale benchmark suite for dairy goat vision, containing 32,007 images and 1,459 videos, and supporting eight representative tasks in authentic farm environments.",
    btn_project: "Project Page",
    btn_benchmark: "View Benchmark",
    btn_paper: "Paper PDF",
    chip_1: "8 task subsets",
    chip_2: "159 identities",
    chip_3: "17 keypoints",
    chip_4: "7 behaviors",
    meta_authors_label: "Authors",
    meta_authors: "Anonymous Author(s)",
    meta_status_label: "Submission",
    meta_status: "Submission Id: 123-A56-BU3",
    meta_links_label: "Links",
    link_project: "Project Page",
    link_pdf: "PDF",
    link_benchmark: "Benchmark",
    overview_title: "Dataset Overview",
    overview_desc: "DGV-Suite is organized as task-specific subsets under a unified benchmark framework for dairy goat visual understanding.",
    stat_images: "Images",
    stat_videos: "Videos",
    stat_tasks: "Task Subsets",
    stat_ids: "Goat IDs",
    stat_keypoints: "Anatomical Keypoints",
    stat_behaviors: "Behavior Classes",
    abstract_title: "Abstract",
    abstract_p1: "DGV-Suite addresses the limitations of existing dairy goat datasets, which are often small-scale, task-isolated, and collected under constrained conditions. It provides a large-scale benchmark suite collected in authentic farm environments, covering illumination variation, occlusion, and inter-animal interaction.",
    abstract_p2: "The benchmark supports eight tasks: object detection, instance segmentation, semantic segmentation, object tracking, pose estimation, behavior recognition, individual identification, and image generation. Representative baselines are reported on six supervised tasks to validate its difficulty and benchmark value.",
    highlights_title: "Highlights",
    highlight_1: "The first systematically organized benchmark to cover eight representative tasks for dairy goat visual understanding.",
    highlight_2: "Constructed as task-specific subsets rather than a fully sample-aligned multi-task dataset, matching practical annotation workflows.",
    highlight_3: "Collected from authentic indoor-outdoor farm scenes with dense layouts, occlusion, inter-animal similarity, and complex backgrounds.",
    highlight_4: "Provides benchmark protocols and representative results on six supervised tasks for fair future comparison.",
    dataset_title: "Dataset & Annotation Protocols",
    dataset_desc: "The content on this page is adapted from the manuscript's data collection, annotation protocol, subset statistics, and benchmark setup.",
    card_collection_title: "Farm Environment",
    card_collection_body: "The data were collected at a large-scale dairy goat research and teaching farm in northwestern China, featuring semi-open indoor barns and outdoor exercise areas. The farm includes 159 lactating Saanen dairy goats and 10 black goats under the same management conditions.",
    card_devices_title: "Acquisition Devices",
    card_devices_body: "A multi-camera system was deployed indoors and outdoors, including YW7100HR-SC9 infrared network cameras and DS-IPC-B12-I/POE cameras. Videos were recorded at 1080p and 25 fps, complemented by high-resolution Canon EOS 60D images.",
    card_annotations_title: "Annotation Protocols",
    card_annotations_body: "Detection uses LabelImg/PASCAL VOC, instance segmentation uses LabelMe/COCO, semantic segmentation uses EasyData, and tracking uses ImageLabel/VOT. Pose estimation adopts 17 keypoints, behavior recognition includes seven classes, and identification is organized by identity folders.",
    card_protocol_title: "Benchmark Protocol",
    card_protocol_body: "Six supervised tasks adopt a 7:1:2 train/val/test split. Detection, instance segmentation, and pose estimation use AP/AP50/AP75; semantic segmentation uses mIoU/mDice/mPA; behavior recognition uses mAP/mAcc/F1; tracking uses EAO/Success/Speed.",
    structure_title: "DGV-Suite Subset Structure (adapted from the paper)",
    examples_title: "Paper Figures & Data Characteristics",
    examples_desc: "These visual summaries are adapted from the key figures in the manuscript and can serve as project-page examples and statistical overviews.",
    example_1: "Figure 1: Global stock dynamics of cattle, sheep, swine, and goats",
    example_2: "Figure 2: Examples of masks, boxes, polygons, and keypoints",
    example_3: "Figure 3: Percentage of invisible keypoints in the pose subset",
    example_4: "Figure 4(a): Behavior recognition category distribution",
    example_5: "Figure 4(b): Head/body tracking subset statistics",
    example_6: "Figure 4(c-d): Instance count and semantic mask-ratio distributions",
    benchmark_title: "Benchmark Results",
    benchmark_desc: "The following tables correspond to Table 2 in the manuscript and retain the representative baselines and official metrics for six supervised tasks.",
    note_protocol_title: "Official Protocol",
    note_protocol_body: "All results are reported on the test set, while the validation set is used for model selection and early stopping. Detection/segmentation/pose use AP-based metrics; semantic segmentation uses mIoU, mDice, and mPA; behavior recognition uses mAP, mAcc, and F1; tracking uses EAO, Success, and Speed.",
    note_observation_title: "Observations",
    note_observation_body: "YOLOv11 leads object detection, YOLOv12-Seg leads instance segmentation, DeepLabV3+ performs best in semantic segmentation, ELSlowFast-LSTM achieves the highest mAP for behavior recognition, and ODTrack obtains the highest EAO for tracking.",
    task_detection_title: "Object Detection",
    task_insseg_title: "Instance Segmentation",
    task_pose_title: "Pose Estimation",
    task_semseg_title: "Semantic Segmentation",
    task_behavior_title: "Behavior Recognition",
    task_tracking_title: "Object Tracking",
    table_method: "Method",
    table_backbone: "Backbone",
    table_speed: "Speed",
    benchmark_note: "Note: Table 2 states that the underlined models were trained on a 4060Ti, while the others were trained on an A40 GPU.",
    download_title: "Resources & Downloads",
    download_desc: "This section collects the project page, paper PDF, benchmark summary, and citation entry.",
    res_project_title: "Project Page",
    res_project_desc: "The official project-page URL given in the manuscript abstract, suitable for data access, supplementary material, and future updates.",
    res_paper_title: "Paper PDF",
    res_paper_desc: "The uploaded DGV-Suite manuscript PDF is packaged into this website template and can be opened online after deployment.",
    res_benchmark_title: "Benchmark Protocol",
    res_benchmark_desc: "Includes the split setup, evaluation metrics, and representative results from Table 2 across six supervised tasks.",
    res_cite_title: "BibTeX Citation",
    res_cite_desc: "Provides an anonymous-submission BibTeX entry that can be updated later with author and venue information.",
    citation_title: "Citation",
    btn_copy: "Copy BibTeX",
    contact_title: "Notes & Contact",
    contact_body: "This website currently follows the anonymous manuscript information you uploaded. For a public release, you should later add author names, affiliations, access policy, code repositories, and contact email.",
    contact_item_1: "Contact: to be updated after review",
    contact_item_2: "License: benchmark release policy to be updated",
    contact_item_3: "Supplementary: keypoint and behavior definitions are referenced on the project page",
    footer_note: "Task-structured dairy goat vision benchmark website.",
    copied: "Copied",
    copy_failed: "Copy failed"
  }
};

const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const copyBibtex = document.getElementById("copyBibtex");
const copyStatus = document.getElementById("copyStatus");

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh"
    ? "DGV-Suite | 奶山羊视觉基准"
    : "DGV-Suite | Dairy Goat Vision Benchmark";
  if (langToggle) langToggle.textContent = lang === "zh" ? "EN" : "中文";
  localStorage.setItem("datasetSiteLang", lang);
}

langToggle?.addEventListener("click", () => {
  const current = localStorage.getItem("datasetSiteLang") || "zh";
  applyLanguage(current === "zh" ? "en" : "zh");
});

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => nav.classList.remove("open"));
});

copyBibtex?.addEventListener("click", async () => {
  const bibtex = document.getElementById("bibtex")?.textContent || "";
  try {
    await navigator.clipboard.writeText(bibtex);
    const current = localStorage.getItem("datasetSiteLang") || "zh";
    copyStatus.textContent = translations[current].copied;
    setTimeout(() => {
      copyStatus.textContent = "";
    }, 1800);
  } catch (error) {
    const current = localStorage.getItem("datasetSiteLang") || "zh";
    copyStatus.textContent = translations[current].copy_failed;
  }
});

const preferred = localStorage.getItem("datasetSiteLang") || "zh";
applyLanguage(preferred);
