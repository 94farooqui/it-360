import React from 'react'

const MyTextArea = ({...props}) => {
    const {placeholder} = props

    console.log("Placeholder",placeholder)
  return (
    <>
    <textarea rows={4} placeholder={placeholder} className='w-full resize-none border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-slate-100 p-2 rounded-md border-2 text-lg'/>
    </>
    
  )
}

export default MyTextArea
