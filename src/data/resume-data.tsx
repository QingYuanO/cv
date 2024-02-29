import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "陈虎",
  initials: "CH",
  location: "广东深圳",
  locationLink: "",
  about: "终身学习的坚定拥护者，不断探索新技术的掘金人。",
  summary:
    "Hello，我是一个有四年开发经验的前端开发工程师。享受编码、热爱开源，开发过多个中后台以及移动端应用，主要专注于React，也喜爱使用Next开发点小东西。",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/42159029?s=400&u=c811e1ece4016ab28ea791cf7a930dd4b456c58d&v=4",
  personalWebsiteUrl: "https://portfolio.qingyuano.cn/",
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
      company: "深圳瑞赛⽹络科技有限公司",
      badges: [],
      title: "前端开发⼯程师",
      start: "2021/07",
      end: "2023/11",
      description: (
        <ul className="list-inside list-disc">
          <li>使用React PDF重构公司报表生成功能</li>
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
    {
      company: "⼴西盛源⾏电⼦信息股份有限公司",
      badges: [],
      title: "前端开发⼯程师",
      start: "2019/07",
      end: "2020/06",
      description:
        "实现⼀个移动端的⻋辆客服中⼼系统，对⻋主的来电进⾏处理。 使⽤的技术主要有 jQuery、 Bootstrap，我的主要⼯作是编写响应式移动端⻚⾯",
    },
  ],
  skills: [
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
    "Redux Toolkit",
    "Redux",
    "Jotai",
    "Radix",
    "Ant Design",
    "Shadcn/ui",
    "Tailwind",
  ],
  projects: [
    {
      title: "爱文集",
      techStack: ["React", "Taro", "TypeScript", "Tailwind", "Redux Toolkit"],
      description:
        "爱⽂集是⼀款集阅读/收集⽂章、推⼴植⼊、获取客⼾线索等功能的综合性⽂章营销⼩程序⼯具。",
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
    },
    {
      title: "风控系统",
      techStack: ["React", "Redux", "React PDF", "Ant Design"],
      description:
        "公司的主营项⽬，已经迭代5年，基于此系统，搭建了⼀系列定制化的中后台。",
    },
    {
      title: "菜菜到家",
      techStack: [
        "React",
        "React",
        "Expo",
        "React Native",
        "Redux",
        "原生小程序",
      ],
      description:
        "菜菜到家是⼀整套电商系统，包含⼩程序、ios、android平台渠道以及相应的后台管理。",
    },
    {
      title: "资产管理App",
      techStack: ["React", "Expo", "TypeScript", "Redux"],
      description:
        "该项⽬主要的需求是完成⼀个资产管理的 APP ，⽤于管理甲⽅内部的各种资产。有基本的图表数据统计功能。",
    },
    {
      title: "简历生成",
      techStack: [
        "Side Project",
        "Next.js",
        "React PDF",
        "Tailwind",
        "Shadcn/ui",
      ],
      description: "完全本地化的多模版PDF简历生成",

      link: {
        label: "",
        href: "https://www.g-resume.qingyuano.cn/",
      },
    },
    {
      title: "Portfolio",
      techStack: [
        "Side Project",
        "Next.js",
        "framer-motion",
        "Tailwind",
        "resend",
        "react-email",
      ],
      description: "Portfolio站点",

      link: {
        label: "",
        href: "https://portfolio.qingyuano.cn/",
      },
    },
  ],
} as const;
