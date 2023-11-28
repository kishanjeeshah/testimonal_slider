import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'



const Card = (props) => {
  let review = props.review;

  return (
    <div className='flex flex-col md:relative '>

    <div className='absolute top-[-4rem] z-[10] mx-auto'>
    <img className='aspect-square rounded-full w-[140px] h-[140px]  z-[25]'
     src = {review.image} alt=''/>
     <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10] '></div>
    </div>

    <div className='text-3xl font-bold mt-5'>
    <h3> {review.name} </h3>
    </div>

    <div className='text-5l font-light mb-5 '>
    <p className='text-violet-600'> {review.job} </p>
    </div>

     <div className='flex justify-center m-3'>
     <FaQuoteLeft/>
      </div> 
    
    <p> {review.text} </p>

    <div className='flex justify-center m-3'>
    <FaQuoteRight/>
    </div>
  
    </div>
  )
}

export default Card;