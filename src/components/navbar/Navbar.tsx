import { Link } from "react-router-dom"
import logo from "../../assets/logo.webp"
import styles from "../../css/navbar.module.css"

type Props = {
  mainLink: string
}

export default function Navbar ({ mainLink }: Props) {
  return (
    <header>
      <a href={`#${mainLink}`} className={styles.skipToMainLink}>Skip to main content</a>
      <Link to={'/neonReel'} className={styles.logoWrapper}><img className={styles.logo} src={logo} alt="Link to home page" /></Link>
    </header>
  )
}