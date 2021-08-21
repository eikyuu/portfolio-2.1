import React from "react";
import CardProjet from "./CardProject";
import lba from "../../../public/images/lba.png";
import brosset from "../../../public/images/brosset.png";

const AnotherProject = () => {
  return (
    <section className="bg-gray-100 p-5">
      <section className=" text-xl text-justify max-w-screen-xl	m-auto flex flex-wrap items-center ">
        <article className="flex">
          <div>
            <h3 className="pt-4 pl-4 2xl:text-3xl font-semibold">
              Projets plus ancien
            </h3>
            <p className="p-4 font-sans text-xl text-gray-600">
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
                img={brosset}
                a={"https://media.sas-arche.com/tv/132"}
                link={"media.sas-arche.com"}
              />
              <CardProjet
                title={"Coach Immo"}
                text={
                  "Réalisation d'un formulaire de mise en relation avec les partenaires citya immobilier, gestion des leads sur un backoffice pour la BPVF."
                }
                img={brosset}
                a={"brosset-immobilier.fr/client-gold"}
                link={"media"}
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
