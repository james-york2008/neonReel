import { Link } from "react-router-dom"

import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

import type { ReactNode } from "react"


type ErrorProps = {
  children: ReactNode
}

export default function ErrorPage({ children }: ErrorProps) {
  return (
    <>
    <Navbar />
    
      <div className="pageErrorText">
        <p>{children}</p>
        <Link to={'/neonReel'} className="errorPageReturnToHomeLink">Return to home page</Link>
      </div>

      <Footer />
    </>
  )
}
