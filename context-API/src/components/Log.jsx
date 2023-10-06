import React from 'react'
import { useState,useContext } from 'react';
import UserContext from '../context/userContext';

const Log = () => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='userName' value={userName}  onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder='userName' value={password} onChange={(e) => setPassword(e.target.value)}  />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Log;
