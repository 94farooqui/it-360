import React from 'react'

const MyInput = ({ ...props }) => {
    const { name, placeholder,onValueChange } = props

    //console.log("Placeholder", placeholder)
    return (
        <>
            <input name={name} onChange={(e)=>onValueChange(e)} placeholder={placeholder} className='w-full border-slate-200 focus:outline-none focus:border-slate-400 focus:bg-slate-100 p-2 rounded-md border-2 text-lg' />
        </>

    )
}

export default MyInput
