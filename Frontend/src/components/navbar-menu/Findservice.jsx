
import React from "react";

const Findservice = () => {
  const serviceData = [
    {
      id: 1,
      name: "Manjeet Singh",
      job: "Plumber",
      location: "Abohar, Punjab",
      image:
        "https://www.bing.com/th/id/OIP.TOdWH7V3u50DE2O8sxXv8gHaE8?w=167&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      job: "Electrician",
      location: "Delhi",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sanjay Kumar",
      job: "Carpenter",
      location: "Chandigarh",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Ravi Kumar",
      job: "Painter",
      location: "Ludhiana",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Sunil Verma",
      job: "Mechanic",
      location: "Jaipur",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {serviceData.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card shadow-lg text-center rounded-4">
                <img
                  src={item.image}
                  alt={item.job}
                  className="rounded-circle mx-auto d-block"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    marginTop: "15px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title"> {item.name} </h5>
                  <p className="card-title">{item.location}</p>
                  <a href="#" className="btn btn-primary w-100">
                    Click for more details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Findservice;



