import { IAuthor, IBlogPost } from './utils/types';

declare module '*.mdx' {
  import { ReactNode } from 'react';

  export const frontMatter: IBlogPost;

  const component: ReactNode;
  export default ReactNode;
}
