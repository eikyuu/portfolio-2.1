import React from "react";
import brosset from "../../../public/images/brosset.webp";
import media from "../../../public/images/media.webp";
import coachimmo from "../../../public/images/coachimmo.webp";
import CardProjet from "./CardProject";

const AnotherProject = () => {
  return (
    <section className="bg-gray-100 p-5">
      <section className="text-xl max-w-screen-xl	m-auto flex flex-wrap items-center ">
        <article className="flex">
          <div>
            <h3 className="2xl:text-3xl font-semibold mb-5">
              Projets plus ancien
            </h3>
            <p className="font-sans text-xl text-gray-600 mb-5">
              Retrouvez ici une liste des derniers projets auquelle j'ai
              participer.
            </p>
            <div className="flex flex-col xl:flex-row items-center lg:items-stretch">
              <CardProjet
                title={"Client Gold"}
                text={
                  "Intégration d'une nouvelle page 'mobile-first' à destination des clients gold pour Brosset Immobillier"
                }
                img={brosset}
                a={"https://www.brosset-immobilier.fr/client-gold"}
                link={"brosset-immobilier.fr/client-gold"}
              />
              <CardProjet
                title={"Carte de visite dynamique"}
                text={
                  "Création d'une carte de visite dynamique pour chaque collaborateurs de Citya Immobilier"
                }
                img={media}
                a={
                  "https://media.sas-arche.com/businesscards/html/pbriand-1.html"
                }
                link={"media.sas-arche.com/businesscards"}
              />
              <CardProjet
                title={"Coach Immo"}
                text={
                  "Réalisation d'un formulaire de mise en relation avec les partenaires Citya, gestion des leads sur un backoffice pour la BPVF."
                }
                img={coachimmo}
                a={"https://coachimmo.sas-arche.com/#/"}
                link={"coachimmo.sas-arche.com"}
              />
            </div>
            <p className="mt-5">
              Voir plus de projet ? Visitez mon github :
              <a href="https://github.com/eikyuu" target="_blank">
                {" "}
                github.com/eikyuu
              </a>
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default AnotherProject;
