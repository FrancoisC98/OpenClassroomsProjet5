function Banner ({ image, text}) {
    return (
        <div className="banner">
            <img src={image} alt="bannière Kasa" className="banner-img"/>
            {text && <h1 className="banner-text">Chez vous, partout et ailleurs</h1>}
        </div>
    );
}

export default Banner;