
import React from 'react';
import heroImage from '../assets/hero-image.jpg';
const Hero = () => {
  return (
    <div className='bg-slate-600 text-white text-center  flex py-16'>
      <div className='relative inline-block sm:mt-0 ml-6 sm:ml-20 mt-20 mb-8'>
        <img
          src={heroImage}
          alt="Mohammad Yousof"
          className='mx-auto sm:w-[350px] w-49 h-49 sm:h-[350px] rounded-full object-cover mt-9 transform transition-transform duration-300 hover:scale-105 border-4 border-gradient-to-r from-green-400 to-blue-500'
        />
       
      </div>
      <div className='mt-32 ml-5'>
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Yusuf Hirsi</span>
        , Full-Stack Developer
      </h1>
      </div>
     
    </div>
  );
};

export default Hero;
