import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";

export async function generateStaticParams() {
  const files = fs.readdirSync("src/content");
  const paths = files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
  return paths;
}

export async function generateMetadata({ params }) {
  const filePath = path.join("src/content", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  return {
    title: data.title,
  };
}

export default async function BlogPost({ params }) {
  const filePath = path.join("src/content", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  const post = { ...data, content: processedContent.toString() };

  // console.log(post.content);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-8">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.author}</span>
      </div>
      <Image
        src={post.featuredImage || "/placeholder.svg"}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-full object-cover rounded-lg mb-8"
      />

      <div
        className="prose prose-indigo max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
