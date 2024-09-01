import React from 'react'
import SearchIcon from './../../assets/icons/search.svg'

const Searchbar = () => {
  return (
    <div className='mt-4 flex gap-4 justify-between bg-slate-300 items-center  rounded-lg shadow-sm border'>
      <input className='flex-1 focus:outline-none bg-transparent py-2 px-4 bg-white' placeholder='Search' />
      <button className='w-8 h-full bg-green-400 flex items-center justify-center'>
        <img className=' object-contain opacity-40' src={SearchIcon} />
      </button>
    </div>
  )
}

export default Searchbar