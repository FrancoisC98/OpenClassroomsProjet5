import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <h2>Logement introuvable ❌</h2>
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      {/* Tu peux ajouter plus d'infos ici comme les tags, les images, etc. */}
    </div>
  )
}

export default Logement
