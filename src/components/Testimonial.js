import React from 'react'
import Card from './Card'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { useState } from 'react';

const Testimonial = (props) => {

  let reviews=props.reviews;
  const [Index , setIndex] = useState(0);

  function leftShiftHandler(){
    if(Index-1<0){
      setIndex(reviews.length-1)
    }
    else{
      setIndex(Index-1)
    }
  }
  
  function rightShiftHandler(){
    if(Index+1 >= reviews.length)
    {
      setIndex(0)
    }
    else{
      setIndex(Index+1)
    }
  }

  function supriseHandler(){
    let randomindex = Math.floor(Math.random() * reviews.length);
    setIndex(randomindex);
  }


  return (
    <div className='flex flex-col justify-center w-[40vw] bg-white m-5'>
        <Card review={reviews[Index]}/>

        <div>
    <button  
    onClick={leftShiftHandler}
    className='mx-3' >
      <AiFillCaretLeft/>
    </button>
    
    <button
    onClick={rightShiftHandler}
    className='mx-3' >
      <AiFillCaretRight/>
    </button>
    </div>
    
    <button
    onClick={supriseHandler}
    className='bg-violet-500 px-5 py-2 text-white font-bold m-3 rounded-2xl' > Suprise Me </button>
   
    </div>
  )
}

export default Testimonial