import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative h-64 w-96">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Home;
