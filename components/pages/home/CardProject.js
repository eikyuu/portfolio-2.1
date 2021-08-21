import Image from "next/image";
import React from "react";

const CardProjet = ({ title, text, a, img, link }) => {
  return (
    <div className="flex border-2 justify-between rounded-lg first:mr-5 last:ml-5 w-1/2 ring-2 bg-white flex-col p-4 ring-gray-200">
      <div className="flex items-center font-semibold mb-2 text-xl">
        {title}
      </div>
      <p>{text}</p>
      <a
        href={a}
        target="_blank"
        // rel="noopener"
        className="text-purple-600 py-4"
      >
        {link}
      </a>
      <picture className="">
        <Image src={img} className="rounded-lg" alt="linkedin logo" />
      </picture>
    </div>
  );
};

export default CardProjet;
