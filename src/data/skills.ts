import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  { name: "UI 设计", category: "design", proficiency: 70, icon: "Palette" },
  { name: "Figma", category: "design", proficiency: 65, icon: "Figma" },
  { name: "平面设计", category: "design", proficiency: 60, icon: "PenTool" },
  { name: "HTML / CSS", category: "development", proficiency: 80, icon: "Code2" },
  { name: "JavaScript", category: "development", proficiency: 65, icon: "Braces" },
  { name: "React", category: "development", proficiency: 55, icon: "Component" },
  { name: "微信小程序", category: "development", proficiency: 50, icon: "Smartphone" },
  { name: "Python", category: "development", proficiency: 60, icon: "Terminal" },
  { name: "Git", category: "tools", proficiency: 55, icon: "GitBranch" },
  { name: "VS Code", category: "tools", proficiency: 85, icon: "Code" },
  { name: "Photoshop", category: "tools", proficiency: 60, icon: "Image" },
  { name: "学习能力", category: "soft", proficiency: 90, icon: "Lightbulb" },
  { name: "沟通表达", category: "soft", proficiency: 75, icon: "MessageCircle" },
  { name: "团队协作", category: "soft", proficiency: 78, icon: "Users" },
];

export const skillCategories = [
  { key: "design" as const, label: "设计" },
  { key: "development" as const, label: "开发" },
  { key: "tools" as const, label: "工具" },
  { key: "soft" as const, label: "软技能" },
];
