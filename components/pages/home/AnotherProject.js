import React from "react";
import brosset from "../../../public/images/brosset.png";
import media from "../../../public/images/media.PNG";
import coachimmo from "../../../public/images/coachimmo.PNG";
import CardProjet from "./CardProject";

const AnotherProject = () => {
  return (
    <section className="bg-gray-100 p-5">
      <section className=" text-xl text-justify max-w-screen-xl	m-auto flex flex-wrap items-center ">
        <article className="flex">
          <div>
            <h3 className="2xl:text-3xl font-semibold mb-5">
              Projets plus ancien
            </h3>
            <p className="font-sans text-xl text-gray-600 mb-5">
              Retrouvez ici une liste des derniers projets auquelle j'ai
              participer.
            </p>
            <div className="flex">
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
                title={"Ecran des agences Citya Immobilier"}
                text={
                  "Création d'un ecran interactif, actualités du groupe, météo etc... pour toutes les agences Citya."
                }
                img={media}
                a={"https://media.sas-arche.com/tv/132"}
                link={"media.sas-arche.com"}
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
              <a href="linkedin.com/in/vincent-duguet/" target="_blank">
                github
              </a>
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default AnotherProject;
