import React from 'react';

const Footer = () => {
  return (
    <div className='w-full flex p-10 justify-between items-center border-2 bg-[#faf4f4]'>
      <div className='container m-auto'>
        <h1 className='text-black m-auto'>TED X ITS</h1>
      </div>
      <div className='container m-auto'>
          <h1 className='text-black m-auto'>Copyright 2022 @ TEDX ITS</h1>
      </div>
      <div className='container flex justify-between items-end m-auto'>
          <h1 className='text-blue-600 m-auto'>
            <a href="#">Instagram</a>
          </h1>
          <h1 className='text-blue-600 m-auto'>
            <a href="#">LinkedIn</a>
          </h1>
          <h1 className='text-blue-600 m-auto'>
            <a href="#">TED X ITS</a>
          </h1>
      </div>
    </div>
  );
}

export default Footer;
