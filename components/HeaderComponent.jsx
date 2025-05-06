import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export const HeaderComponent = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleNavigate = () => {
    if (location.pathname === '/createuser') {
      navigate('/');
    } else {
      navigate('/createuser');
    }
  };

  return (
    <header className='flex justify-around items-center h-25'>
      <h1 className='text-6xl font-bold text-primary'>
        <Link to='/'>Hanner.</Link>
        
      </h1>

      <button
        type="button"
        onClick={handleNavigate}
        className="text-white bg-primary hover:bg-darky focus:outline-none 
        focus:ring-4 focus:ring-gray-300 font-medium 
        rounded-lg text-sm px-5 py-2.5  
        dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        {location.pathname === '/createuser' ? 'Back' : 'Create User'}
      </button>
    </header>
  );
};
