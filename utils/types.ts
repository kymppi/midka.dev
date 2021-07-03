export interface IBlogPost {
  title: string;
  snippet: string;
  image: string;
  createdAt: number;
  updatedAt: number;
  author: IAuthor;
  tags?: string[];
  __resourcePath: string;
}

export interface IAuthor {
  name: string;
  email: string;
}
