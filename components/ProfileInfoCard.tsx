import Image from 'next/image';
import React, { FC } from 'react';
import Card, { CardProps } from './Card';

interface ProfileInfoProps extends CardProps {
  name: string;
  photoUri?: string;
}

const ProfileInfoCard: FC<ProfileInfoProps> = ({
  name,
  photoUri,
  ...props
}) => {
  return (
    <Card {...props}>
      {photoUri && (
        <div className="rounded-full">
          <div className=" relative w-12 h-12 bg-pink-400">
            <Image
              src={photoUri ? photoUri : '' /* placeholder */}
              alt={name}
              layout="fill"
            />
          </div>
        </div>
      )}
    </Card>
  );
};

export default ProfileInfoCard;
