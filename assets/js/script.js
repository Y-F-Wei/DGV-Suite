const translations = {
  zh: {
    nav_overview: "概览",
    nav_abstract: "摘要",
    nav_dataset: "数据集",
    nav_examples: "样例",
    nav_benchmark: "基准",
    nav_download: "下载",
    nav_citation: "引用",
    hero_badge: "科研数据集官网模板 · GitHub Pages Ready",
    hero_title: "GoatMVT: 面向智能养殖的多视觉任务奶山羊数据集",
    hero_subtitle: "一个可直接部署到 GitHub Pages 的中英双语数据集网站模板，适用于目标检测、跟踪、重识别、行为识别与疾病诊断等科研任务展示。",
    btn_dataset: "下载数据集",
    btn_benchmark: "查看基准结果",
    btn_paper: "论文与引用",
    meta_authors_label: "作者",
    meta_authors: "Your Team, University / Lab",
    meta_venue_label: "状态",
    meta_venue: "Dataset / Project Page / Benchmark",
    meta_links_label: "链接",
    overview_title: "数据集概览",
    overview_desc: "用卡片快速展示你的数据规模、任务类型和采集设置。",
    stat_images: "图像数量",
    stat_videos: "视频数量",
    stat_tasks: "视觉任务",
    stat_scenes: "采集场景",
    stat_monitoring: "长时段监测",
    stat_identity: "个体级标注",
    abstract_title: "摘要",
    abstract_p1: "智能养殖场景下，公开可用的奶山羊多任务视觉数据集仍然稀缺。为支持检测、分割、跟踪、重识别、行为识别与羊病智能诊断等任务，我们构建了一个具有统一组织结构和跨任务评测接口的数据集模板展示站点。",
    abstract_p2: "该模板强调三类核心信息：数据采集与标注规范、代表性视觉样例、以及标准化 benchmark 展示方式。你可以直接替换文本、链接、图片和表格，将其作为论文配套项目页、数据集官网或实验平台展示页。",
    highlights_title: "亮点",
    highlight_1: "中英双语一键切换，适合期刊论文和国际会议配套展示。",
    highlight_2: "模块覆盖数据集官网常见内容：摘要、样例、下载、基准、引用。",
    highlight_3: "纯静态实现，无需后端，可直接部署到 GitHub Pages。",
    highlight_4: "便于替换为奶山羊、牛、猪、禽类等农业视觉数据集页面。",
    dataset_title: "数据集描述",
    dataset_desc: "建议把采集设置、任务定义、标注结构和数据划分写清楚，方便审稿人与使用者理解。",
    card_collection_title: "采集设置",
    card_collection_body: "固定顶置与侧视摄像头，覆盖多栏舍、多时间段、多光照条件，支持连续视频采集与多场景分析。",
    card_tasks_title: "任务覆盖",
    card_tasks_body: "目标检测、实例分割、多目标跟踪、个体重识别、行为识别、疾病诊断等任务可统一展示。",
    card_annotations_title: "标注结构",
    card_annotations_body: "推荐展示 JSON 或 COCO/MOT 风格标注组织方式，并补充类别定义、ID 规则和质量控制流程。",
    card_split_title: "数据划分",
    card_split_body: "建议提供 train / val / test 划分原则，以及跨场景、跨个体或跨时段评测设置说明。",
    structure_title: "示例：统一数据组织结构",
    examples_title: "可视化样例",
    examples_desc: "这里适合放原始图像、检测框、分割 mask、跟踪轨迹、行为类别和病害样例。",
    example_1: "检测样例",
    example_2: "分割样例",
    example_3: "跟踪样例",
    example_4: "重识别样例",
    example_5: "行为识别样例",
    example_6: "疾病诊断样例",
    benchmark_title: "基准结果",
    benchmark_desc: "建议展示多个任务的 baseline，并保持指标和划分协议一致。",
    table_method: "方法",
    task_detection: "检测",
    task_segmentation: "分割",
    task_tracking: "跟踪",
    task_reid: "重识别",
    task_behavior: "行为识别",
    download_title: "下载与资源",
    download_desc: "把论文、代码、数据、补充材料和许可证入口集中放在这里。",
    res_code_title: "代码仓库",
    res_code_desc: "将此链接替换为 GitHub / Gitee / Hugging Face 项目主页。",
    res_paper_title: "论文链接",
    res_paper_desc: "可填写 arXiv、期刊官网、会议主页或 DOI 链接。",
    res_dataset_title: "数据下载",
    res_dataset_desc: "可指向 Hugging Face、学校服务器、网盘或 GitHub Release。",
    res_cite_title: "BibTeX 引用",
    res_cite_desc: "建议提供一键复制引用，方便论文使用者标准化引用。",
    citation_title: "引用",
    btn_copy: "复制 BibTeX",
    contact_title: "联系与许可",
    contact_body: "建议在这里说明数据使用协议、非商业用途限制、隐私与伦理声明，以及联系邮箱。",
    contact_note: "请根据你的实际论文状态、基金信息和机构要求修改本页。",
    footer_note: "Built for academic datasets, benchmarks, and project pages.",
    copied: "已复制"
  },
  en: {
    nav_overview: "Overview",
    nav_abstract: "Abstract",
    nav_dataset: "Dataset",
    nav_examples: "Examples",
    nav_benchmark: "Benchmark",
    nav_download: "Download",
    nav_citation: "Citation",
    hero_badge: "Academic Dataset Website Template · GitHub Pages Ready",
    hero_title: "GoatMVT: A Multi-Task Vision Dataset for Intelligent Dairy Goat Farming",
    hero_subtitle: "A bilingual dataset website template ready for GitHub Pages, suitable for object detection, tracking, re-identification, behavior recognition, and disease diagnosis project pages.",
    btn_dataset: "Download Dataset",
    btn_benchmark: "View Benchmark",
    btn_paper: "Paper & Citation",
    meta_authors_label: "Authors",
    meta_authors: "Your Team, University / Lab",
    meta_venue_label: "Status",
    meta_venue: "Dataset / Project Page / Benchmark",
    meta_links_label: "Links",
    overview_title: "Dataset Overview",
    overview_desc: "Use concise cards to summarize scale, task coverage, and data collection settings.",
    stat_images: "Images",
    stat_videos: "Videos",
    stat_tasks: "Vision Tasks",
    stat_scenes: "Scenes",
    stat_monitoring: "Long-term Monitoring",
    stat_identity: "ID-level Annotation",
    abstract_title: "Abstract",
    abstract_p1: "Public multi-task vision datasets for dairy goats remain limited in intelligent farming scenarios. To support detection, segmentation, tracking, re-identification, behavior recognition, and intelligent disease diagnosis, this template demonstrates a unified dataset website structure with organized content and standardized evaluation presentation.",
    abstract_p2: "The template emphasizes three key elements: data collection and annotation protocols, representative visual examples, and benchmark reporting. You can directly replace the text, links, images, and tables to build a paper companion website, dataset homepage, or project showcase.",
    highlights_title: "Highlights",
    highlight_1: "One-click Chinese/English switching for journals, conferences, and international collaboration.",
    highlight_2: "Covers the typical modules of a dataset homepage: abstract, examples, download, benchmark, and citation.",
    highlight_3: "Pure static implementation with no backend required, directly deployable on GitHub Pages.",
    highlight_4: "Easy to adapt for goat, cattle, pig, poultry, or other agricultural vision datasets.",
    dataset_title: "Dataset Description",
    dataset_desc: "Clearly describe your collection setup, task definitions, annotation schema, and split protocol for reviewers and users.",
    card_collection_title: "Collection Setup",
    card_collection_body: "Fixed top-view and side-view cameras cover multiple pens, time periods, and lighting conditions for continuous video capture and cross-scene analysis.",
    card_tasks_title: "Task Coverage",
    card_tasks_body: "Object detection, instance segmentation, multi-object tracking, individual re-identification, behavior recognition, and disease diagnosis can all be presented here.",
    card_annotations_title: "Annotation Schema",
    card_annotations_body: "Show your JSON or COCO/MOT-style annotation layout, plus class definitions, ID rules, and quality control procedures.",
    card_split_title: "Data Splits",
    card_split_body: "Provide train/val/test principles and explain cross-scene, cross-identity, or cross-temporal evaluation settings.",
    structure_title: "Example: Unified Dataset Structure",
    examples_title: "Visual Examples",
    examples_desc: "This section is ideal for raw images, boxes, masks, tracks, behavior classes, and disease examples.",
    example_1: "Detection Example",
    example_2: "Segmentation Example",
    example_3: "Tracking Example",
    example_4: "Re-identification Example",
    example_5: "Behavior Recognition Example",
    example_6: "Disease Diagnosis Example",
    benchmark_title: "Benchmark Results",
    benchmark_desc: "Present multiple baselines and keep your metrics and split protocol consistent.",
    table_method: "Method",
    task_detection: "Detection",
    task_segmentation: "Segmentation",
    task_tracking: "Tracking",
    task_reid: "ReID",
    task_behavior: "Behavior",
    download_title: "Downloads & Resources",
    download_desc: "Collect all links to papers, code, data, supplements, and licenses in one place.",
    res_code_title: "Code Repository",
    res_code_desc: "Replace this link with your GitHub, Gitee, or Hugging Face project page.",
    res_paper_title: "Paper Link",
    res_paper_desc: "Point this to arXiv, the journal page, conference page, or DOI entry.",
    res_dataset_title: "Dataset Download",
    res_dataset_desc: "This may link to Hugging Face, university servers, cloud drive mirrors, or GitHub Releases.",
    res_cite_title: "BibTeX Citation",
    res_cite_desc: "Provide copy-friendly citations to standardize how users reference your work.",
    citation_title: "Citation",
    btn_copy: "Copy BibTeX",
    contact_title: "Contact & License",
    contact_body: "Use this area to explain usage terms, non-commercial restrictions, privacy/ethics statements, and contact information.",
    contact_note: "Please revise this page based on your actual paper status, grant support, and institutional requirements.",
    footer_note: "Built for academic datasets, benchmarks, and project pages.",
    copied: "Copied"
  }
};

const root = document.documentElement;
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
    ? "GoatMVT Dataset | 双语数据集网站模板"
    : "GoatMVT Dataset | Bilingual Dataset Website Template";
  langToggle.textContent = lang === "zh" ? "EN" : "中文";
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
    copyStatus.textContent = "Copy failed";
  }
});

const preferred = localStorage.getItem("datasetSiteLang") || "zh";
applyLanguage(preferred);
