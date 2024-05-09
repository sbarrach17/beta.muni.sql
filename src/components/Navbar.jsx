import "../css/Navbar.css"

const Navbar = () => {


  return (
    <div className='navigation'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className='logo img-fluid' src="./img/logo.png" alt="Municipalidad de Quilicura" /></a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
        </div>
      </nav>
      </div>
  );
};

export default Navbar;
