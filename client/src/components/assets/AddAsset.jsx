import React from 'react'
import closeIcon from './../../../src/assets/icons/close.svg'
import MyInput from '../shared/MyInput'
import MyTextArea from '../shared/MyTextArea'
const AddAsset = ({setShowAddAsset}) => {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-slate-800/40 flex justify-center items-center'>
    <div className='bg-white w-[800px] p-4 flex-col rounded-lg shadow-lg'>
        <div className='flex w-full justify-between'>
            <h2 className='text-xl font-bold text-slate-600'>Add Asset</h2>
        <button onClick={()=>setShowAddAsset(false)}><img src={closeIcon} className='w-8 h-8' /></button>
        </div>
        <form className='mt-4 flex flex-col gap-y-4'>
            <div className='w-full'>
                <MyInput placeholder='Asset name' />
            </div>
            <div className='w-full'>
                <MyTextArea placeholder='Description' />
            </div>
        </form>
    </div>
    </div>
  )
}

export default AddAsset
