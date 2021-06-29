import { NextSeo } from "next-seo";
import { FeaturedImage } from "../components/images/FeaturedImage";

interface FrontMatter {
  title: string;
  snippet: string;
  image: string;
  createdAt: number;
  updatedAt: number;
}

interface Props {
  frontMatter: FrontMatter;
  children: JSX.Element;
}

export default function Post({ frontMatter, children }: Props) {
  return (
    <>
      <NextSeo title={frontMatter.title} description={frontMatter.snippet} />
      <div>
        <h1 className="text-center text-lg font-bold text-blue-500 drop-shadow-lg">
          {frontMatter.title}
        </h1>
        <FeaturedImage title={frontMatter.title} imageUri={frontMatter.image} />
        <p>{frontMatter.snippet}</p>
        <section>{children}</section>
      </div>
    </>
  );
}
