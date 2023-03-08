import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './application/Context'
import NavBar from './components/NavBar'
import UserCard from './pages/UserCard'
import UserTable from './pages/UserTable'
import React from 'react'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<UserCard />}></Route>
          <Route path='/users' element={<UserTable />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App