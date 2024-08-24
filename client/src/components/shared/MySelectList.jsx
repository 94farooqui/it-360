import React from 'react'

const MySelectList = ({...props}) => {
    const {optionsList} = props
  return (
    <select className='w-full border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-slate-100 p-2 rounded-md border-2 text-lg'>
        {props.children}
        {optionsList.map(listItem => <option value={listItem.value}>{listItem.name}</option>)}
    </select>
      
    
  )
}

export default MySelectList
