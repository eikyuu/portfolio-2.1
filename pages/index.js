import Head from "next/head";
import AnotherProject from "../components/pages/home/AnotherProject";
import Intro from "../components/pages/home/Intro";
import Hero from "../components/pages/home/Hero";
import Project from "../components/pages/home/Project";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="min-h-screen">
      <Head>
        <title>Vincent duguet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
      <Project />
      <AnotherProject />
    </div>
  );
}
