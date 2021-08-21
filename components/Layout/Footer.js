import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-white p-8 bg-black flex justify-between items-center">
      <p className="text-white">
        © Vincent Duguet - {new Date().getFullYear()}
      </p>
      <div className="left-8 bottom-8 social flex self-start">
        <a
          href="https://www.linkedin.com/in/vincent-duguet/"
          target="_blank"
          rel="noreferrer"
          className="mr-4 bg-white flex justify-center items-center ring-transparent ring-offset-transparent ring-2 hover:ring-white transform duration-150 ease-in-out hover:ring-offset-2 rounded-md w-6 h-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-3"
          >
            <title>Linkedin Logo</title>
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
          </svg>
        </a>
        <a
          href="mailto:v.duguet.dev@gmail.com"
          className="mr-4 bg-white flex justify-center items-center ring-transparent ring-offset-transparent ring-2 hover:ring-white transform duration-150 ease-in-out hover:ring-offset-2 rounded-md w-6 h-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-3"
          >
            <title>Mail Logo</title>
            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"></path>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
