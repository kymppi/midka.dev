import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { getWindowDimensions } from '../utils/getWindowDimensions';

interface BackgroundImageProps {
  alt: string;
  src: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({ alt, src }) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleResize = () => {
    const { width, height } = getWindowDimensions();

    setWidth(width);
    setHeight(height);
  };

  // Get the window dimensions on load
  useEffect(() => handleResize, []);

  // Resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        alt={alt}
        src={`${src}&auto=format&fit=crop&w=${width}&h=${height}`}
        //src={`https://source.unsplash.com/${width}x${height}/?nature,water,winter,landscape,mountains`}
        width={width}
        height={height}
      />
    );
  }

  return null;
};

export default BackgroundImage;
