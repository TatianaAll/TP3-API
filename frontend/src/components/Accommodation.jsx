import "../styles/Logement.scss"
import { Link } from "react-router-dom"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"

function Accommodation() {
  const [logements, setLogements] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/logements")
      .then((response) => response.json())
      .then((data) => {
        setLogements(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <>
      <div className="logements">
        {logements.length != 0 ? (
          logements.map((logement) => (
            <Link
              key={logement.id ? logement.id : logement._id}
              to={`/accommodation/${logement.id ? logement.id : logement._id}`}
              className="logement-box"
            >
              <h3>{logement.title}</h3>
              <img src={logement.cover} alt="logement-cover" className="logement-cover" />
            </Link>
          ))
        ) : (
          <h2 style={{ color: "black" }}>Aucune donnée</h2>
        )}
      </div>
    </>
  )
}

export default Accommodation
