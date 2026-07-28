import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

import "./css/base.css"
import "./css/navbar.css"
import "./css/footer.css"

import "./css/components/mainPage/hero.css"
import "./css/components/mainPage/filters.css"
import "./css/components/mainPage/movies.css"
import "./css/components/mainPage/random.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
