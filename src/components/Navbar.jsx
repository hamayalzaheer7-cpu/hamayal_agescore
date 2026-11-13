
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white ">
      <a className="navbar-brand fw-bold" href="#home">
        AegisCore
      </a>

      <button
        className="navbar-toggler"
        data-bs-target="#menu"
      >
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav mx-auto">
          <li><a className="nav-link" href="#home">Overview</a></li>
          <li><a className="nav-link" href="#capabilities">Capabilities</a></li>
          <li><a className="nav-link" href="#projects">Projects</a></li>
         <li><a className="nav-link" href="#">Martix</a></li>
          <li><a className="nav-link" href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="btn btn-primary">
          Start Assessment
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
