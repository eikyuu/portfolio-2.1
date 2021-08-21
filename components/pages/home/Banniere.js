import React from "react";
import Image from "next/image";
import useWindowSize from "../../../hooks/useWindowSize";

const Banniere = () => {
  return (
    <React.Fragment>
      <section className="bg-fond bg-cover bg-bottom h-screen flex items-center">
        <article
          data-aos="fade-right"
          data-aos-duration="3000"
          className="container"
        >
          <h1 className="ml-5 mb-5 border-l-4 border-white pl-5 text-white text-2xl lg:text-4xl 2xl:text-4xl">
            <span className="font-bold text-2xl lg:text-4xl 2xl:text-6xl">
              Vincent Duguet
            </span>
            <br />
            Développeur{" "}
            <span className="leading-loose font-semibold">Fullstack </span>
            spécialisé ReactJs, NextJs et Symfony
          </h1>
          <div className="ml-6">
            <a
              className="ml-5 mr-5"
              href="https://www.linkedin.com/in/vincent-duguet/"
              target="_blank"
            >
              <Image
                src="/images/linkedin.png"
                alt="linkedin logo"
                title="linkedin"
                width={useWindowSize().width >= 1024 ? 50 : 40}
                height={useWindowSize().width >= 1024 ? 50 : 40}
              />
            </a>
            <a href="https://github.com/eikyuu" target="_blank">
              <Image
                src="/images/github.png"
                alt="github logo"
                title="github"
                width={useWindowSize().width >= 1024 ? 50 : 40}
                height={useWindowSize().width >= 1024 ? 50 : 40}
              />
            </a>
          </div>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Banniere;
