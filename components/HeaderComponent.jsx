import React from 'react'
import {useNavigate} from 'react-router-dom'

export const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/createuser')
  }

  return (
    <header className='flex justify-around itmes-center items-center h-25 
    bg-emerald-50'>
      
      <h1 className=' text-6xl font-bold text-primary'>
        Hanner.    
      </h1>

      <button 
      type="button" 
      onClick={handleNavigate}
      class="text-white bg-primary hover:bg-darky focus:outline-none 
      focus:ring-4 focus:ring-gray-300 font-medium 
      rounded-lg text-sm px-5 py-2.5  
      dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Create User
        </button>
    </header>
  )
}
