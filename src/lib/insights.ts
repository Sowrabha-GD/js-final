export interface Insight {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  categories: string[];
  readTime?: string;
  coverImage?: string;
  content: string;
}

const modules = import.meta.glob("../data/insights/**/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(raw: string) {
  const match = raw.match(/---([\s\S]*?)---/);
  if (!match) return { data: {}, content: raw };

  const frontmatter = match[1];
  const content = raw.replace(match[0], "").trim();

  const data: any = {};
  const lines = frontmatter.split("\n");

  let currentKey: string | null = null;

  lines.forEach((line) => {
    if (line.includes(":") && !line.trim().startsWith("-")) {
      const [key, ...rest] = line.split(":");
      currentKey = key.trim();
      const value = rest.join(":").trim().replace(/^"|"$/g, "");

      if (value) {
        data[currentKey] = value;
      } else {
        data[currentKey] = [];
      }
    } else if (line.trim().startsWith("-") && currentKey) {
      const item = line.replace("-", "").trim().replace(/^"|"$/g, "");
      if (Array.isArray(data[currentKey])) {
        data[currentKey].push(item);
      }
    }
  });

  return { data, content };
}
const allInsights: Insight[] = Object.entries(modules).map(
  ([path, raw]) => {
    const { data, content } = parseFrontmatter(raw as string);

    const parts = path.split("/");
    const slug = parts[parts.length - 2]; // folder name as slug

    return {
      ...data,
      slug,
      content,
    } as Insight;
  }
);
export const insights = allInsights
  .filter((i) => i.date && i.slug)
  .sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

export const insightCategories = [
  "Admin",
  "Apex",
  "LWC",
  "visual force",
  "point & click",
];