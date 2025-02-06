import React from "react";
import "./main.css";

function Main() {
  const scrollToApropos = () => {
    const element = document.getElementById("apropos");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <div id="top-anchor"></div>
      <div className="fond">
        <div className="filter">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>

          <button
            type="button"
            className="btn btn-primary btnAbout"
            onClick={scrollToApropos}
          >
            En savoir plus
          </button>
        </div>
      </div>

      <div id="apropos" className="apropos">
        <div className="container-fluid box-about">
          <div className="row row-about">
            <article className="col-12 col-md-6">
              <h2 className="title">À propos</h2>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai
                suivi une formation d'
                <strong>intégrateur-développeur web au CEF</strong>. Au cours de
                cette formation, j'ai pu acquérir des bases solides pour
                travailler dans le domaine du <strong>développement web</strong>
                .
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une
                agence digitale pour consolider ma formation de
                <strong> développeur web full stack</strong>.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que
                j'écris et je respecte les bonnes pratiques du web.
              </p>
            </article>
            <article className="col-12 col-md-6">
              <img
                src="../../../images/john-doe-about.jpg"
                alt="john doe devant un ordinateur"
                className="img-about"
              />
              <h2 className="title2">Mes compétences</h2>
              <span>html5 90%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <span>css3 80%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Info example"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <span>javascript 70%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>

              <span>php 60%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span>react 50%</span>
              <div
                className="progress"
                role="progressbar"
                aria-label="Danger example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
