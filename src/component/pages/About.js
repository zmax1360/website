import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation('/')
  }
  return (
    <div>
      <header className="masthead">
        <div className="masthead-subheading">
          <div className="masthead-heading text-uppercase">this About Page</div>
          <button
            className="btn btn-primary btn-xl text-uppercase"
            onClick={handleClick}
          >
            Home
          </button>
        </div>
      </header>
    </div>
  )
}
export default About
