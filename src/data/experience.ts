import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "软件工程专业在读",
    company: "广东金融学院",
    location: "广东 广州",
    startDate: "2025-09",
    endDate: null,
    description: [
      "主修课程：程序设计基础、数据结构与算法、Web 前端开发、数据库原理",
      "自学前端技术栈，完成多个个人项目实践",
      "积极参与校园科技文化活动，负责活动海报与宣传物料设计",
    ],
    technologies: ["JavaScript", "React", "Python", "Figma"],
  },
  {
    id: "exp-xhs",
    role: "自媒体运营",
    company: "小红书 · 关于KUROMI的一切",
    companyUrl: "https://www.xiaohongshu.com/user/profile/69168a780000000032019c6c",
    location: "",
    startDate: "2024-06",
    endDate: null,
    description: [
      "运营小红书账号「关于KUROMI的一切」，积累近 3000 名粉丝",
      "为 MolleTea 等奶茶品牌制作推广海报与内容",
      "独立完成选题策划、平面设计、文案撰写与发布运营",
    ],
    technologies: ["平面设计", "内容运营", "品牌推广", "Photoshop"],
  },
];
