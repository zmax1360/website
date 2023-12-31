import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation('/about')
  }
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">this Home Page</div>
          <button
            className="btn btn-primary btn-xl text-uppercase"
            onClick={handleClick}
          >
            About
          </button>
        </div>
      </header>
    </div>
  )
}

export default Home
