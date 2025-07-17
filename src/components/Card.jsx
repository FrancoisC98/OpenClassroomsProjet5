import { Link } from "react-router-dom"
import "../styles/Card.scss"


function Card({logement}) {
    return (
        <Link to={`/logement/${logement.id}`} className="card-link">
        <div className="card">
            <img src={logement.cover} alt={logement.title} className="card-img"/>
            <h2 className="card-title">{logement.title}</h2>
        </div>
        </Link>
        
    )
}

export default Card