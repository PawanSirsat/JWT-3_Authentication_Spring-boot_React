import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Remove the JWT token from local storage
    localStorage.removeItem('jwtToken')

    // Redirect to the login page
    navigate('/login')
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        JWT
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          {isAuthenticated ? (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/userlist'>
                  User Details
                </Link>
              </li>
              <li className='nav-item'>
                <button
                  className='btn btn-link nav-link'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/signup'>
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation