import React from 'react'
import { useState,useEffect } from 'react'
import "../App.css" 
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from "react-icons/ai"
import { BsInfoCircle} from "react-icons/bs"
 import {MdOutlineAddBox,MdOutlineDelete} from "react-icons/md"
import axios from 'axios'
import Spinner from './Spinner'

function Home() {
const [books,setBooks]=useState([])
const [loading,setLoading]=useState(false)
useEffect(()=>{
setLoading(true)
axios
.get('https://book-store-api-wcxx.onrender.com/books')
.then((response)=>{

    setBooks(response.data)
    setLoading(false)
})
.catch((err)=>{

    console.log(err)
    setLoading(false)
})

},[])



  return (
    <div className='p-4 hd-all'>
        <div className='flex justify-between items-center hd-nav'>
<h1 className='text-3xl my-8'> Book List</h1>
<Link to="/books/create"><MdOutlineAddBox className='text-4xl text-blue-600 link-btn'/>
</Link>   
</div>
{ loading ?(
<Spinner/>
):(
<table className='w-full border-separate border-spacing-2 hd-table'>
<thead>
<tr>
<th className='border border-slate-600 rounded-md'>No</th>
<th className='border border-slate-600 rounded-md'>Title</th>
<th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>

<th className='border border-slate-600 rounded-md max-md:hidden'>Year</th>

<th className='border border-slate-600 rounded-md '>Operation</th>

</tr>

</thead>
<tbody>
{books.map((book,index)=>(
<tr key={book._id} className='h-8'>
<td className='border border-slate-600 rounded-md text-center'>
    {index+1}
</td>
<td className='border border-slate-600 rounded-md text-center'>
    {book.name}
</td>
<td className='border border-slate-600 rounded-md text-center max-md:hidden' >
    {book.author}
</td>
<td className='border border-slate-600 rounded-md text-center max-md:hidden'>
    {book.year}
</td>
<td className='border border-slate-600 rounded-md text-center'>
<div className='flex justify-center gap-x-4  '>
<Link to={`/books/detail/${book._id}`}>
    <BsInfoCircle className='text-2xl text-green-700'/>
</Link>
<Link to={`/books/edit/${book._id}`}> 
    <AiOutlineEdit className='text-2xl text-yellow-600' />
</Link>

<Link to={`/books/delete/${book._id}`}>

    <MdOutlineDelete className='text-2xl text-red-600' />
</Link>
</div>
</td>

</tr>

))}
</tbody>
</table>

)}

    </div>
  )
}

export default Home