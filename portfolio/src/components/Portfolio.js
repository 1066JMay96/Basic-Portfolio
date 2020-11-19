import React from 'react';
function Portfolio() {
    return (  
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand" href="index.html" id="logo">William May</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="portfolio.html">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">About</a>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
            {/* /.container */}
          </nav>
          {/* End of navbar */}
          {/* Start of container */}
          <div className="container">
            <main className="row">
              <div className="col-md-8">
                <article className="block">
                  <h1 className="block-header">Portfolio</h1>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <img className="img-fluid port-image" src="https://via.placeholder.com/350x350" alt="" />
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <img className="img-fluid port-image" src="https://via.placeholder.com/350x350" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <img className="img-fluid port-image" src="https://via.placeholder.com/350x350" alt="" />
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <img className="img-fluid port-image" src="https://via.placeholder.com/350x350" alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 col-md-12 col-lg-6">
                      <img className="img-fluid port-image" src="https://via.placeholder.com/350x350" alt="" />
                    </div>
                  </div>
                </article>
              </div>
            </main>
          </div>
        </div>
      );
    };


export default Portfolio;