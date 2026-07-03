import { Link } from "react-router-dom"

export default function ErrorPage() {
  return(
    <div className="pageErrorText">
      <p>Page not found</p>
      <Link to={'/neonReel'} className="errorPageReturnToHomeLink">Return to home page</Link>
    </div>
  )
}
