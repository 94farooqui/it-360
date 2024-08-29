import React from 'react'
import SearchIcon from './../../assets/icons/search.svg'

const Searchbar = () => {
  return (
    <div className='mt-4 flex gap-4 justify-between bg-white items-center py-2 px-4  rounded-lg shadow-sm border'>
        <input className='flex-1 focus:outline-none bg-transparent' placeholder='Search' />
        <img className='w-8 h-8 object-contain' src={SearchIcon} />
    </div>
  )
}

export default Searchbar