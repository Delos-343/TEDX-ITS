import React from 'react';

const data = [{
  id: '1912055025',
  name: 'Mohammed Fachry Dwi Handoko',
  date: '02/04/2022',
  status: 'PAID',
  },{
    id: '1591205250',
    name: 'Muhammad Daffa Wibisono',
  date: '02/04/2022',
  status: 'PAID',
  },{
    id: '1120255059',
  name: 'Jack Sparrow',
  date: '02/04/2022',
  status: 'PAID',
  },{
    id: '1052512059',
  name: 'John Doe',
  date: '02/04/2022',
  status: 'PAID',
}];

const iD = ['1205250591',
'1120525059',
'1120525059',
'1120525059',
'1120525059',];

const name = ['Mohammed Fachry Dwi Handoko',
'Muhammed Daffa Wibisono',
'Jack Sparrow',
'John Doe'
];

const date = ['02/04/2022', '09/01/2001'];

const status = ['PAID', 'UNPAID'];


const Hero = () => {
  return (
    <div className='w-full h-full p-10'>
      <h1 className='text-blue-700 my-10 mx-5'>Hero.Section( table, data )</h1>
      
      <div className='card relative grid overflow-x-auto p-10 shadow-md'>
        <div className='container mt-5 mb-20'>
          <h1 className='text-gray-700'> TICKETING DATA </h1>
          <h4> -[data]- </h4>
        </div>
        <div className='container'>
          <div className='data flex w-full justify-between'>
            <div className='container my-auto'>
              <a href="#">
                <button className='bg-[#dcdcdc] hover:bg-blue-500 px-8 py-2 rounded-md text-blue-700 hover:text-white'> <h2 className='hover:text-white'>Lihat Semua</h2> </button>
              </a>
            </div>
            <div className='container my-auto'>
              <h2>STATUS</h2>
              <h4> Pending </h4>
            </div>
            <div className='container my-auto'>
              <h2>Konfirmasi Pembayaran Dalam</h2>
              <h4> -[data]- </h4>
            </div>
          </div>
        </div>
      </div>

      <div className='card relative grid overflow-x-auto p-10 shadow-md'>
        <div className='container mt-5 mb-20'>
          <h1 className='text-gray-700'> TICKETING DATA </h1>
          <h4> -[data]- </h4>
        </div>
        <div className='container'>
          <div className='data flex w-full justify-between'>
            <div className='container my-auto'>
              <a href="#">
                <button className='bg-[#dcdcdc] hover:bg-blue-500 px-8 py-2 rounded-md text-blue-700 hover:text-white'> <h2 className='hover:text-white'>Lihat Semua</h2> </button>
              </a>
            </div>
            <div className='container my-auto'>
              <h2>STATUS</h2>
              <h4> Pending </h4>
            </div>
            <div className='container my-auto'>
              <h2>Konfirmasi Pembayaran Dalam</h2>
              <h4> -[data]- </h4>
            </div>
          </div>
        </div>
      </div>

      <div className='card relative grid overflow-x-auto p-10 shadow-md'>
        <div className='container mt-5 mb-20'>
          <h1 className='text-gray-700'> TICKETING DATA </h1>
          <h4> -[data]- </h4>
        </div>
        <div className='container'>
          <div className='data flex w-full justify-between'>
            <div className='container my-auto'>
              <a href="#">
                <button className='bg-[#dcdcdc] hover:bg-blue-500 px-8 py-2 rounded-md text-blue-700 hover:text-white'> <h2>Lihat Semua</h2> </button>
              </a>
            </div>
            <div className='container my-auto'>
              <h2>STATUS</h2>
              <h4> Pending </h4>
            </div>
            <div className='container my-auto'>
              <h2>Konfirmasi Pembayaran Dalam</h2>
              <h4> -[data]- </h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hero;
