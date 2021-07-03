import { NextSeo } from 'next-seo';
import { FeaturedImage } from '../components/images/FeaturedImage';
import { IBlogPost } from '../utils/types';

interface Props {
  frontMatter: IBlogPost;
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
