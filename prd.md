# PRD: mp3tomidi.vip

## 产品定位

**一句话定位：** 免费在线MP3转MIDI转换器，浏览器端AI转录，音频不上传服务器。

**替代方案：** mp3tomidi.app、musicmake.ai/mp3-to-midi、puremidi.com、44stems.com

**差异化：** 
- 域名精准匹配关键词（mp3tomidi.vip），SEO天然优势
- 100%免费，无credit限制，无注册要求
- 隐私优先：音频不离开设备
- 简洁UX：3步完成转换

**NOT-DO：**
- 不做MIDI编辑器（竞品已有，MVP不做）
- 不做YouTube转MIDI（版权风险）
- 不做stem分离（技术复杂度高）
- 不做移动端APP（纯Web）
- 不做付费功能（Phase 1纯免费）

---

## ICP（理想用户画像）

**主ICP：音乐制作人/Beatmaker**
- 痛点：需要快速从音频提取MIDI用于采样、remix
- 场景：从歌曲提取旋律→导入FL Studio/Ableton编辑
- 转化路径：搜索"mp3 to midi"→使用工具→下载MIDI

**次ICP：音乐学生/教师**
- 痛点：需要从录音转MIDI用于学习、教学
- 场景：录制钢琴练习→转MIDI→在DAW中慢放学习
- 转化路径：搜索"convert mp3 to midi"→使用工具→下载MIDI

**第三ICP：DJ/Remixer**
- 痛点：需要从歌曲提取旋律片段用于remix
- 场景：从歌曲提取hook→转MIDI→重新编曲
- 转化路径：搜索"mp3 to midi converter"→使用工具→下载MIDI

---

## 站点类型

**工具站（Tool Site）**

核心交互：
1. 上传音频文件（MP3/WAV/OGG/FLAC）
2. 浏览器端AI转录（Basic Pitch）
3. 预览MIDI（简单钢琴卷帘视图）
4. 下载.mid文件

---

## 页面矩阵

### 核心工具页（Index）

| URL | 主词 | H1 | Schema | CTA |
|-----|------|-----|--------|-----|
| `/` | mp3 to midi | Free MP3 to MIDI Converter | SoftwareApplication | 上传音频 |
| `/mp3-to-midi` | mp3 to midi converter | MP3 to MIDI Converter Online | SoftwareApplication | 上传音频 |
| `/midi-to-mp3` | midi to mp3 | MIDI to MP3 Converter | SoftwareApplication | 上传MIDI |
| `/wav-to-midi` | wav to midi | WAV to MIDI Converter | SoftwareApplication | 上传音频 |
| `/audio-to-midi` | audio to midi | Audio to MIDI Converter | SoftwareApplication | 上传音频 |

### 内容页（Index）

| URL | 主词 | H1 | Schema | 内链 |
|-----|------|-----|--------|------|
| `/blog/mp3-to-midi-guide` | how to convert mp3 to midi | How to Convert MP3 to MIDI: Complete Guide | Article | →工具页 |
| `/blog/best-mp3-to-midi-converters` | best mp3 to midi converter | Best MP3 to MIDI Converters in 2026 | Article | →工具页 |
| `/blog/mp3-to-midi-soundfont` | mp3 to midi soundfont | MP3 to MIDI with SoundFont: Complete Guide | Article | →工具页 |
| `/blog/midi-to-mp3-guide` | how to convert midi to mp3 | How to Convert MIDI to MP3 | Article | →工具页 |
| `/blog/what-is-midi` | what is midi | What is MIDI? A Complete Guide | Article | →工具页 |

### 辅助页（Noindex或低优先级）

| URL | 用途 | Index |
|-----|------|-------|
| `/privacy` | 隐私政策 | Noindex |
| `/terms` | 服务条款 | Noindex |
| `/about` | 关于我们 | Noindex |
| `/contact` | 联系方式 | Noindex |
| `/faq` | 常见问题 | Index |

---

## Route Contract

```
GET /                    → 首页（工具页）
GET /mp3-to-midi         → MP3转MIDI工具页
GET /midi-to-mp3         → MIDI转MP3工具页
GET /wav-to-midi         → WAV转MIDI工具页
GET /audio-to-midi       → 音频转MIDI工具页
GET /blog/*              → 博客文章
GET /privacy             → 隐私政策
GET /terms               → 服务条款
GET /about               → 关于我们
GET /contact             → 联系方式
GET /faq                 → FAQ
```

---

## Data Contract

