import React from 'react';
import '../App.css';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import { collection , addDoc } from 'firebase/firestore'
import {db} from '../firebaseconfig/Firebaseconfig'
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
export default function Contactus() {
    const [name, setName] = useState("");
    const [comment, setCommnet] = useState("");
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const history = useHistory;
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(name===null || comment===null||email===null){
          setErrorMsg("please fill all the field")
      }
      else{
      addDoc(collection(db,"user"),{
        name:name, comment:comment, email:email,
      }).then(()=>{
        setSuccessMsg("Your Commnet is Submited ")
        setCommnet("")
        setEmail("")
        setName("")
        setTimeout(()=>
        {
          setSuccessMsg("");
          window.location.reload(true);
        },4000)
        
      }
      ).catch((error)=>{
        setErrorMsg("sorry some error occured")
      })}
    }
  return (
      <div className="min-h-full flex items-center  justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Do you have any enquiry?</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px py-4">
              <div> 
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                {successMsg&&<><button className='bg-teal-500 rounded-xl w-full mb-4  text-center h-7 text-white'>{successMsg}</button></>}
                {errorMsg&&<><button className='bg-teal-500 rounded-xl w-full mb-4  text-center h-7 text-white'>{errorMsg}</button></>}
                
                <input
                  onChange={(e)=> setName(e.target.value)}
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full mb-8 px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={(e)=> setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full mb-8 px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="comment" className="sr-only">
                  Commnet
                </label>

                <input
                  onChange={(e)=> setCommnet(e.target.value)}
                  type="text-box"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-xl relative block
                  w-full border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-teal-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Comment" style={{height:"150px"}}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-teal-400 hover:bg-teal-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                 
                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

  )
}
  
