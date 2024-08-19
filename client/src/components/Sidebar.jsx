import React from 'react'
import { Link } from 'react-router-dom'
import SidebarItem from './SidebarItem'
import { sidebar } from '@/assets/data/data'

const Sidebar = () => {
    return (
        <div className='min-h-[calc(100vh-64px)] min-w-[300px] p-4 '>
            <div className='w-full h-full bg-white rounded-xl overflow-hidden border-2 shadow-sm flex flex-col justify-between'>
                <ul className='flex flex-col'>
                    {sidebar.map(item => <SidebarItem item={item} />)}
                </ul>

                <div className='flex w-full gap-2 items-center justify-center p-4'>
                    <div className='w-12 h-12 bg-slate-200 rounded-full'></div>
                    <div className='flex flex-col gap-2 items-start p-4'>
                        <p className='text-sm'>Mohammed Mubasshir</p>
                        <p className='text-xs'>mubasshir.farooqui@gmail.com</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Sidebar
