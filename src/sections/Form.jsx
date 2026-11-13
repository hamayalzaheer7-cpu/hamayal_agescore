
import { useState } from "react";

function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "" || project === "") {
      alert("Please fill all required fields");
      return;
    }

    alert("Your commission request has been submitted!");

    setName("");
    setEmail("");
    setProject("");
    setBudget("");
    setDetails("");
  }

  return (
    <section className="section-padding" id="contact">
      <div className="container">

        <div className="row bg-white">

          {/* Left Side */}
          <div className="col-md-5 p-4">

            <span className="small-title">NEW PROJECT PROPOSAL</span>

            <h2>Initiate Architectural Commission</h2>

            <p>
              Our studio welcomes a curated selection of
              ambitious projects seeking regenerative,
              high-performance architectural solutions.
            </p>

            <ul>
              <li>Atelier Zurich & Tokyo</li>
              <li>Review Schedule</li>
              <li>Confidentiality Guaranteed</li>
            </ul>

            <div className="confidential">
              <strong>(~) Confidentiality Guarantee</strong>
              <p>Your project information remains private.</p>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="col-md-7 p-4">

            <form onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">
                  <label><b>Principal Contact Name</b></label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Hamayal Zaheer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label><b>Studio / Institutional Email</b></label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

              </div>

              <div className="form-group mt-3">
                <label><b>Project Typology</b></label>

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

              <div className="form-group mt-3">
                <label><b>Estimated Capital Allocation (USD)</b></label>

                <div className="budget-options">

                  <label>
                    <input
                      type="radio"
                      name="budget"
                      value="$5M-$15M"
                      checked={budget === "$5M-$15M"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    $5M-$15M
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="budget"
                      value="$15M-$50M"
                      checked={budget === "$15M-$50M"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    $15M-$50M
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="budget"
                      value="$50M+"
                      checked={budget === "$50M+"}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                    $50M+
                  </label>

                </div>
              </div>

              <div className="form-group mt-3">
                <label><b>Target Certifications & Standards</b></label>

                <div className="cert-options">
                  <label><input type="checkbox" /> LEED Platinum</label>
                  <label><input type="checkbox" /> BREEAM</label>
                  <label><input type="checkbox" /> Passive</label>
                  <label><input type="checkbox" /> Living Challenge</label>
                </div>
              </div>

              <div className="form-group mt-3">
                <label><b>Site Location & Project Details</b></label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Describe the project location and requirements..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions mt-3">

                <button type="reset" className="clear-btn btn-secondary"
                  onClick={() => {
                    setName("");
                    setEmail("");
                    setProject("");
                    setBudget("");
                    setDetails("");
                  }}
                >
                  Clear Form
                </button>

                <button type="submit" className="btn btn-primary">
                  Submit Architectural RFP →
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
