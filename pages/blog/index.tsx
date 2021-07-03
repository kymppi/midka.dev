import BlogListItem from '../../components/BlogListItem';
import { IBlogPost } from '../../utils/types';
import { frontMatter as mdxFtw } from './hello-world.mdx';
import { frontMatter as howtomakedcbot } from './how-to-make-a-discord-bot.mdx';
import { frontMatter as third } from './third.mdx';

const posts: IBlogPost[] = [mdxFtw, howtomakedcbot, third, mdxFtw];

const BlogIndex = () => (
  <>
    <div className="flex flex-row mt-8">
      {posts.map((post) => (
        <BlogListItem key={post.__resourcePath} {...post} />
      ))}
    </div>
  </>
);

export default BlogIndex;
