import { FC } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";

interface BlogPostsProps {}

async function getBlogPosts() {
  const filePath = path.join(process.cwd(), "data", "blogPosts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const blogPosts: BlogPost[] = JSON.parse(fileContents);

  return blogPosts;
}

export default async function Page({}: BlogPostsProps) {
  const blogPosts = await getBlogPosts();
  return (
    <main className="container mx-auto flex flex-col md:px-24 md:my-20 flex-1">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="w-full mt-9">
        <div className="w-full flex flex-col gap-6">
          {blogPosts.map((blog) => (
            <div
              className="flex flex-col sm:flex-row gap-4 border-b pb-6"
              key={blog.id}
            >
              <div className="aspect-video w-full sm:w-96 relative rounded-md overflow-hidden">
                <Image src={blog.thumbnail} alt="work image" fill />
              </div>
              <div className="w-full flex flex-col gap-5">
                <h2 className="text-3xl font-bold">{blog.title}</h2>
                <div className="flex flex-row gap-2">
                  <span className="text-base whitespace-nowrap">
                    {blog.date}
                  </span>{" "}
                  |
                  <span className="text-gray-500 text-base">{blog.author}</span>
                </div>
                <div className="text-base">{blog.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
