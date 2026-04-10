import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "陈虎",
  initials: "CH",
  location: "广东深圳",
  locationLink: "",
  about: "终身学习的坚定拥护者，不断探索新技术的掘金人。",
  summary:
    "拥有多年前端开发经验，长期深耕中后台系统、小程序与移动端应用，具备复杂业务场景的抽象建模与工程化落地能力。擅长 React 技术栈，同时具备 Vue3 + Vite + Pinia + Element Plus 的企业级项目实践经验，能够独立推进从需求分析、技术方案设计、模块开发到上线交付的完整流程。注重代码质量与团队协作，熟悉组件化、状态管理与性能优化，并持续关注前沿技术在实际业务中的价值转化。",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/42159029?s=400&u=c811e1ece4016ab28ea791cf7a930dd4b456c58d&v=4",
  personalWebsiteUrl: "https://cv.qingyuano.com/",
  contact: {
    email: "qingyuano@foxmail.com",
    tel: "17573056281",
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
      degree: "软件工程学士学位证",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "深圳市涵仓供应链有限公司",
      badges: [],
      title: "前端开发⼯程师",
      start: "2024/03",
      end: "至今",
      description: (
        <ul className="list-inside list-disc">
          <li>
            使用 Vue3 + Vite + Pinia + Tailwind + Element Plus 开发 OMS、WMS、TMS
            系统
          </li>
          <li>
            使用 UniApp 开发双端应用，包括中亚地区物流尾程包裹签收 App、WMS PDA
            快速扫描 App
          </li>
        </ul>
      ),
    },
    {
      company: "深圳瑞赛⽹络科技有限公司",
      badges: [],
      title: "前端开发⼯程师",
      start: "2021/07",
      end: "2023/11",
      description: (
        <ul className="list-inside list-disc">
          <li>使用 React PDF 重构公司报表生成功能</li>
          <li>实现⾼度定制化Table组件，极⼤简化CRUD表格⻚⾯</li>
          <li>
            基于事件代理为爱文集实现简易编辑器，包括插入广告、图片、媒体文件
          </li>
          <li>基于爱文集衍⽣出⼀个易⽤的Taro模板，集成常⽤功能</li>
        </ul>
      ),
    },
    {
      company: "深圳市欧克互动科技有限公司",
      badges: [],
      title: "前端开发⼯程师",
      start: "2020/08",
      end: "2021/07",
      description: (
        <ul className="list-inside list-disc">
          <li>
            完善公司菜菜到家项目（小程序，管理后台），并使用React
            Native、Expo实现对应的IOS和Android版
          </li>
          <li>
            独立完成微信支付功能，对微信支付的流程比较熟悉，包括企业账号认证到前后端开发
          </li>
          <li>独立完成资产管理App的开发，包括统计图表、工单提交功能</li>
        </ul>
      ),
    },
  ],
  skills: [
    // "熟练使用React，以及周边生态技术Ant Design、React Router、Redux、Zustand、Tailwind，能使用React+TypeScript开发相关组件、官网、管理系统等",
    // "熟练使用React Native以及周边生态React-Native-Navigation、React-Native-Reanimated开发移动应用",
    // "熟练使用Next以及周边生态Radix、Shadcn/ui、Prisma、NextAuth开发全栈以及移动端自适应项目",
    // "熟练使用Taro以及微信小程序原生语法开发小程序",
    // "了解Vue以及Uniapp，能使用Uniapp开发小程序",
    // "具备使用Node编写CRUD接口的能力",
    // "熟练使用Tailwind、Less、CSS Module等样式解决方案",
    // "熟练使用Git进行版本控制和代码托管",
    // "较高的技术热情和积极性，喜欢研究新技术并落地到业务场景里面",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Taro",
    "React Native",
    "Expo",
    "React Query",
    "Zustand",
    "Jotai",
    "Radix",
    "Ant Design",
    "Shadcn/ui",
    "Tailwind",
    "微信小程序",
    "Hono",
    "Vue",
    "Uniapp",
    "Element Plus",
  ],
  projects: [
    {
      title: "爱文集",
      techStack: ["React", "Taro", "TypeScript", "Tailwind", "Redux Toolkit"],
      description:
        "爱⽂集是⼀款集阅读/收集⽂章、推⼴植⼊、获取客⼾线索等功能的综合性⽂章营销⼩程序⼯具。",
      contributes: [
        "使用 Taro + TypeScript 作为开发框架与语言，使用 Redux Toolkit 管理状态，Tailwind 作为样式解决方案。",
        "基于事件代理为爱文集实现简易编辑器",
        "衍⽣出⼀个易⽤的Taro模板，集成常⽤功能",
      ],
    },
    {
      title: "九堡酒窖",
      techStack: [
        "React",
        "Ant Design",
        "Taro",
        "TypeScript",
        "Tailwind",
        "Zustand",
      ],
      description:
        "九堡酒窖是一个专注于红酒的一日送达电商项目，包含管理后台和小程序客户端。",
      contributes: [
        "使用 Taro + TypeScript 作为开发框架与语言，使用 Zustand 管理状态，Tailwind 作为样式解决方案。",
        "独立实现C端全部功能，包括订单、地址管理等",
      ],
    },
    {
      title: "风控系统",
      techStack: ["React", "Redux", "React PDF", "Ant Design"],
      description:
        "公司的主营项⽬，已经迭代5年，基于此系统，搭建了⼀系列定制化的中后台。",
      contributes: [
        "实现高度定制化Table组件，极大简化CRUD表格页面",
        "实现通过配置实现表格页、详情页，减少重复工作",
        "通过 React PDF 实现动态 PDF 报表生成",
      ],
    },
    {
      title: "菜菜到家",
      techStack: [
        "React",
        "Expo",
        "React Native",
        "Redux",
        "原生小程序",
      ],
      description:
        "菜菜到家是一整套电商系统，覆盖小程序、iOS、Android 多端渠道及后台管理。",
      contributes: [
        "使用微信小程序原生语法并搭配Vant开发小程序版本。",
        "使用 React Native + TypeScript 开发双端应用。",
        "使用 React + Ant Design 搭建后台管理系统",
      ],
    },
    {
      title: "资产管理 App",
      techStack: ["React", "Expo", "TypeScript", "Redux"],
      description:
        "该项目主要用于管理甲方内部各类资产，包含基础图表统计与工单提交流程。",

      contributes: ["使用 Expo 进行开发", "独立完成全流程交付"],
    },
    {
      title: "春天的熊读书会",
      techStack: ["Taro", "TypeScript", "Tailwind", "Hono"],
      description:
        "春天的熊读书会是一个全球线上线下读书社区小程序，目前已经进入北京、上海、深圳等多个城市",
      contributes: ["使用 Taro + Tailwind 开发", "使用 Hono 开发后端接口"],
    },
    {
      title: "OMS、WMS、TMS 系统",
      techStack: ["Vue3", "Vite", "Pinia", "Tailwind", "Element Plus"],
      description:
        "涵仓供应链 OMS、WMS、TMS 系统，聚合 Shopee、Lazada、TikTok 等平台的订单、库存与物流信息。",
      contributes: ["使用 Vue3 + Vite + Pinia + Tailwind + Element Plus 开发"],
    },
    {
      title: "QUICKBOX 国际物流 App",
      techStack: ["Vue3", "Vite", "Pinia", "Tailwind", "UniApp"],
      description:
        "QUICKBOX 国际物流 App 深度整合电商与现代物流能力，覆盖从中国跨境发货到吉尔吉斯斯坦境内最后一公里配送。",
      contributes: [
        "使用 UniApp 开发双端应用，支持多语言与暗黑主题",
        "成功上架 Google Play 和 App Store",
      ],
      link: {
        label: "",
        href: "https://www.quickbox.pro/",
      },
    },
  ],
} as const;
