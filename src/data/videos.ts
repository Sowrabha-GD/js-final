import type { VideoData } from "@/components/VideoCard";

export const videos: VideoData[] = [
  {
    slug: "salesforce-flow-best-practice",
    title: "Salesforce Flow Best Practices for Enterprise Orgs",
    category: "Engineering",
    duration: "18:42",
    summary: "Patterns and anti-patterns for using Flow at scale in enterprise Salesforce implementations.",
    youtubeId: "FCVchR2gj-c",
  },
  {
    slug: "integration-architecture-patterns",
    title: "Integration Architecture Patterns Explained",
    category: "Architecture",
    duration: "24:15",
    summary: "A visual walkthrough of the most common integration patterns and when to use each one.",
    youtubeId: "MlvBO8xJBGE",
  },
  {
    slug: "lwc-performance-optimization",
    title: "LWC Performance Optimization Techniques",
    category: "Career",
    duration: "15:30",
    summary: "Practical techniques to improve Lightning Web Component rendering and data loading performance.",
    youtubeId: "qH1nyigzjKc",
  },
  {
    slug: "data-modeling-for-scale",
    title: "Data Modeling for Scale in Salesforce",
    category: "Business",
    duration: "21:08",
    summary: "How to design data models that perform well as your org grows from thousands to millions of records.",
    youtubeId: "wOJZcsFxIXg",
  },

];

export const videoCategories = [...new Set(videos.map((v) => v.category))];
