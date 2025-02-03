"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    const posts = {
      slug: filename.replace(".md", ""),
      ...data,
    };

    return posts;
  });
}
