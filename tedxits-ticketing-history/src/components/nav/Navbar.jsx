import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex p-10 justify-between items-center shadow-md'>
      <div className='container m-auto'>
        <h1 className='text-gray-500 m-auto text-4xl'>TED X ITS</h1>
      </div>
      <div className='container m-auto'>
          <h1 className='text-blue-300 m-auto text-2xl'>Ticketing History</h1>
      </div>
      <div className='container flex justify-between items-end m-auto'>
        <div className='mx-7'>
          <h2 className='text-gray-500 font-semibold m-auto'>Reference A</h2>
        </div>
        <div className='mx-7'>
          <h2 className='text-gray-500 font-semibold m-auto'>Reference B</h2>
        </div>
        <div className='mx-7'>
          <h2 className='text-gray-500 font-semibold m-auto'>User Profile</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
