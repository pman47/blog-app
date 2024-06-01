import { FC } from "react";
import LightBoxImage from "./LightBoxImage";

interface BlogPostProps {
  blog: BlogPost;
}

const BlogPost: FC<BlogPostProps> = ({ blog }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b p-6 group hover:bg-gray-200 rounded-lg hover:scale-105 hover:shadow-2xl">
      <LightBoxImage imgSrc={blog.thumbnail} />
      <div className="w-full flex flex-col gap-5">
        <h2 className="text-3xl font-bold group-hover:text-[#FF6464]">
          {blog.title}
        </h2>
        <div className="flex flex-row gap-2 group-hover:font-semibold">
          <span className="text-base whitespace-nowrap">{blog.date}</span> |
          <span className="text-gray-500 text-base">{blog.author}</span>
        </div>
        <div className="text-base group-hover:font-semibold">
          {blog.description}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
