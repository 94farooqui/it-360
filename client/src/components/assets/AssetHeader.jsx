import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem } from '../ui/dropdown-menu'

const AssetHeader = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-white rounded-lg p-4 flex justify-between shadow-sm border items-center'>
        <h2>Assets</h2>
        <Button variant="outline">Add Asset</Button>
      </div>
    </div>
  )
}

export default AssetHeader
