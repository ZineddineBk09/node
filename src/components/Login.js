import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import './Login.css'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()

    //Firebase
  }

  const register = (e) => {
    e.preventDefault()

    //Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((authe) => {
        //it means user created successfully
        console.log(authe)
      })
      .catch((err) => alert(err))
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png'
          alt='amazon'
          className='login__logo'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='login__signInButton'
            type='submit'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button className='login__registerButton' onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