**客户端数据（浏览器端）：**
- 用户上传的音频文件（不上传服务器）
- Basic Pitch模型（~1MB，CDN加载）
- 转换后的MIDI数据

**服务端数据（Cloudflare Workers）：**
- 页面静态内容（Cloudflare Pages）
- 博客文章（Markdown/MDX）
- 分析数据（GA4/Clarity）

**无用户数据存储：**
- 不存储用户上传的音频
- 不存储转换后的MIDI
- 不需要用户注册/登录

---

## 技术栈

**前端框架：** Next.js 14+（App Router）
**部署：** Cloudflare Pages
**AI引擎：** @spotify/basic-pitch（TensorFlow.js）
**样式：** Tailwind CSS
**分析：** GA4 + Microsoft Clarity

---

## MVP功能

**Phase 1（上线）：**
1. MP3→MIDI转换（Basic Pitch）
2. 文件上传（拖拽+点击）
3. 简单预览（音频波形+MIDI钢琴卷帘）
4. 下载.mid文件
5. 响应式设计（桌面+移动）

**Phase 2（迭代）：**
1. 批量转换
2. 转换参数调节（onset confidence、note confidence）
3. MIDI播放（Web Audio API）
4. 更多格式支持（M4A、AAC）

**Phase 3（商业化）：**
1. Freemium：高级功能订阅
2. API访问（开发者付费）
3. 广告（如果流量足够）

**Future Features（后续迭代）：**
- MIDI编辑器（钢琴卷帘编辑）
- YouTube转MIDI（URL直接转换）
- Stem分离（人声/乐器分离后转MIDI）
- 付费功能（批量转换、高级参数、API）

---

## 用户任务（P0）

1. **上传音频**：用户可以拖拽或点击上传MP3/WAV/OGG/FLAC文件
2. **转换为MIDI**：点击按钮，浏览器端AI转录，显示进度
3. **预览结果**：查看转换后的MIDI音符（钢琴卷帘视图）
4. **下载MIDI**：点击下载按钮，保存.mid文件

**验收标准：**
- 转换时间 < 30秒（5分钟音频）
- 支持文件大小 > 50MB
- 下载的MIDI可在FL Studio/Ableton中打开
- 移动端可用

---

## SEO策略

**On-Page：**
- Title包含主关键词
- H1/H2层次清晰
- Schema标记（SoftwareApplication、FAQPage、Article）
- 内链矩阵（工具页↔博客页）
- 图片alt文本优化

**Technical SEO：**
- 页面加载 < 2秒（LCP）
- 移动端友好
- sitemap.xml
- robots.txt
- canonical URL
- Open Graph / Twitter Card

**Content SEO：**
- 博客覆盖长尾词
- FAQ页面回答常见问题
- 对比文章（vs竞品）
- 教程文章（how to）

---

## 竞品最低能力

**必须达到：**
- ✅ 支持MP3/WAV/OGG/FLAC上传
- ✅ 浏览器端转换（不上传服务器）
- ✅ 下载标准.mid文件
- ✅ 响应式设计
- ✅ 免费使用

**超越竞品：**
- ✅ 域名精准匹配关键词
- ✅ 更简洁的UX
- ✅ 更快的加载速度
- ✅ 更好的SEO优化

---

## 风险

**P0：**
- Basic Pitch模型加载慢（~1MB）→ 解决：CDN缓存+懒加载
- 大文件转换卡顿浏览器 → 解决：流式处理+进度提示

**P1：**
- 转换质量不理想（复杂音频）→ 解决：提供参数调节+使用建议
- 移动端体验差 → 解决：响应式设计+触屏优化

**P2：**
- 竞品模仿 → 解决：持续SEO优化+内容更新

---

## 下游交接

**给文案：**
- 定位：免费在线MP3转MIDI转换器
- 主ICP：音乐制作人、学生、DJ
- USP：免费、隐私、简洁
- 关键词：mp3 to midi、mp3 to midi converter、convert mp3 to midi

**给设计：**
- 风格：简洁、专业、现代
- 主色：待定
- 核心页面：首页（工具页）、博客列表、博客详情

**给前端：**
- 技术栈：Next.js + Tailwind + Basic Pitch
- 核心组件：文件上传、转换进度、MIDI预览、下载按钮
- 响应式断点：mobile、tablet、desktop

**给后端：**
- 无后端需求（纯静态+客户端AI）
- Cloudflare Pages部署
- GA4/Clarity分析代码
