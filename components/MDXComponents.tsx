/* eslint-disable react/display-name */
import { Demonstration } from './Demonstration';

const Heading = (props: any) => <h1 {...props}></h1>;

const MDXComponents = {
  h1: (props: any) => <Heading className="text-2xl" {...props} />,
  h2: (props: any) => <Heading className="text-xl" {...props} />,
  h3: (props: any) => <Heading className="text-lg" {...props} />,
  h4: (props: any) => <Heading className="text-base" {...props} />,
  h5: (props: any) => <Heading className="text-sm" {...props} />,
  h6: (props: any) => <Heading className="text-xs" {...props} />,
  Demonstration,
};

export default MDXComponents;
