# DGV-Suite Website (Updated)

This directory contains the static project website for DGV-Suite.
The site is built with:

- `index.html`
- `assets/css/style.css`
- media assets under `assets/img/`
- paper file under `assets/paper/`

No frontend framework, build tool, or JavaScript runtime is required.

## 1. Page Sections

Top navigation currently links to:

- `Overview`
- `Abstract`
- `Dataset`
- `Examples`
- `Benchmark`

An additional bottom section is included:

- `Ethics Statement and Animal Welfare`

## 2. Current Content Snapshot

### Hero

- Title: `DGV-Suite: A Benchmark Suite of Task-Specific Subsets for Dairy Goat Vision`
- Single-line author list (clickable names with `mailto:` links)
- Three-line affiliations with superscript indices
- Action buttons:
  - `Download`
  - `View Benchmark`
  - `Paper PDF` -> `assets/paper/DGV.pdf`

### Dataset and Annotation

Main blocks:

- `Farm Environment`
- `Acquisition Devices`
- `Annotation Protocols`
  - Pose Estimation (with rules and keypoint definition table)
  - Behavior Recognition (with rules and behavior definition table)
  - Detection and Tracking (with ambiguity handling and format info)
  - Segmentation Tasks (with format info)
  - Identification and Generation (with curation rules)

### Examples

The examples area is media-first (not task cards), including:

- Semantic segmentation image: `seg1.png`
- Pose estimation strip: `pose1.png` to `pose4.png`
- Instance segmentation strip: `obj1.png` to `obj4.png`
- Object detection strip: `ins1.png` to `ins4.png`
- Tracking image: `track1.png`
- Identification image: `id1.png`
- Image generation image: `gen1.png`
- Seven behavior videos:
  - `stand_0.MP4`
  - `walk_0.MP4`
  - `laydown_0.MP4`
  - `climb_0.MP4`
  - `fight_0.MP4`
  - `paralytic_0.MP4`
  - `eat_0.MP4`

### Benchmark

Benchmark tables are provided for:

- Object Detection
- Instance Segmentation
- Pose Estimation
- Semantic Segmentation
- Behavior Recognition
- Object Tracking

## 3. Directory Structure

```text
web/DGV-Suite_site_updated/
|- index.html
|- README.md
`- assets/
   |- css/
   |  `- style.css
   |- img/
   |  |- indoor.jpg
   |  |- outdoor.jpg
   |  |- seg1.png
   |  |- track1.png
   |  |- id1.png
   |  |- gen1.png
   |  |- pose1.png ... pose4.png
   |  |- obj1.png ... obj4.png
   |  |- ins1.png ... ins4.png
   |  `- stand_0.MP4, walk_0.MP4, laydown_0.MP4, climb_0.MP4, fight_0.MP4, paralytic_0.MP4, eat_0.MP4
   `- paper/
      `- DGV.pdf
```

## 4. Local Preview

Run a local static server from this directory:

```bash
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## 5. GitHub Pages Deployment

1. Push this folder to your repository.
2. Open `Settings -> Pages`.
3. Set source to `Deploy from a branch`.
4. Choose your branch (for example `main`) and root folder.
5. Save and wait for publishing.

## 6. Maintenance Notes

- Edit structure/content in `index.html`.
- Edit styling/responsive behavior in `assets/css/style.css`.
- Replace example media directly in `assets/img/` (keep filenames if you want zero HTML changes).
- Replace paper file in `assets/paper/DGV.pdf` or update the button link in `index.html`.

