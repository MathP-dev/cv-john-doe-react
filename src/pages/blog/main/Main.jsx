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
        <section className="row box-allBlog">
          <div className="col-12 titleBlog">
            <h2>Blog</h2>
            <p>Retrouvez ici quelques articles sur le développement web.</p>
          </div>
          <article className="col-12 col-md-6 col-lg-4 blog-box">
            <div className="card">
              <img
                src="../../../images/blog/coder.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body blog">
                <h5 className="card-title 1">Coder son site en HTML/CSS</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <p className="date">Publié le 22 aôut 2022</p>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-4 blog-box">
            <div className="card">
              <img
                src="../../../images/blog/croissance.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body blog">
                <h5 className="card-title 1">Vendre ses produits sur le web</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <p className="date">Publié le 20 aôut 2022</p>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-4 blog-box">
            <div className="card">
              <img
                src="../../../images/blog/google.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body blog">
                <h5 className="card-title 1">Se positionner sur google</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <p className="date">Publié le 1 aôut 2022</p>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-4 blog-box">
            <div className="card">
              <img
                src="../../../images/blog/screens.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body blog">
                <h5 className="card-title 1">Coder en responsive design</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <p className="date">Publié le 31 juillet 2022</p>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-4 blog-box">
            <div className="card">
              <img
                src="../../../images/blog/seo.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body blog">
                <h5 className="card-title 1">Techniques de référencement</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <p className="date">Publié le 30 juillet 2022</p>
            </div>
          </article>
          <article className="col-12 col-md-6 col-lg-4 blog-box">
            <div className="card">
              <img
                src="../../../images/blog/technos.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body blog">
                <h5 className="card-title 1">Apprendre à coder </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <p className="date">Publié le 12 juillet 2022</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Main;
