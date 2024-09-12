import { dashboardData } from '@/assets/data/data'
import DashboardCard from '@/components/dashboard/DashboardCard'
import { getDashboardData } from '@/services/api'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [dashboard,setDashboard] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getDashboardData()
      if(!data){
        setLoading(false)
      }
      else {
        console.log("Fetched Data", data)
        setDashboard(data)
        setLoading(false)
      }
    }
    fetchData()
  },[])

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div className='py-4'>
      <div className='grid grid-cols-4 gap-x-4 gap-y-4 justify-center'>
      {dashboard.map((item,index) => <DashboardCard key={index} dashItem={item} />)}
      </div>
      
    </div>
  )
}

export default Home
