import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Log from './components/log'
import Profile from './components/profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      < Log />
      <Profile />
    </UserContextProvider>
  )
}

export default App
