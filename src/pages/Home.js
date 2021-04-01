import React from 'react'
import LoginForm from '../component/LoginForm'
import Motto from '../component/Motto'
import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <Motto/>
      <LoginForm/>
    </div>
  )
}

export default Home
