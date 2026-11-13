import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import imageA from "../images/a.jpg";
import imageB from "../images/b.jpg";


function CaseStudies() {
  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <SectionTitle
          subtitle="LATEST PROJECTS"
          title="Featured Spatial Case Studies"
        />

        <div className="row g-4">
          <div className="col-md-6">
            <Card
              image={imageA}
              label="Kyoto, Japan · 2024"
              title="Metropolitan Botanical Pavilion"
              description="A 14,000 public conservatory that
                        combines natural ventilation."
              buttonText="View Project"
            />
          </div>

          <div className="col-md-6">
            <Card
              image={imageB}
              label="Bergen, Norway · 2024"
              title="Nordic Civic Center"
              description="A climate-responsive civic facility
                        integrating closed-loop geothermal heat
                        exchangers with locally sourced timber
                        and low-carbon concrete assemblies "
              buttonText="View Project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
