import Image from "next/image";
import React from "react";
import arche from "../../../public/images/arche-siege.webp";
import lba from "../../../public/images/lba.webp";

const Project = () => {
  return (
    <section className="p-5">
      <section className="text-xl max-w-screen-xl	m-auto flex flex-wrap items-center ">
        <h2 className="mb-5 mt-5 2xl:text-3xl font-semibold">
          Projets
        </h2>
        <p className="font-sans text-xl text-gray-600">
          Voici une liste non exhaustive des derniers projets terminé ou en
          cours sur lesquels j'ai travaillé en tant que développeur
          JavaScript/PHP Je travaille généralement sur une Stack ReactJS avec le
          Framework NextJS et Symfony.
        </p>
        <article className="flex mb-10 mt-10 justify-between flex-col xl:flex-row items-center">
          <picture data-aos="zoom-in" className="img-project">
            <Image src={lba} className="rounded-lg" alt="Image du bon agent" />
          </picture>
          <div className="xl:w-1/2">
            <h3 className=" 2xl:text-4xl font-semibold text-lba mb-5 mt-5 2xl:mt-0">
              Le bon agent
            </h3>
            <p className="font-sans text-xl text-gray-600 mb-5">
              Le bon agent est un réseau de mandataires immobiliers appartenant
              au groupe <strong>Arche</strong>. J’ai créé en 2021 leur
              backoffice à destination des mandataires et de l'administration en tant que développeur
              Fullstack. Ce backoffice sert à la gestion des mandataires du
              réseau, de leurs contacts et la synergie entre les filiales du
              groupe Arche ainsi que la création, l'édition et la gestion
              d'estimations pour un bien immobilier en fonction de critères
              envoyé à une API puis à la génération d'un PDF dynamique. Le site
              est conçu en ReactJS, Redux & MaterialUI pour le front et Symfony
              pour le back.
            </p>
            <a
              target="_blank"
              className="font-sans text-xl"
              href="https://github.com/eikyuu/estimation-files/blob/main/README.md"
            >
              Voir le projet
            </a>
            <br/>
            <a
                target="_blank"
                className="font-sans text-xl"
                href="https://backoffice.lebonagent.fr/#/login"
            >
             Lien vers le backoffice du Bon Agent
            </a>
          </div>
        </article>

        <article className="flex mb-10 justify-between flex-col xl:flex-row items-center">
          <div className="xl:w-1/2">
            <h3 className="2xl:text-4xl font-semibold text-lba mb-5">Arche (projet en cours)</h3>
            <p className="font-sans text-xl text-gray-600 mb-5">
              Arche est une holding immobilière regroupant plusieurs réseaux
              immobiliers ainsi que des filiales support, spécialisées en
              immobilier (assurances, diagnostics, courtage financier). Basée à
              Tours et dirigée par Philippe Briand. J’ai eu la chance de crée en
              2021 leur site web à destination des particuliers en tant que
              développeur Front-end. Le site est pensé et conçu 'Mobile First'
              afin d'optimiser l'expérience utilisateur. Le site est optimisé
              afin de répondre aux exigences de qualité attendue par une
              enseigne tel que Arche.
            </p>
            <a
              target="_blank"
              className="font-sans text-xl"
              href="https://github.com/eikyuu/arche-files/blob/main/README.md"
            >
              Voir le projet
            </a>
          </div>
          <picture data-aos="zoom-in" className="img-project mt-5">
            <Image
              src={arche}
              className="rounded-lg"
              alt="Image du siege de Arche"
            />
          </picture>
        </article>
      </section>
    </section>
  );
};

export default Project;
