import React from 'react'

const PageHeader = ({children}) => {
  return (
    <div className='w-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm flex items-center justify-between'>
      {children}
    </div>
  )
}

export default PageHeader
