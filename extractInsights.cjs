const fs = require("fs");
const path = require("path");

const insightsDir = path.join(__dirname, "src/data/insights");
const outputFile = path.join(__dirname, "src/data/blogs.json");

const folders = fs.readdirSync(insightsDir);

function generateTitle(slug) {
  return slug
    .replace(/^\d{4}-\d{2}-\d{2}-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function generateCategory(slug) {
  if (slug.includes("apex")) return ["Apex"];
  if (slug.includes("lwc")) return ["LWC"];
  if (slug.includes("certification")) return ["Certifications"];
  if (slug.includes("integration")) return ["Integration"];
  if (slug.includes("security")) return ["Security"];
  if (slug.includes("admin")) return ["Admin"];
  return ["Misc"];
}

const blogs = folders.map(folder => {

  const mdPath = path.join(insightsDir, folder, "index.md");
  if (!fs.existsSync(mdPath)) return null;

  const content = fs.readFileSync(mdPath, "utf8");
// detect image inside markdown OR fallback to slug-based image
let image = "";

const mdImage = content.match(/!\[[^\]]*\]\((.*?)\)/);

if (mdImage && mdImage[1]) {
  image = mdImage[1];
} else {
  // fallback image
  image = "/images/default.png";
}

const date = folder.substring(0,10);
  const title = generateTitle(folder);
  const categories = generateCategory(folder);

  const excerpt = content
    .replace(/[#>*-]/g, "")
    .replace(/\n/g, " ")
    .slice(0,160)
    .trim();

  return {
    slug: folder,
    title,
    categories,
    date,
    image,
    excerpt,
    folder
  };

}).filter(Boolean);

fs.writeFileSync(outputFile, JSON.stringify(blogs,null,2));

console.log("✅ blogs.json regenerated with titles and categories!");