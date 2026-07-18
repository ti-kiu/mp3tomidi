# Project Control Board

项目：mp3tomidi
域名：mp3tomidi.vip
目标市场：US / English
当前模式：automation_factory
当前状态：RUNNING
事实源：Kanban + project-control.md

## 项目启动卡
- 项目名：mp3tomidi
- 目标关键词：mp3tomidi
- 已注册域名：mp3tomidi.vip（待确认注册状态）
- 目标市场：US / English
- 项目类型：工具站（MP3 to MIDI 在线转换器）
- 技术栈：Cloudflare-first（Pages + Workers）
- 商业化：待确定
- 禁止事项：待确认
- 上线期望：普通

## 学员只需要处理
- [ ] 域名 mp3tomidi.vip 是否已注册
- [ ] DNS/Cloudflare 权限是否可用
- [ ] GitHub 账号是否可用
- [ ] Cloudflare 账号是否可用
- [ ] GSC/Bing Webmaster 是否可配置
- [ ] 是否允许生产部署
- [ ] 是否允许公开发布/外链提交

## 竞品警告
- mp3tomidi.org 已存在！同名 .org 域名，功能齐全
- 需要差异化策略：功能、体验、SEO、技术方案

## 自动流水线
- 01 research：keyword-research-agent ← 当前阶段
- 02 PRD：product-definition-prd
- 03 pricing：site-pricing-calibration
- 04 compliance：student-site-compliance-pipeline
- 05 copy：site-copywriting-student
- 06 design：site-design-student
- 07 frontend：frontend-site-automation
- 08 backend/data：backend-auto-site-cloudflare-workers
- 09 QA：student-site-qa-acceptance
- 10 SEO：seo-launch-workflow
- 11 launch：site-ops-growth-launch
- 12 review：site-data-review-iteration

## 当前状态
- running：07 frontend（收尾中）
- waiting：09 QA, 10 SEO
- blocked：08 backend（缺 Cloudflare Token）
- done：01 research ✓, 02 PRD ✓, 03 pricing ✓, 04 compliance ✓, 05 copy ✓, 06 design ✓

## 前端进度（7/18）
- ✅ 首页完整（Hero + HowItWorks + Features + Pricing + FAQ + Footer）
- ✅ MIDI 预览（Canvas 钢琴卷帘，hover tooltip）
- ✅ Pricing 区块（免费 vs 竞品对比）
- ✅ 合规页（/privacy, /terms）
- ✅ SEO 路由页（/mp3-to-midi, /wav-to-midi, /audio-to-midi, /midi-to-mp3）
- ✅ Basic Pitch 转换功能（模型 + @tonejs/midi）
- 待做：sitemap.xml, robots.txt, Schema 标记, GA4/Clarity 埋点

## 阻塞日志
- 2026-07-17：Cloudflare Token 未配置 → 标 setup_required，不阻塞前期调研/PRD/文案
- 2026-07-17：GitHub repo 未创建 → 标 setup_required
- 2026-07-17：mp3tomidi.vip 域名注册状态待确认
