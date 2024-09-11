import { dashboardData } from '@/assets/data/data'
import DashboardCard from '@/components/dashboard/DashboardCard'
import React from 'react'

const Home = () => {
  return (
    <div className='py-4'>
      <div className='grid grid-cols-4 gap-x-4 gap-y-4 justify-center'>
      {dashboardData.map((item,index) => <DashboardCard key={index} dashItem={item} />)}
      </div>
      
    </div>
  )
}

export default Home
