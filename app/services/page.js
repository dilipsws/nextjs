// pages/services.js

export default function Services() {
    return (
      <div className="container my-5">
        <h1 className="text-center mb-5">Our Services</h1>
  
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="/images/service1.jpg" className="card-img-top" alt="Service 1" />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  We offer custom web development services to create dynamic and responsive websites for businesses of all sizes.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
  
          {/* Service 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="/images/service2.jpg" className="card-img-top" alt="Service 2" />
              <div className="card-body">
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  We specialize in developing high-quality mobile apps for both Android and iOS platforms to help you reach more customers.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
  
          {/* Service 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="/images/service3.jpg" className="card-img-top" alt="Service 3" />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">
                  Our digital marketing team helps businesses increase their online presence and generate more leads through effective strategies.
                </p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  