import "./main.css";
import { Helmet } from "react-helmet";

function Main() {
  return (
    <main>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h2 className="titleMentions">Mentions légales</h2>

      <div className="accordion" id="accordionMentions">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              <h3>John Doe</h3>
              <address>
                <p>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "black" }}
                  ></i>
                  40 Rue Laure Diebold, 69009 Lyon, France
                </p>
                <p>
                  <i
                    className="fa-solid fa-mobile-screen"
                    style={{ color: "black" }}
                  ></i>
                  <a className="mobile" href="tel:0620304050">
                    06 20 30 40 50
                  </a>
                </p>
                <p>
                  <i
                    className="fa-sharp fa-solid fa-envelope"
                    style={{ color: "black" }}
                  ></i>
                  <a className="email" href="mailto:john.doe@gmail.com">
                    john.doe@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              le site est héberger par{" "}
              <a
                className="hebergeur"
                href="https://codesandbox.io/p/github/MathP-dev/cv-john-doe-react/draft/stupefied-mcnulty?workspaceId=ws_3V3NbaAMwCJmoozGHyQgi2"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeSandBox
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionMentions"
          >
            <div className="accordion-body">
              Les images sont fournies par
              <a
                className="credits"
                href="https://www.pixabay.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;