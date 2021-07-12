export interface IBlogPost {
  slug: string;
  title: string;
  snippet: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  author: IAuthor;
  tags?: string[];
}

export interface IAuthor {
  name: string;
  email: string;
}

export type IArticleType = 'blog';
