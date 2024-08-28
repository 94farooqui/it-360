import React, { useEffect } from 'react'

const MySelectList = ({...props}) => {
    const {name,optionsList,onValueChange} = props
    useEffect(()=>{
//console.log(name,optionsList,onValueChange)
    },[])
    if(!optionsList){
      return <h1>Loading...</h1>
    }
  return (
    <select name={name} onChange={(e)=>onValueChange(e)} className='w-full border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-slate-100 p-2 rounded-md border-2 text-lg'>
        {props.children}
        {optionsList.map((listItem,index) => <option key={index} value={listItem.value}>{listItem.name}</option>)}
    </select>
      
    
  )
}

export default MySelectList
