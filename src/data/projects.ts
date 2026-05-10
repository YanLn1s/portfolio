import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "campus-navigator",
    title: "校园导览小程序",
    category: "web",
    description:
      "为广东金融学院设计开发的校园地图与导览微信小程序，包含建筑定位、路线规划与校园介绍功能。",
    tags: ["微信小程序", "JavaScript", "地图 API", "UI 设计"],
    image: "/projects/placeholder.svg",
    repoUrl: "https://github.com/YanLn1s/campus-navigator",
    featured: true,
    year: 2025,
  },
  {
    id: "personal-blog",
    title: "个人博客系统",
    category: "web",
    description:
      "基于 Next.js 与 Markdown 的轻量级个人博客，支持代码高亮、分类标签与响应式布局。",
    tags: ["Next.js", "React", "Markdown", "Tailwind CSS"],
    image: "/projects/placeholder.svg",
    repoUrl: "https://github.com/YanLn1s/blog",
    featured: true,
    year: 2025,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

// Design works — displayed in fan gallery
export interface DesignWork {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export const designWorks: DesignWork[] = [
  {
    id: "mollytea-1",
    title: "MolleTea 小红书推广 01",
    category: "品牌推广",
    image: "/design/mollytea-1.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-2",
    title: "MolleTea 小红书推广 02",
    category: "品牌推广",
    image: "/design/mollytea-2.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-3",
    title: "MolleTea 小红书推广 03",
    category: "品牌推广",
    image: "/design/mollytea-3.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-4",
    title: "MolleTea 小红书推广 04",
    category: "品牌推广",
    image: "/design/mollytea-4.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-5",
    title: "MolleTea 小红书推广 05",
    category: "品牌推广",
    image: "/design/mollytea-5.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-6",
    title: "MolleTea 小红书推广 06",
    category: "品牌推广",
    image: "/design/mollytea-6.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-7",
    title: "MolleTea 小红书推广 07",
    category: "品牌推广",
    image: "/design/mollytea-7.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-8",
    title: "MolleTea 小红书推广 08",
    category: "品牌推广",
    image: "/design/mollytea-8.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
  {
    id: "mollytea-9",
    title: "MolleTea 小红书推广 09",
    category: "品牌推广",
    image: "/design/mollytea-9.jpg",
    description: "奶茶品牌 MolleTea 小红书推广海报",
  },
];
