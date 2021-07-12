import BlogListItem from '../../components/BlogListItem';
import { getFiles, getFilesWithFrontMatter } from '../../lib/mdx';
import { IBlogPost } from '../../utils/types';

const BlogIndex = ({ posts }: { posts: IBlogPost[] }) => (
  <>
    <div className="flex flex-row mt-8">
      {posts.map((post) => (
        <BlogListItem key={post.slug} {...post} />
      ))}
    </div>
  </>
);

export async function getStaticProps() {
  let posts = await getFilesWithFrontMatter('blog');
  // TODO: Fetch blog posts

  return { props: { posts } };
}

export default BlogIndex;
