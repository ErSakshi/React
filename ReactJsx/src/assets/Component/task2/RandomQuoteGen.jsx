import React, { useState } from 'react'

const RandomQuoteGen = () => {
    let quotes =[
        {title :"To live is the rarest thing in the world. Most people exist, that is all.", 
            author:" Oscar Wilde"
        },
        {title :"That it will never come again is what makes life so sweet. ", 
            author:" Emily Dickinson"
        },
        {title :"It is never too late to be what you might have been.", 
            author:"  George Eliot"
        },
        {title :"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", 
            author:" Ralph Waldo Emerson"
        },
        {title :"Pain is inevitable. Suffering is optional.", 
            author:" Haruki Murakami"
        }
    ]
     let[quote,setQuote]=useState(quotes[0]);

      let getRandomQuote=()=>{
        let ind=Math.floor(Math.random()*quotes.length)
        setQuote(quotes[ind])
      }
      let{title,author}=quote
  return (
    <div>
               <div  className=' bg-purple-300 absolute left-1/4 top-1/3 text-black font-bold w-[50vw] h-[40vh] border-[2px] border-gray-950 '>
                <p className='font-bold italic text-4xl   h-[15vh]'>{title}</p>
                <p className='text-lg italic my-4 mx-96 p-2 shadow-md w-[15vw]'>{author}</p>
                <button onClick={getRandomQuote}
               className='bg-indigo-500 text-white p-2 rounded-lg absolute bottom-2 left-3' >click</button>
            </div>
              
        
    </div>
  )
}

export default RandomQuoteGen