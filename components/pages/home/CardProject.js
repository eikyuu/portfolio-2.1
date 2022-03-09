import Image from "next/image";
import React from "react";

const CardProjet = ({ title, text, a, img, link }) => {
  return (
    <div className="flex border-2 justify-between rounded-lg mb-5 xl:mb-0 last:mb-0 xl:first:mr-5 xl:last:ml-5 xl:w-1/2 ring-2 bg-white flex-col p-4 ring-gray-200 items-center xl:items-stretch">
      <div className="flex items-center font-semibold mb-2 text-xl">
        {title}
      </div>
      <p>{text}</p>
      <a
        href={a}
        target="_blank"
        className="text-purple-600 py-4"
      >
        {link}
      </a>
      <picture data-aos="zoom-in" className="another-project ">
        <Image src={img} className="rounded-lg" alt="linkedin logo" />
      </picture>
    </div>
  );
};

export default CardProjet;
