import { NextSeo } from 'next-seo';
import { IBlogPost } from './../../utils/types';
import { FeaturedImage } from '../../components/images/FeaturedImage';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../../lib/mdx';
import MDXComponents from '../../components/MDXComponents';

function BlogPost({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: IBlogPost;
}) {
  return (
    <>
      <NextSeo title={frontMatter.title} description={frontMatter.snippet} />
      <div>
        <h1 className="text-center text-lg font-bold text-blue-500 drop-shadow-lg">
          {frontMatter.title}
        </h1>
        <FeaturedImage title={frontMatter.title} imageUri={frontMatter.image} />
        <p>{frontMatter.snippet}</p>
        <section>
          <MDXRemote {...mdxSource} components={MDXComponents} lazy />
        </section>
      </div>
    </>
  );
}

export default BlogPost;

export async function getStaticPaths() {
  const posts = (await getFiles('blog')) as unknown as string[];

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.split('.')[0],
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
