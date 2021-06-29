import Link from "next/link";

import { frontMatter as mdxFtw } from "./hello-world.mdx";
import { frontMatter as howtomakedcbot } from "./how-to-make-a-discord-bot.mdx";

const pages = [mdxFtw, howtomakedcbot];

const formatPath = (p: string) => p.replace(/\.mdx$/, "");

const BlogIndex = () => (
  <>
    <h1 className="font-bold text-blue-500 text-center my-4">Blog</h1>
    <div className="my-4 py-2 grid grid-cols-1">
      {pages.map((page) => (
        <div
          key={page.__resourcePath}
          className="container max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start"
        >
          <div className="w-full p-3">
            <div className="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
              <img
                className="block h-auto w-full lg:w-48 flex-none bg-cover"
                src={page.image}
              />
              <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="flex justify-between ">
                  <div className="text-black font-bold text-xl mb-2 leading-tight">
                    {page.title}
                  </div>
                  <div className="text-gray-500">
                    Last Update:{" "}
                    {new Date(page.updatedAt).toLocaleDateString("en-US")}
                  </div>
                </div>
                <p className="text-gray-500">{page.snippet}</p>
                <p className="text-grey-darker text-base">Read more</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default BlogIndex;
