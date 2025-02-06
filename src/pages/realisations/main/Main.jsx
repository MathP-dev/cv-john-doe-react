import "./main.css";
import { Link } from "react-router-dom";
function Main() {
  return (
    <main>
      <img
        src="../../../images/banner.jpg"
        alt="img du fond"
        className="img-fluid"
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 titleProjet">
            <h2>Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 projet1">
            <div className="card">
              <img
                src="../../../images/portfolio/fresh-food.jpg"
                className="card-img-top"
                alt="nourriture fraîches"
              />
              <div className="card-body real">
                <h5 className="card-title">Fresh food</h5>
                <p className="card-text">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Voir
                </Link>
              </div>
              <p className="techno">Site réalisé avec PHP et MySQL</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 projet2">
            <div className="card">
              <img
                src="../../../images/portfolio/restaurant-japonais.jpg"
                className="card-img-top"
                alt="nourriture japonaise"
              />
              <div className="card-body real">
                <h5 className="card-title">Restaurant akira</h5>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <Link to="#" className="btn btn-outline-primary">
                  Voir
                </Link>
              </div>
              <p className="techno">Site réalisé avec WordPress</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 projet3">
            <div className="card">
              <img
                src="../../../images/portfolio/espace-bien-etre.jpg"
                className="card-img-top"
                alt="coucher de soleil avec sculture boudhiste "
              />
              <div className="card-body real">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">
                  Réalisation d'un site vitrine pour un practicien de bien-être.
                </p>
                <Link to="#" className="btn btn-outline-primary">
                  Voir
                </Link>
              </div>
              <p className="techno">Site réalisé en HTML/CSS</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
