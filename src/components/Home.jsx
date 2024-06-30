import React from "react";
import HeroImage from '../assets/hero3.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
    return (
    <div
         name="home" 
         className="h-screen w-full bg-gradient-to-b from-sky-500
         via-gray-800 to-black"
    >
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Hi, I am Isha Singhal
                
                </h2>
                <h3 className="text-4xl sm:text-5xl py-5 font-bold text-white">
                Web Developer
                </h3>
                <p className="text-gray-400 py-4 max-w-md">
                    Transforming Ideas into Seamless and Visually Stunning Web Solutions. Currently, I love to work on web applications using technologies like React, Tailwind, Node JS.
                </p>

                <div>
                    <Link 
                        to="portfolio" 
                        smooth 
                        duration = {500} 
                        className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" 
                    >
                        Portfolio
                        <span className="hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div> 

           <div className="flex justify-center">
            <img src={HeroImage} alt="my profile" className="rounded-2xl w-2/3 md:w-full" />
            </div> 
        </div>
    </div>
    );
};

export default Home;
