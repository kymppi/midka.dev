import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { IArticleType, IBlogPost } from '../utils/types';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

const root = process.cwd();

export async function getFiles(type: IArticleType) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type: IArticleType, slug?: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content);

  const returnThis: {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
    frontMatter: IBlogPost;
  } = {
    mdxSource,
    frontMatter: {
      slug: slug || type,
      title: data.title,
      author: data.author,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      image: data.image,
      snippet: data.snippet,
      tags: data.tags,
    },
  };

  return returnThis;
}

export async function getFilesWithFrontMatter(type: IArticleType) {
  const files = await getFiles(type);
  const posts = Promise.all(
    files.map(async (file) => {
      const post = await getFileBySlug(type, file.replace(/\.mdx$/, ''));
      return post.frontMatter;
    })
  );

  return posts;
}
