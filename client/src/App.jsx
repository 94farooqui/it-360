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
import AssetTypes from './pages/AssetTypes'
import AssetDetails from './pages/AssetDetails'
import TicketDetails from './pages/TicketDetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './context/AuthContext'
import ProtectedComponent from './components/ProtectedComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>

        <Routes>
          <Route element={<ProtectedComponent/>}>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/tickets' element={<Tickets />}>
              <Route path='new' element={<NewTicket />} />


            </Route>
            <Route path='/tickets/:id' element={<TicketDetails />} />
            <Route path='/vendors' element={<Vendors />} />
            <Route path='/assets' element={<Assets />} />
            <Route path='/assets/:id' element={<AssetDetails />} />
            <Route path='/asset-categories' element={<AssetCategoreis />} />
            <Route path='/asset-types' element={<AssetTypes />} />

            <Route path='/users' element={<Users />} />

          </Route>
          </Route>
        </Routes>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
