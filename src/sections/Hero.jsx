
function Hero() {
  return (
    <section className="hero py-5" id="home">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">

            <h1 className="display-5 fw-bold mt-3">
              Architectural Form Meets
              <span className="text-primary">
                Sustainable Engineering
              </span>
            </h1>

            <p className="my-4">
                Synthesizing indigenous microclimates with
                multi-tier interior atriums to cultivate
                natural care while multiplying workspace
                occupancy.             </p>
            <a href="#projects" className="btn btn-primary">
              Projects
            </a>

            <a href="#contact" className="btn btn-light">
              View Portfolio
            </a>

            <div className="row mt-5">
              <div className="col-4">
                <h3>320K</h3>
                <small>Built Space</small>
              </div>

              <div className="col-4">
                <h3>-48%</h3>
                <small>Emboided Carbon</small>
              </div>

              <div className="col-4">
                <h3>18</h3>
                <small>In Design Laurels</small>
              </div>
            </div>

          </div>

          <div className="col-md-6">
            <img
              src="......................................"
              className="hero-img"
              alt="Sustainable Building"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
