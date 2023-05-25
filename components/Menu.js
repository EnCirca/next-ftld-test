import styles from './Menu.module.css'
import Link from 'next/link'

const menuLink = {
  textDecoration:"none"
}

export default function Menu() {
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.logo}>
          <img className={styles.logoImg} src="/ftld-logo-1.png"></img>
        </div>
        <div className={styles.menu}>
          <ul>
            <li className={styles.menuItem}><Link style={menuLink} href="/">Home</Link></li>
            <li className={styles.menuItem}><Link className={styles.menuLink} href="/bank-lead-form/">.BANK Verification Application</Link></li>
            <li className={styles.menuItem}><Link className={styles.menuLink} href="/insurance-lead-form/">.INSURANCE Verification Application</Link></li>
            <li className={styles.menuItem}><Link className={styles.menuLink} href="/ftld-annual-verification/">fTLD Annual Verification</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}