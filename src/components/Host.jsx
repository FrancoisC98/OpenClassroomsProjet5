function Host ({ name, picture }) {
    return (
        <div className="host">
            <p className="host-name">{name}</p>
            <img src={picture} alt={`Hôte ${name}`} className="host-img" />
        </div>
    )
    
}

export default Host