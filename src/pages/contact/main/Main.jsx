import "./main.css";

function Main() {
  return (
    <main>
      <div className="container-fluid box-contact">
        <div className="row item-contact">
          <section className="col-12 titleContact">
            <h2>me contacter</h2>
            <p>
              Pour me contacter en vue d'un entretien ou d'une future
              collaboration, merci de remplir le formulaire de contact.
            </p>
          </section>
          <section className="col-12 col-md-6 formContact">
            <h2 className="titleForm">Formulaire de contact</h2>
            <form className="form1">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre adresse email"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Votre numéro de téléphone"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Sujet"
                  required={true}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Votre message"
                  required={true}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btnForm">
                Envoyer
              </button>
            </form>
          </section>
          <div className="col-12 col-md-6 box-Coord">
            <h2 className="titleCoord">Mes coordonnées</h2>
            <address className="addresss">
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "black" }}
              ></i>
              40 Rue Laure Diebold, 69009 Lyon, France
              <p>
                <i
                  className="fa-solid fa-mobile-screen"
                  style={{ color: "black" }}
                ></i>
                06 20 30 40 50
              </p>
            </address>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621757!2d4.796403976016823!3d45.77866197108088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1711636961588!5m2!1sfr!2sfr"
              title="Location addresse"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
