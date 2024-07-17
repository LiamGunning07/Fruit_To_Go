"use client"
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Login.module.css'
import '../styles/globals.css'

export default function SignUp() {

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  const handleHomeClick = () => {
    router.push('/')
  }

  return (
    <div className={styles.login}>
      <div className={styles.homepage} onClick={handleHomeClick}>
        <h1> 
          <FontAwesomeIcon icon={faHouse} />
           Home Page 
        </h1> 
      </div>
      <h1 className={styles.title}> The Fruit To Go </h1>
        <form className={styles.loginForm}>
          <h1>Sign Up</h1>
          <span onClick={handleLoginClick}> Already have an account? Login </span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Password Confirmation" required />
          <button type="submit">Sign Up</button>
        </form>
    </div>
  )

}