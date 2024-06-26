import BlogPost from "@/components/BlogPost";
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
            <BlogPost blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
