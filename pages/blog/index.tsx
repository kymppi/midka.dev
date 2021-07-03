import Link from 'next/link';
import Image from 'next/image';

import { frontMatter as mdxFtw } from './hello-world.mdx';
import { frontMatter as howtomakedcbot } from './how-to-make-a-discord-bot.mdx';
import { formatPath } from '../../utils/functions';

const posts = [mdxFtw, howtomakedcbot];

const BlogIndex = () => (
  <>
    <h1 className="font-bold text-blue-500 text-4xl text-center my-4">Blog</h1>
    <div className="my-4 py-2 grid grid-cols-1">
      {posts.map((post) => (
        <div key={post.__resourcePath}>
          <div>
            <Link href={formatPath(post.__resourcePath)}>{post.title}</Link>
          </div>
          <div>{new Date(post.updatedAt).toString()}</div>
          <div>{post.snippet}</div>
        </div>
      ))}
    </div>
  </>
);

export default BlogIndex;
