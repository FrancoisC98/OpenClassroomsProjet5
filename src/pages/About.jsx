import Banner from "../components/Banner"
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/Background.png"
import "../styles/About.scss"

function About() {
    const collapseData =[
        {
            title: "Fiabilité",
            content : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes",
        },
         {
            title: "Respect",
            content : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme",
        },
         {
            title: "Service",
            content : "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance",
        },
         {
            title: "Sécurité",
            content : "La sécurité est la priorité chez Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes",
        }
    ];

return (
    <div className="about">
        <Banner image={aboutBanner}/>
            <section className="collapse-section">
                {collapseData.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content}/>
                ))}
            </section>
    </div>
);
}


export default About;