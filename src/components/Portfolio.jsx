import React from "react";
import Calculator from "../assets/calculator21.jpg";
import Designers from "../assets/designers.png";
import Prism from "../assets/PRISM1.png";

const Projects = () => {

  const Projects = [
    {
      id: 1,
      src: Calculator,
      href: 'https://ishasinghal15.github.io/calculator/calculator',
      child: (
        <>
        Demo 
        </>
      ),
    },
    {
      id: 2,
      src: Designers,
      href: 'https://ishasinghal15.github.io/Designers/',
      child: (
        <>
        Demo 
        </>
    ),
    },
    {
      id: 3,
      src: Prism,
      href: 'https://ishasinghal15.github.io/Prism/',
      child: (
        <>
        Demo 
        </>
    ),
    },
    
  ]
  return (
    <div name="projects" className="bg-gradient-to-b from-sky-500 via-gray-800 to-black w-full
    text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
        <p className="text-4xl text-black font-bold inline border-b-4 border-black">
          PORTFOLIO
          </p>
        <p className="py-6 text-black">Check out some of my recent work here</p>
        </div>

        <div className="grid grid-template-columns: 80px 200px sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

      { Projects.map(({ id, src, href,child }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src} 
                alt="" 
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duartion-200 hover:scale-105">
                <a 
                  href={href}
                  rel="nonreferrer"
                >{child}</a>
                </button>
                {/*<button className="w-1/2 px-6 py-3 m-4 duartion-200 hover:scale-105">
                  Code
      </button>*/}
              </div>
            </div>
        ))
      }
      </div>
      
      </div>
    </div>
  );
};

export default Projects;
