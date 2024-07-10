import imagin1 from '../imagen/4geeks-academy.jpg';
import imagin2 from '../imagen/4geeksacademy-logo-old.png';
import imagin3 from '../imagen/santiago-office-2.jpg';

function Welcome() {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={imagin1} className="imagenCarrusel" alt="imagen1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className="textWelcome">Welcome</h4>
                            <p className="textWelcome">This is a beautiful landing page</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={imagin3} className="imagenCarrusel" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Program your history</h5>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Welcome;