import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "陈虎",
  initials: "CH",
  location: "广东深圳",
  locationLink: "",
  about: "前端工程师 · 中后台 / 小程序 / 跨端 App",
  summary:
    "5 年前端开发经验，长期服务中后台、微信小程序与跨端 App 场景。擅长以 React / Vue 技术栈独立推进需求分析、方案设计到上线交付；在复杂表格与配置化页面、多端电商、跨境物流等业务中有完整落地经验。注重组件化与工程效率，能把重复业务沉淀为可复用方案，并熟悉 App Store / Google Play 上架流程。",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/42159029?s=400&u=c811e1ece4016ab28ea791cf7a930dd4b456c58d&v=4",
  personalWebsiteUrl: "https://cv.qingyuano.com/",
  contact: {
    email: "qingyuano@foxmail.com",
    wechat: "/wechat.jpg",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/QingYuanO",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "桂林电子科技大学信息科技学院",
      degree: "软件工程 · 学士",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "深圳市涵仓供应链有限公司",
      badges: ["Vue3", "UniApp"],
      title: "前端开发工程师",
      start: "2024/03",
      end: "至今",
      description: (
        <ul className="list-inside list-disc">
          <li>
            负责 OMS / WMS / TMS
            中后台研发，基于 Vue3 + Vite + Pinia + Element Plus
            落地订单、库存、仓储与运输等核心模块，对接 Shopee、Lazada、TikTok
            等多平台数据，支撑跨境履约日常作业
          </li>
          <li>
            主导 QUICKBOX 国际物流 App（UniApp
            双端），覆盖跨境发货到中亚尾程签收全链路，支持多语言与暗黑主题，完成
            App Store / Google Play 上架审核
          </li>
          <li>
            开发 WMS PDA
            扫码应用，针对仓库弱网与高频扫描场景优化交互与反馈速度，降低一线操作出错率
          </li>
        </ul>
      ),
    },
    {
      company: "深圳瑞赛网络科技有限公司",
      badges: ["React", "Taro"],
      title: "前端开发工程师",
      start: "2021/07",
      end: "2023/11",
      description: (
        <ul className="list-inside list-disc">
          <li>
            参与公司核心风控中后台（迭代 5
            年+）建设，抽象高度可配置的 Table / 详情页方案，将大量
            CRUD
            页面从「重复手写」转为「配置驱动」，显著缩短同类页面交付周期
          </li>
          <li>
            使用 React PDF
            重构报表生成能力，支持按业务配置动态拼装版式与数据，替代难维护的旧导出流程
          </li>
          <li>
            负责「爱文集」营销小程序：基于事件代理实现简易富文本编辑器（广告、图片、媒体插入），并沉淀
            Taro 业务模板，降低后续同类小程序启动成本
          </li>
          <li>
            独立完成「九堡酒窖」C
            端小程序全流程（商品、购物车、订单、地址等），配合 Ant Design
            管理后台支撑红酒一日达业务
          </li>
        </ul>
      ),
    },
    {
      company: "深圳市欧克互动科技有限公司",
      badges: ["小程序", "RN"],
      title: "前端开发工程师",
      start: "2020/08",
      end: "2021/07",
      description: (
        <ul className="list-inside list-disc">
          <li>
            负责「菜菜到家」电商多端：维护微信小程序与管理后台，并用 React Native
            + Expo 交付 iOS / Android 客户端，保证核心交易链路多端一致
          </li>
          <li>
            独立打通微信支付全流程（商户认证、前后端对接、支付与回调），保障下单支付稳定可用
          </li>
          <li>
            独立交付企业内部「资产管理
            App」，覆盖资产台账、统计图表与工单提交流程，完成从需求到上线的闭环
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Vue3",
    "Taro",
    "UniApp",
    "React Native",
    "微信小程序",
    "Zustand",
    "Pinia",
    "React Query",
    "Ant Design",
    "Element Plus",
    "Tailwind",
    "Hono",
    "Node.js",
    "Expo",
  ],
  projects: [
    {
      title: "OMS / WMS / TMS 供应链中后台",
      techStack: ["Vue3", "Vite", "Pinia", "Tailwind", "Element Plus"],
      description:
        "涵仓供应链核心中后台，聚合多电商平台订单、库存与物流信息，服务跨境仓储与履约运营。",
      contributes: [
        "负责订单、仓储、运输等核心模块页面与交互落地，统一列表筛选、详情与状态流转体验",
        "抽象多平台订单字段差异，沉淀可复用的表格、筛选与详情布局，降低后续业务扩展成本",
        "配合后端完成库存与运单关键展示，保障一线运营在高峰期可稳定查单与改派",
      ],
      link: {
        label: "nanyangwms.com",
        href: "https://www.nanyangwms.com/",
      },
    },
    {
      title: "QUICKBOX 国际物流 App",
      techStack: ["UniApp", "Vue3", "Pinia", "Tailwind"],
      description:
        "面向中亚跨境物流的双端 App，覆盖从中国发货到吉尔吉斯斯坦境内尾程签收。",
      contributes: [
        "独立负责双端业务开发，落地运单跟踪、包裹签收、消息通知等核心能力",
        "实现多语言与暗黑主题，适配海外用户使用习惯与弱网场景",
        "完成 App Store 与 Google Play 上架材料准备及审核沟通，保障正式发布",
      ],
      link: {
        label: "quickbox.pro",
        href: "https://www.quickbox.pro/",
      },
    },
    {
      title: "风控中后台与配置化表格",
      techStack: ["React", "Redux", "Ant Design", "React PDF"],
      description:
        "公司主营风控业务中后台，已迭代多年，并衍生出一系列定制化管理系统。",
      contributes: [
        "设计可配置 Table / 详情方案，通过列定义、操作区与请求配置驱动页面生成",
        "将高频 CRUD 页面开发从重复编码转为配置组装，明显提升迭代效率",
        "基于 React PDF 实现动态报表导出，支持按业务规则拼装内容与样式",
      ],
    },
    {
      title: "爱文集 · 文章营销小程序",
      techStack: ["Taro", "React", "TypeScript", "Redux Toolkit", "Tailwind"],
      description:
        "集文章阅读收藏、推广植入与线索获取于一体的内容营销小程序工具。",
      contributes: [
        "基于事件代理实现简易编辑器，支持广告、图片与媒体内容插入",
        "搭建 Taro + TypeScript + Redux Toolkit 工程体系，统一状态与样式规范",
        "沉淀可复用 Taro 业务模板，缩短后续同类小程序从 0 到 1 的启动时间",
      ],
    },
    {
      title: "菜菜到家 · 多端电商",
      techStack: ["微信小程序", "React Native", "Expo", "React", "Ant Design"],
      description:
        "覆盖小程序、iOS、Android 与管理后台的一整套电商系统。",
      contributes: [
        "维护小程序端核心交易流程，并用 RN + Expo 对齐双端 App 体验",
        "参与管理后台建设，支撑商品、订单与运营配置",
        "独立完成微信支付对接，覆盖下单、支付回调与结果页闭环",
      ],
    },
    {
      title: "九堡酒窖 · 红酒一日达",
      techStack: ["Taro", "TypeScript", "Zustand", "Tailwind", "Ant Design"],
      description:
        "专注红酒即时配送的电商项目，包含管理后台与小程序客户端。",
      contributes: [
        "独立实现 C 端全流程：商品浏览、购物车、下单、地址与订单管理",
        "使用 Zustand + Tailwind 搭建清晰的状态与样式结构，保障迭代效率",
      ],
    },
    {
      title: "春天的熊读书会",
      techStack: ["Taro", "TypeScript", "Tailwind", "Hono"],
      description:
        "全球线上线下读书社区小程序，已进入北京、上海、深圳等多个城市。",
      contributes: [
        "使用 Taro + Tailwind 完成社区相关页面与活动流程开发",
        "基于 Hono 编写配套后端接口，支撑活动报名与基础数据读写",
      ],
    },
  ],
} as const;
