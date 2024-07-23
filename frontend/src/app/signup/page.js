"use client"
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Login.module.css'
import '../styles/globals.css'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  const handleHomeClick = () => {
    router.push('/')
  }

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setMessage(`User registered successfully: ${data.email}`);
      } else if (response.status === 409) {
        setMessage('User already exists.');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || 'Unknown error occurred.'}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message || 'Unknown error occurred.'}`);
    }
  
    console.log("User State", email);
  };
  

  return (
    <div className={styles.login}>
      <div className={styles.homepage} onClick={handleHomeClick}>
        <h1> 
          <FontAwesomeIcon icon={faHouse} />
           Home Page 
        </h1> 
      </div>
      <h1 className={styles.title}> The Fruit To Go </h1>
        <form className={styles.loginForm} onSubmit={handleSignUpSubmit}>
          <h1>Sign Up</h1>
          <span onClick={handleLoginClick}> Already have an account? Login </span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Password Confirmation" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className={styles.message}>{message}</p>
    </div>
  )

}