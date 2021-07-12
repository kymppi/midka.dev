import { IBlogPost } from '../utils/types';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogListItem({
  title,
  updatedAt,
  snippet,
  image,
  author,
  tags,
  slug,
}: IBlogPost) {
  return (
    <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
      <div className="bg-white rounded-lg overflow-hidden shadow relative">
        <div className="relative h-56 w-full">
          <Image
            className="h-56 w-full object-cover object-center"
            src={image}
            alt="Article Image"
            layout="fill"
          />
        </div>
        <div className="p-4 h-auto md:h-40 lg:h-48">
          <Link href={`blog/${slug}`}>
            <a className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg">
              {title}
            </a>
          </Link>
          <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            {snippet}
          </div>
          <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
            {tags?.map((tag) => (
              <a
                key={tag}
                className="inline bg-gray-300 py-1 px-2 m-1 rounded-full text-xs lowercase text-gray-700"
                href={'#' + tag}
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
