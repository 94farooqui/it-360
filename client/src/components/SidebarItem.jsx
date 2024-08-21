import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({item}) => {
  return (
    <Link to={item.navLink}>
        <li className='flex gap-4 p-4 text-lg border-b hover:bg-primary hover:text-white cursor-pointer transition-all ease-in-out duration-200'>
            <img src={item.navIcon} />
            <p>{item.navItem}</p>
        </li>
    </Link>
  )
}

export default SidebarItem
