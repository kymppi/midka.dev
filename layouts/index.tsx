import { ReactNode } from "react";

type FrontMatter = {
  title: string;
  snippet: string;
};

const Comp = ({ title, snippet }: FrontMatter) => ({
  children,
}: {
  children: ReactNode;
}) => (
  <div>
    <h1>{title}</h1>
    <p>{snippet}</p>
    <section>{children}</section>
  </div>
);

export default Comp;
