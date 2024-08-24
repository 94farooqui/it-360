import React from 'react'

const MySelectOption = ({value, text}) => {
  return (
    <option className='w-full border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-slate-100 p-2 rounded-md border-2 text-lg' value={value}>
        {text}
    </option>
  )
}

export default MySelectOption
