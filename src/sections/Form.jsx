import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !project) {
      alert("Please fill all required fields");
      return;
    }
    setName("");
    setEmail("");
    setProject("");
    setBudget("");
    setDetails("");
  }

  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <div className="row bg-white">
          {/* Left Side */}
          <div className="col-md-5 p-4 bg-light justify-content-between">
            <div>
              <span className="text-primary">NEW PROJECT PROPOSAL</span>
              <h2 className="fw-bold mt-2 mb-3">
                Initiate Architectural Commission
              </h2>
              <p className="text-muted">
                Our studio welcomes a curated selection of ambitious projects
                seeking regenerative, high-performance architectural solutions.
              </p>

              <ul>
                <li className="mb-2">Atelier Zurich & Tokyo</li>
                <li className="mb-2">Review Schedule</li>
                <li className="mb-2">Confidentiality Guaranteed</li>
              </ul>
            </div>

            <div className="p-3 bg-white">
              <strong>(~) Confidentiality Guarantee</strong>
              <p className="text-muted mb-0 small">
                Your project information remains private.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-md-7 p-4 p-md-5">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    Principal Contact Name *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hamayal Zaheer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-bold">
                    Studio / Institutional Email *
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label fw-bold">Project Typology</label>
                <select
                  className="form-select"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="">Select Project</option>
                  <option value="Fancy">Fancy</option>
                  <option value="Casual">Casual</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>

              <div className="mt-3">
                <label className="form-label fw-bold d-block">
                  Estimated Capital Allocation (USD)
                </label>
                <div className="d-flex gap-4 flex-wrap">
                  {["$5M-$15M", "$15M-$50M", "$50M+"].map((b) => (
                    <label key={b} className="form-check-label">
                      <input
                        type="radio"
                        name="budget"
                        value={b}
                        checked={budget === b}
                        onChange={(e) => setBudget(e.target.value)}
                        className="form-check-input"
                      />
                      {b}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label fw-bold">
                  Target Certifications & Standards
                </label>
                <div className="d-flex gap-3 flex-wrap">
                  {[
                    "LEED Platinum",
                    "BREEAM",
                    "Passive",
                    "Living Challenge",
                  ].map((cert) => (
                    <label key={cert} className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      {cert}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label fw-bold">
                  Site Location & Project Details
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Describe the project location and requirements..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>

              <div className="mt-4 d-flex justify-content-end gap-3 align-items-center">
                <button type="submit" className="btn btn-primary">
                  Submit Architectural RFP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
