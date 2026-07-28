import { Link } from "react-router-dom"
import logo from "../../assets/logo.webp"

export default function Navbar () {
  return (
    <header>
      <Link to={'/neonReel'} id="logoWrapper"><img id="logo" src={logo} alt="Link to home page" /></Link>
    </header>
  )
}