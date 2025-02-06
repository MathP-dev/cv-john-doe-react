import "./main.css";

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
          <div className="col-12 titleOffer">
            <h2>Mon offre de services</h2>
            <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          </div>
          <section className="row box-offer">
            <article className="col-12 col-md-4 col-lg-4 service1">
              <i className="fa-solid fa-display iconOffer"></i>
              <h2>ux design</h2>
              <p>
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur.Son but est d'offrir une expérience de
                navigation optimal à l'internaute.
              </p>
            </article>
            <article className="col-12 col-md-4 col-lg-4 service2">
              <i className="fa-solid fa-file-code iconOffer"></i>
              <h2>développement web</h2>
              <p>
                Le <strong>developpement web</strong> repose sur l'utilisation
                des langages HTML, CSS, JavaScript et PHP.
              </p>
            </article>
            <article className="col-12 col-md-4 col-lg-4 service3">
              <i className="fa-solid fa-magnifying-glass-dollar iconOffer"></i>
              <h2>référencement</h2>
              <p>
                Le <strong>référencement naturel d'un site</strong>, aussi
                appelé SEO, consiste à mettre des techniques en oeuvre pour
                améliorer sa position dans les résultats des moteurs de
                recherche.
              </p>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Main;