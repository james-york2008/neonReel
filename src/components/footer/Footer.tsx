import tmdbLogo from "../../assets/tmdbLogo.jpg"

export default function Footer () {
  return (
    <footer>
      <img src={tmdbLogo} alt="This page was made using the TMDB API." id="tmdbLogo" />
      <p className="disclaimer">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
    </footer>
  )
}