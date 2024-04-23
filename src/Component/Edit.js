import React, { useState, useEffect } from 'react'
import BackButton from './BackButton'
import Spinner from './Spinner'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import "../App.css"

function Edit() {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')


  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
const {id}=useParams();

useEffect(()=>{

setLoading(true);
axios.get(`http://localhost:4000/books/${id}`)
.then((res)=>{

setAuthor(res.data.author)
setName(res.data.name)
setYear(res.data.year)
setLoading(false)

})
.catch((err)=>{
setLoading(false)
alert("wrong in edit the book info")
  console.log(err)
})

},[])


  const editBook = () => {

    const data = {
      name,
      author,
      year
    }
    setLoading(true);

    axios
      .put(`https://book-store-api-wcxx.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/")

      })
      .catch((err) => {

        setLoading(false)
        alert("Something wrong in creating")
        console.log(err)

      })


  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='my-4 text-3xl  show-title'>Edit Book</h1>

      {loading ?
        (<Spinner />) : ""
      }
      <div className='flex flex-col border-2 border-sky-500 mx-auto w-[600px] p-4 show-book'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-gray-600 px-4 py-2 w-full'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border border-gray-600 px-4 py-2 w-full'
          />
        </div>


        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Year</label>
          <input
            type='text'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className='border border-gray-600 px-4 py-2 w-full'
          />
        </div>

        <button className='m-8 p-2 bg-sky-500' onClick={() => editBook()}>
          Update
        </button>
      </div>

    </div>
  )
}

export default Edit