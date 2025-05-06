import React, { useEffect, useState } from 'react'
import axios from 'axios'
const TableComponent = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get('https://dataaccess.nucleoslabs.com.co/api/v1/users/listall');
      setUsers(response.data.result);
    } catch (error) {
      console.error('Error al obtener datos ', error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const getRows = users.map(
    (user) => {
      return(
        <tr key={user.id}
        className="border-b border-gray-200 dark:border-gray-700">
          <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800'>{user.identification}</td>
          <td className='px-6 py-4 bg-white'>{user.names}</td>
          <td className='px-6 py-4 bg-gray-50 dark:bg-gray-800'>{user.lastNames}</td>
        </tr>
      )
    }
  )



  return (
    <div className=' flex flex-col justify-around items-center pb-10'>
      <h1 className='text-5xl p-10'>User's Table</h1>

      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>

          <tr className='text-darky'>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Identification</th>
            <th scope="col" className="px-6 py-3 bg-white">Names</th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Last Names</th>
          </tr>

        </thead>

        <tbody>
          {getRows}
        </tbody>
        </table>

      </div>


    
    </div>
    
  )
}

export default TableComponent