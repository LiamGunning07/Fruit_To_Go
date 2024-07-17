"use client"
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBackward} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Login.module.css'
import '../styles/globals.css'

export default function Login() {

const router = useRouter();

const handleSignUpClick = () => {
  router.push("/signup")
}

const handleHomeClick = () => {
  router.push('/')
}

  return (
    <div className={styles.login}>
      <div className={styles.homepage} onClick={handleHomeClick}>
        <h1> 
          <FontAwesomeIcon icon={faBackward} />
           Home Page 
        </h1> 
      </div>
      <h1 className={styles.title}> The Fruit To Go </h1>
        <form className={styles.loginForm}>
          <h1>Login</h1>
          <span onClick={handleSignUpClick}> Don't have an account? Sign Up</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
    </div>
  )

}