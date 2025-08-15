import React, { useState, useEffect } from 'react';

const Loading = () => {
  const greet = [
    "Namaste",
    "Namaskaram",
    "Vanakkam",
    "Namaskara",
    "Nomoskar",
    "Sat Sri Akal",
    "Namaskar",
    "Jai Jinendra",
    "As-salamu alaykum",
    "Khamma Ghani",
    "Pranam",
    "Juhar",
    "Ram Ram",
    "Adaab",
    "Nōkku",
    "Sasriyakal",
    "Hello"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greet.length);
    }, 500); // 1/2 second

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-r from-[#FF9933] via-white to-[#138808]'>
      <h1 className='text-4xl md:text-7xl font-bold tracking-wide'>{greet[index]}</h1>
    </div>
  );
};

export default Loading;
