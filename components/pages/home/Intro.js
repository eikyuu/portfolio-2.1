import Image from "next/image";
import React from "react";
import horizontal from "../../../public/images/horizontal.webp";
const Intro = () => {
  return (
    <section className="bg-gray-100 p-5">
      <section className="text-xl max-w-screen-xl m-auto flex flex-wrap">
        <h2 className="2xl:text-4xl font-semibold mb-5">Mon parcours de dev</h2>
        <article className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2">
            <p className="font-sans text-xl text-gray-600 mb-5 lg:mr-5">
              👋 Moi c'est Vincent, et je suis un développeur fullstack
              spécialisé ReactJS & NextJS avec Symfony en API. Mon aventure en tant que
              développeur démarre en 2018 ou ma curiosité et ma passion de la
              culture "Do-it-yourself", de l'informatique et du monde de l'image
              m’a amené à créer mes premiers sites web. Mes compétences se sont
              grandement améliorés lorsque j’ai rejoint la Wild code school en
              septembre 2019 ou j'ai appris à développer d'une façon
              professionnelle et j’ai depuis réalisé de nombreux projets !
            </p>
          </div>
          <div className="lg:w-1/2">
            <p className="font-sans text-xl text-gray-600 mb-5">
              Tous ces projets ont contribué à l'amélioration de mes
              compétences, et je suis aujourd’hui capable de créer et maintenir
              un projet de A à Z avec des outils tel que
              <strong>
                {" "}
                Reactjs, NextJS, Redux, Symfony & Api Platform, TailwindCSS & Netlify etc.
              </strong>{" "}
              Je concentre mes compétences en frontend, mais je suis tout à
              fait capable de travailler sur des projets backend avec Symfony.
              Actuellement, je travail à temps pleins en tant que développeur
              fullstack pour
              <strong> Citya Immobilier</strong> ou je maintiens et réalise de nouvelles features sur les sites
              de la holding <strong>Arche</strong>.
            </p>
          </div>
        </article>
        <p className="text-gray-500 italic mb-5">
          « La création d'un site web ou d'une application est un art. On peint
          le code comme un tableau, une œuvre prend vie lentement sous nos
          doigts. »
        </p>
        <picture data-aos="fade-up">
          <Image src={horizontal} className="" alt="linkedin logo" />
        </picture>
      </section>
    </section>
  );
};

export default Intro;
