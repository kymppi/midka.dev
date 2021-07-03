import Image from 'next/image';
import { NextSeo } from 'next-seo';

type Props = {
  imageUri: string;
  title: string;
};

export const FeaturedImage = ({ imageUri, title }: Props) => {
  return imageUri ? (
    <>
      <NextSeo
        openGraph={{
          images: [
            {
              url: `${imageUri}`,
              width: 2048,
              height: 1152,
              alt: `Featured image for ${title}`,
            },
          ],
          site_name: 'Midka.Dev',
        }}
        twitter={{
          handle: '@aTwitterHandle',
          cardType: 'summary_large_image',
        }}
      />
    </>
  ) : null;
};

function getImageUri(title: string) {
  const titleForFetching =
    'images/' + title.replaceAll(' ', '-').toLowerCase() + '.jpg';
  return titleForFetching;
}
