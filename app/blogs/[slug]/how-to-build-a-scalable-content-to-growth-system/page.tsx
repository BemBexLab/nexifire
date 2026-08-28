import { blogPosts } from "@/data/blogs";
import { redirect } from "next/navigation";

export const dynamicParams = false;

export const generateStaticParams = () =>
  blogPosts.map((post) => ({
    slug: post.slug,
  }));

const page = () => {
  redirect("/blogs/how-to-build-a-scalable-content-to-growth-system");
};

export default page;
