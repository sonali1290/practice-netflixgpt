import { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/Validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const checkHandleClick = () => {
    console.log(email.current.value)
    console.log(password.current.value)
    const message = checkValidation(email.current.value, password.current.value)
    SetErrorMessage(message)
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  };

  return (
    <div>
      <Header />
      <div className=''>
        <img src='download-bg.jpg' className='w-full h-auto object-cover fixed' alt='bg-logo' />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Out'}</h1>
        {!isSignInForm && (<input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 text-lg' />)}

        <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 text-lg' />
        <input type='text' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700 text-lg' />
        <p className='font-normal text-red-600'>{errorMessage}</p>
        <button className='p-4 my-4 w-full bg-red-700 rounded-lg text-xl' onClick={checkHandleClick} >{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 text-base' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix ? Sign Up Now' : 'Already Registered ? Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login