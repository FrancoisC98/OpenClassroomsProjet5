import { useParams, Navigate } from 'react-router-dom';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import '../styles/logement.scss'


function Logement() {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)


  if (!logement) {
    return <Navigate to="/error" replace />
  }

  return (
     <div className='logement-fade-in'>
      <Slideshow pictures={logement.pictures}/>
     
     <div className='logement-page'>
     <div className='logement-header'>
      <div className='logement-top-header'>
        <h1 className='logement-title'>{logement.title}</h1>
        <p className='logement-location'>{logement.location}</p>
        <Tags tags={logement.tags} />
      </div>
              <div className='host-picture'>
      <div className='logement-host-rating'>

        <Host name={logement.host.name} picture={logement.host.picture} />
        </div>
        <Rating rating={logement.rating} />
      </div>
     </div>

     <div className='logement-description-equipments'>
      <div className='logement-collapse-section'>
      <Collapse title="Description" content={logement.description} />
      <Collapse title="Equipements" content={logement.equipments} />
      </div>
     </div>
     </div>
    </div>
  )
}

export default Logement
