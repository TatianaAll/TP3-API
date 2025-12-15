import { NavLink, useLocation } from "react-router-dom"
import { useEffect } from "react"
import "../styles/Header.scss"
import logo from "../assets/casa-logo.png"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import SettingsIcon from "@mui/icons-material/Settings"

function Header() {
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Casa - Accueil"
        break

      case "/accommodation":
        document.title = "Casa - Logement"
        break

      case "/about":
        document.title = "Casa - A Propos"
        break

      case "/ajouter-logement":
        document.title = "Casa - Ajouter un logement"
        break

      default:
        break
    }
  }, [location.pathname])

  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo Casa" />
      </NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/ajouter-logement">
          <AddCircleIcon />
          Ajouter logement
        </NavLink>

        <NavLink to="/waiting">
          <SettingsIcon />
          Gestion logement
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
