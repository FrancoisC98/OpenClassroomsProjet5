import Banner from '../components/Banner'
import bannerImg from '../assets/imgBanner.png'
import Card from '../components/Card'
import logements from '../data/logements.json'
import '../styles/Card.scss'


function Home() {
    return (
    <>
    <Banner image={bannerImg} text="Chez vous, partout et ailleurs"/>
    <section className='cards-container'>
        {logements.map(logement => (
        <Card key={logement.id} logement={logement} />
        ))}
    </section>
    </>
    )
}

export default Home