import React from 'react'

import { IoIosStarOutline, IoMdStar } from "react-icons/io";
import { IoBookmarkSharp } from 'react-icons/io5';

const Card = ({cla,btn ,book ,im}) => {
  return (
    <div className='w-70 h-127  bg-white/90 relative  overflow-hidden 
                    transition-all duration-300 
                    hover:shadow-2xl hover:-translate-y-2'>
        <div className='absolute top-0 right-3 z-10'>
                <IoBookmarkSharp 
                  size={80} 
                  className={` cursor-pointer 
                             transition-transform duration-300 
                             hover:scale-125  ${book}`} 
                />
              </div>
        <div className='px-5 pt-10'>
            <div className='pb-5'>
            <img className='border  border-amber-700 rounded-xl  w-60 h-50' src={im} alt="" />
        </div>
      <h1 className={`text-2xl w-50 font-semibold  ${cla}`}>Lorem Ipsum Dolor Sit</h1>
      <p className='text-sm pb-5 pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. sed diam.</p>
      <div className='flex  gap-x-5 pb-6 '>
        <span className='text-4xl font-bold text-amber-700'>$20</span>
      <div className='flex flex-col gap-1'>
        <div className='flex items-center gap-1'>
            <span className=''><IoMdStar /></span>
            <span className=''><IoMdStar /></span>
            <span className=''><IoMdStar /></span>
            <span className=''><IoIosStarOutline /></span>
        </div>
        <div className='line w-full h-0.5 bg-amber-700'></div>
        <p className='text-sm'>Discount 50%</p>
      </div>
      </div>
        </div>
      <div className=''>
        <button className={` w-full py-3.5 text-white font-bold ${btn}`}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default Card
