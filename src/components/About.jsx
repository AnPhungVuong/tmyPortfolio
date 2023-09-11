import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] text-center   gap-8 ">
          <div>
            <p>
              I just graduated from Algonquin College in September 2023, where I
              completed a 3-year Computer Engineering Technology - Computing
              Science program. During my career, I did collaborate on projects,
              which helped me become quick at adapting. I'm excited to learn new
              things and I'm open to feedback and change. My eagerness to learn
              and my ability to work well in teams make me a strong candidate as
              I enter the professional world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
