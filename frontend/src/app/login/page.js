"use client"
import { useRouter } from 'next/navigation'
import styles from '../styles/Login.module.css'
import '../styles/globals.css'

export default function Login() {

const router = useRouter();

const handleSignUpClick = () => {
  router.push("/signup")
}

  return (
    <div className={styles.login}>
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