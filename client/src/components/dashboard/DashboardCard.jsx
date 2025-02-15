import React from 'react'

const DashboardCard = ({dashItem}) => {
  return (
    <div className='bg-white p-8 rounded-lg flex flex-col items-center gap-y-4 border border-gray-200 shadow-sm'>
      <h2>{dashItem.title}</h2>
      <h4>{dashItem.value}</h4>
    </div>
  )
}

export default DashboardCard
