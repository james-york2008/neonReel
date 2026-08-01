import tmdbLogo from "../../assets/tmdbLogo.webp"
import styles from "../../css/footer.module.css"

export default function Footer () {
  return (
    <footer>
      <img src={tmdbLogo} alt="This page was made using the TMDB API." className={styles.tmdbLogo} aria-hidden="true" />
      <p className={styles.disclaimer}>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    </footer>
  )
}