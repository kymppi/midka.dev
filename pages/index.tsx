import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BackgroundImage from '../components/BackgroundImage';
import Card from '../components/Card';

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <BackgroundImage
        src="https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        alt="bg"
      />
      <div className="z-10 fixed p-6 m-6 shadow-lg h-full w-full rounded-3xl flex justify-center items-center">
        <div className="grid gap-6 grid-cols-3 grid-rows-3 m-6 h-full w-full">
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
          <Card>5</Card>
          <Card>6</Card>
          <Card>7</Card>
          <Card>8</Card>
          <Card>9</Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
