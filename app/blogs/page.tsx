import LightBoxImage from "@/components/LightBoxImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import fs from "fs";
import path from "path";

interface BlogPostsProps {
  searchParams?: { query?: string };
}

async function getBlogPosts(searchQuery: string = ""): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), "data", "blogPosts.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  let blogPosts: BlogPost[] = JSON.parse(fileContents);

  if (searchQuery) {
    blogPosts = blogPosts.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div className="w-full flex flex-col">
          {blogPosts.map((blog) => (
            <div
              className="flex flex-col sm:flex-row gap-4 border-b p-6 group hover:bg-gray-200 rounded-lg hover:scale-105 hover:shadow-2xl"
              key={blog.id}
            >
              <LightBoxImage imgSrc={blog.thumbnail} />
              <div className="w-full flex flex-col gap-5">
                <h2 className="text-3xl font-bold group-hover:text-[#FF6464]">
                  {blog.title}
                </h2>
                <div className="flex flex-row gap-2 group-hover:font-semibold">
                  <span className="text-base whitespace-nowrap">
                    {blog.date}
                  </span>{" "}
                  |
                  <span className="text-gray-500 text-base">{blog.author}</span>
                </div>
                <div className="text-base group-hover:font-semibold">
                  {blog.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
