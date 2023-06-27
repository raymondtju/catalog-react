import React from "react";

function AboutPage() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 p-5">
            <h1 className="display-4">About Us</h1>
            <p className="lead mb-0">
              Hi, <br />
              Tiiger, Bunny and Friends built this website. Be happy!
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
              alt=""
              height={50}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
            
    </div>
  );
}

export default AboutPage;
