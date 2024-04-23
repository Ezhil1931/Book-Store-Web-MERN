import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BackButton from './BackButton'


import Spinner from './Spinner'
import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs'

function Show() {
  const[book,setBook]=useState([])
  const[loading,setLoading]=useState(false)
const {id} =useParams();
useEffect(()=>{
setLoading(true);

axios
.get(`https://book-store-api-wcxx.onrender.com/books/${id}`)
.then((res)=>{
setBook(res.data)
setLoading(false)
})
.catch((err)=>{
console.log(err);
setLoading(false);

})

},[])



    return (
    <div  className='p-4  '>
<BackButton/>
<h1 className='text-3xl my-4 show-title' >Show Book</h1>
   {loading?
   (<Spinner/>):(

<div className='flex flex-col border-2 rounded-lg w-fit p-4 show-book'>
<div className='my-4'>
<span className='text-xl m-4 text-gray-500 '>Id</span>
<span>{book._id}</span>
</div>
<div className='my-4'>
<span className='text-xl m-4 text-gray-500 '>Name</span>
<span>{book.name}</span>
</div>

<div className='my-4'>
<span className='text-xl m-4 text-gray-500 '>Author</span>
<span>{book.author}</span>
</div>
<div className='my-4'>
<span className='text-xl m-4 text-gray-500 '>Year</span>
<span>{book.year}</span>
</div>
<div className='my-4'>
<span className='text-xl m-4 text-gray-500 '>Created Time</span>
<span>{new Date(book.created).toString()}</span>
</div>


</div>
   )

   }
   
    </div>
  )
}

export default Show