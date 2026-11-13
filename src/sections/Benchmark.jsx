import SectionTitle from "../components/SectionTitle";

function Benchmark() {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          subtitle="ENVIRONMENTAL EVALUATION"
          title="Structural Energy Benchmark Matrix"
        />

        <div className="table-responsive">
          <table className="table bg-white">
            <thead>
              <tr>
                <th>Structural Typology</th>
                <th>Embodied Carbon</th>
                <th>Thermal Efficiency</th>
                <th>Comparison Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mass Timber Glulam Hybrid Frame</td>
                <td>142 kg </td>
                <td>U-value: 0.18 W/mK</td>
                <td>
                  <span className="status">Compliant</span>
                </td>
              </tr>

              <tr>
                <td>Post-Tensioned Concrete</td>
                <td>230 kg CO₂/m²</td>
                <td>Medium</td>
                <td>
                  <span className="status">Moderate</span>
                </td>
              </tr>

              <tr>
                <td> Post-Tensioned Low-Clinker Concrete</td>
                <td>210 kg</td>
                <td>U-value: 0.21 W/</td>

                <td>
                  <span className="status">Validated</span>
                </td>
              </tr>

              <tr>
                <td> Kinetic Double-Skin Cavity Facade</td>
                <td>189 kg CO</td>
                <td>U-value: 0.16 </td>

                <td>
                  <span className="status">Compliant</span>
                </td>
              </tr>
              <tr>
                <td> Masonry Retrofit with Aerogel Infill</td>
                <td>95 kg </td>
                <td>U-value: 0.20</td>
                <td>
                  <span className="status">Compliant</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Benchmark;
