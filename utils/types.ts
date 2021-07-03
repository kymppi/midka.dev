export interface IBlogPost {
  title: string;
  snippet: string;
  image: string;
  createdAt: number;
  updatedAt: number;
  author: IAuthor;
}

export interface IAuthor {
  name: string;
  email: string;
}
