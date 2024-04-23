import React from 'react'
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import BackButton from './BackButton'
import Spinner from './Spinner'
import { BsTruckFlatbed } from 'react-icons/bs'

function Delete() {
  
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const {id}=useParams();
  const deleteBook=()=>{
setLoading(true);

axios.delete(`https://book-store-api-wcxx.onrender.com/books/${id}`)
.then(()=>{

  setLoading(false)
  navigate('/')

})
.catch((err)=>{

  alert("error in delete the book")
  console.log(err)

})

}
  
  
  return (
  <div className='p-4 '>
<BackButton/>
<h1 className='text-3xl my-4'>Delete the book</h1>
  {loading?<Spinner/>:"-"}
<div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-white'>
<h3  className='text-xl'>Are you sure to Delete the book</h3>
<button className='p-4 bg-red-600 text-white m-8 w-full del-btn' onClick={()=>deleteBook()}>
 Yes,delete it
</button>
</div>

  </div>
)
}

export default Delete