import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
import AnotherProject from "../components/pages/home/AnotherProject";
import Banniere from "../components/pages/home/Banniere";
import Intro from "../components/pages/home/Intro";
import Project from "../components/pages/home/Project";

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
      <Banniere />
      <Intro />
      <Project />
      <AnotherProject />
    </div>
  );
}
