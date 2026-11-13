import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

function Capabilities() {
  return (
    <section className="section-padding" id="capabilities">
      <div className="container">
        <SectionTitle
          subtitle="DESIGN-DRIVEN INNOVATION"
          title="Spatial Capabilities"
        />

        <div className="row g-4">
          <div className="col-md-4">
            <Card
              icon="⌘"
              label="BIO-SPATIAL SYSTEMS"
              title="Biophilic Commercial Spaces"
              description="Synthesizing indigenous microclimates with
                    multi-tier interior atriums to cultivate
                    natural care while multiplying workspace
                    occupancy."
              buttonText="Explore Typology→"
            />
          </div>

          <div className="col-md-4">
            <Card
              icon="⌘"
              label="ALGORITHMIC ENVELOPES"
              title="Computational Facade Engineering"
              description=" Parametric solar shading systems dynamically
                    mapped against microclimatic simulations,
                    eliminating direct solar glare and lowering
                    cooling demand.
               "
              buttonText="Explore Typology→"
            />
          </div>

          <div className="col-md-4">
            <Card
              icon="⌘"
              label="CIRCULAR ADAPTABILITY"
              title="Adaptive Heritage Reuse"
              description="Structural rehabilitation of century-old
                    industrial frameworks through low-impact
                    post-tensioned timber splices frameworks through low"
              buttonText="Explore Typology→"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
