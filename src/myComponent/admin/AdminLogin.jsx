import React from 'react'
import Tilt from 'react-vanilla-tilt'
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useHistory} from 'react-router-dom';


export default function () {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [autharize,setAutharize]=useState("")
    const auth=getAuth();
    const history=useHistory();
    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSuccessMsg("loged in successfully")
                setEmail("")
                setPassword("")
                setErrorMsg("")
                history.push("/admin")
                
              
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(error.message)
                if (error.message == 'Firebase: Error(auth/invalid-email).') {
                    setErrorMsg('Please fill all required fields')

                }
                if (error.message == 'Firebase: Error(auth/user-not-found).') {
                    setErrorMsg('Please fill all required fields')

                }
                if (error.message == 'Firebase: Error(auth/wrong-password).') {
                    setErrorMsg('Please fill all required fields')

                }
            })
    }
    return (
        <div className='conatiner bg-gray flex flex-wrap p-1'>
            
           
            <button className='mx-auto bg-gradient-to-r from-gray-800 via-gray-800 to-gray-800 rounded-2xl mt-9 w-96 h-full' disabled >
            <div class="text-5xl font-extrabold mx-auto mt-3">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 " style={{fontFamily: 'Cedarville Cursive',}}>
    Login 
  </span>
</div>
                <div className="min-h-full flex  items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        
                        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleLogin}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        onChange={(e)=>setEmail(e.target.value)}
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        
                                        onChange={(e)=>setPassword(e.target.value)}
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none mt-5 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-teal-400">
                                        Remember me
                                    </label>
                                </div>

                                
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-gray-500 group-hover:text-dark" aria-hidden="true" />
                                    </span>
                                    Sign in
                                </button>

                            </div>
                            
                        </form>
                    </div>
                </div>
            </button>
            {successMsg&&<>
                            {successMsg}
                            </>}
                            {errorMsg&&<>{errorMsg}</>}
        </div>
        
    )
}
