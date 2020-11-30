import React from 'react';
function Portfolio() {
    return (  

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
                      <img className="img-fluid port-image" src="./IMG_E0028.JPG" alt="" />
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
      );
    };


export default Portfolio;