import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.jpeg";
import c from "../assets/c.png";
import python from "../assets/python.jpg";
import arduino from "../assets/arduino.png";
import sql from "../assets/Mysql.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reactImage,
            title: 'REACT',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: bootstrap,
            title: 'BOOTSTRAP',
            style: 'shadow-purple-500',
        },
        {
            id: 7,
            src: c,
            title: 'C',
            style: 'shadow-blue-900',
        },
        {
            id: 8,
            src: python,
            title: 'PYTHON',
            style: 'shadow-yellow-500',
        },
        {
            id: 9,
            src: arduino,
            title: 'ARDUINO',
            style: 'shadow-blue-900',
        },
        {
            id: 10,
            src: sql,
            title: 'SQL',
            style: 'shadow-orange-700',
        },
    ]
    
  return (
    <div 
        name='experience' 
        className="bg-gradient-to-b from-black via-gray-800 to-sky-500 w-auto h-auto"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div className="pb-8 text-center">
            <p className="text-4xl font-bold border-b-4
             border-gray-500 p-2 inline"> 
                EXPERIENCE 
             </p>
            <p className="py-6"> These are the technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 
        gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({id, src, title, style}) => (
                <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                    <img src={src} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">{title}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
