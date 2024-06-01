import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import fs from "fs";
import Image from "next/image";
import path from "path";

interface BlogPostsProps {
  searchParams?: { query?: string };
}

async function getBlogPosts(searchQuery: string = "") {
  const filePath = path.join(process.cwd(), "data", "blogPosts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  let blogPosts: BlogPost[] = JSON.parse(fileContents);

  if (searchQuery) {
    blogPosts = blogPosts.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return blogPosts;
}

export default async function Page({ searchParams }: BlogPostsProps) {
  const searchQuery = searchParams?.query || "";
  const blogPosts = await getBlogPosts(searchQuery);

  return (
    <main className="container mx-auto flex flex-col md:px-24 md:my-20 flex-1">
      <h1 className="text-3xl font-bold">Blog</h1>
      <form
        className="mt-6 gap-2 flex flex-row items-center"
        action="/blogs"
        method="get"
      >
        <Input
          type="text"
          name="query"
          placeholder="Search blog posts"
          defaultValue={searchQuery}
          className="flex-1"
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="w-full mt-9">
        <div className="w-full flex flex-col gap-6">
          {blogPosts.map((blog) => (
            <div
              className="flex flex-col sm:flex-row gap-4 border-b pb-6"
              key={blog.id}
            >
              <div className="aspect-video w-full sm:w-96 relative rounded-md overflow-hidden">
                <Image
                  src={blog.thumbnail}
                  alt="work image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                  priority
                />
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
