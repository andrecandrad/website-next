import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        heading="Capture Photography"
        message="I capture moments in nature and keep them alive."
        button="Book"
      />
      <Slider slides={SliderData} />
    </div>
  );
}
