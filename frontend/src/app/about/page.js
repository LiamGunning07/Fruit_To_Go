import '../styles/globals.css'
import styles from '../styles/About.module.css'
import Header from "../components/Header";

export default function About() {

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.header}> About Us </h1>
        <p className={styles.p}> Welcome to Fruit-2-Go , your go-to source for fresh, locally sourced fruit, delivered right to your doorstep. We believe that everyone should have access to delicious, nutritious produce without the hassle of grocery shopping. That's why we work directly with local farmers to bring the best seasonal fruits from farm to table, ensuring quality and freshness in every box.</p>

        <p className={styles.p}>Whether you're looking to fill your kitchen with vibrant fruits for the week, or you're sending a thoughtful gift to a loved one, we offer customizable boxes to suit every need. Our mission is to make healthy eating easy, convenient, and sustainable by supporting local agriculture and reducing food waste.</p>

        <p className={styles.p}>At Fruit-2-Go, we prioritize freshness, affordability, and eco-friendly packaging, because we care about both your well-being and the planet. We’re committed to making fruit delivery a delightful and hassle-free experience.</p>

       <p className={styles.p} > Join us on our journey toward a healthier lifestyle, one fruit box at a time!</p>
      </div>
      
    </div>
  )
}