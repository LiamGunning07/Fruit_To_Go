import '../styles/globals.css'
import styles from '../styles/About.module.css'
import Header from "../components/Header";

export default function About() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.header}> About Us </h1>

      </div>
      
    </div>
  )
}