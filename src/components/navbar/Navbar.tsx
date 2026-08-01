import { Link } from "react-router-dom"
import logo from "../../assets/logo.webp"
import styles from "../../css/navbar.module.css"

export default function Navbar () {
  return (
    <header>
      <Link to={'/neonReel'} className={styles.logoWrapper}><img className={styles.logo} src={logo} alt="Link to home page" /></Link>
    </header>
  )
}