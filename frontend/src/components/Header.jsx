import styles from '../styles/Header.module.css'

export default function Header() {

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1> The Fruit To Go</h1>
        </div>
          <ul className={styles.links}> 
            <li> Fruit </li>
            <li> Beverages </li>
            <li> Cart </li>
            <li> Login </li>
          </ul>
      </div>
    </div>
  );
}
