import React from "react";

const About = () => {
  return (
    <div 
        name="about"
        className="w-auto h-auto bg-gradient-to-b from-black via-gray-800 to-sky-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                ABOUT 
            </p>
        </div>
           
            <p className="text-2xl mt-10">
            I am currently in my First Year at IIT Kharagpur.
            My journey into the world of web development began with a fascination for technology and a drive to create meaningful connections through digital platforms. Over the years, I've honed my skills in front-end development, mastering languages like HTML, CSS, JavaScript, and more. With each project, I strive to blend functionality with creativity, ensuring that every website I build not only meets the technical requirements but also tells a compelling story.
            In addition to web development, I have a keen interest in graphic design, specializing in logo design and visual branding. I've completed courses in Adobe Illustrator and Photoshop, refining my ability to bring ideas to life through stunning visuals. 
            </p>

            <br />

            <p className="text-2xl mt-15">
            I'm passionate about Music, and playing badminton and sketching are among my hobbies. Apart from these, I also have keen interest in photography and video-editting.
            I'm also an avid traveller, constantly seeking new adventures and experiences around the globe.
            </p>

            <br />

            <p className="text-2xl ">
            Through my portfolio, I invite you to join me on this journey—a journey where technology meets wanderlust, and where every click leads to a new discovery. Whether you're seeking a sleek website for your business, eye-catching graphics for your next project, or simply looking to embark on a virtual adventure, I'm here to bring your vision to life.
            Let's build something amazing together!!
            </p>
      </div>
    </div>
  )
}

export default About
