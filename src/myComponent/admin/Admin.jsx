import React from 'react'
import { useState } from 'react'
import {doc,getDoc,collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebaseconfig/Firebaseconfig'
import { RefreshIcon } from '@heroicons/react/solid'
export default function Admin() {

  const [allData, setAlldata] = useState([])
  const getdoc=(e)=>{
    e.preventDefault();
    const conref = collection(db,"user")
    getDocs(conref)
    .then((snapshot)=>{
      
      if(snapshot.docs.length>0){
        let docu = []
        snapshot.docs.forEach((doc)=>{
          docu.push(doc.data())
          // console.log(doc.data());
          // setAlldata((prev)=>{
          //   console.log([...prev,doc.data(), doc.id]);
          //     return [...prev,doc.data()]
          // })
        })
        setAlldata(()=>{
          return docu;
           })  
      }
    });
    

  }

  
  return (<div className='p-3'>
   <button className='group relative w-full lg:w-32 py-2 px-7 p-3  rounded-xl flex bg-teal-300 hover:bg-teal-400 text-center text-sm font-medium 'onClick={getdoc}>
    <span className='absolute left-0 inset-y-0 flex items-center '>
      <RefreshIcon className='ml-0.5 h-5 w-5 text-gray-500 group-hover:text-gray-800 '></RefreshIcon>
      </span> <div className='mx-auto lg:m-0'>Get Doc</div></button>
   <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-3'>{allData.map((comment)=>(
   <div className='bg-gradient-to-r from-teal-500 to-cyan-500 flex flex-col justify-start h-16 rounded-md'>
    
    <p className='ml-3 text-white'>email: {comment.email}</p>
    <p className='ml-3 text-white'>Comments: {comment.comment}</p>
  
    
    </div>
    
   ))}</div>
   </div>
  )
}
