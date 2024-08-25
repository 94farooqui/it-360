import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './components/Layout'
import Tickets from './pages/Tickets'
import Vendors from './pages/Vendors'
import Users from './pages/Users'
import NewTicket from './pages/NewTicket'
import Assets from './pages/Assets'
import NewCategory from './pages/NewCategory'
import AssetCategoreis from './pages/AssetCategoreis'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/tickets' element={<Tickets/>}>
            <Route path='new' element={<NewTicket/>} />
          </Route>
          <Route path='/vendors' element={<Vendors/>} />
          <Route path='/assets' element={<Assets/>} />
          <Route path='/asset-categories' element={<AssetCategoreis/>} />
          <Route path='/users' element={<Users/>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
