const CarCard = ({ Image, Name, ReleaseYear, Price, Type }) => {
  return (
    <>
      <div className="card h-100 rounded-5" style={{ background: "#ecf0f5" }}>
        {/* <img className="card-img-top p-2 rounded-5 " src={Image} alt="Title" /> */}
        <div
          id="carouselId"
          className="carousel slide card-img-top  position-relative"
          data-bs-ride="carousel"
        >
          <ul className="carousel-indicators ">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="First slide"
              style={{
                listStyle: "none",
              }}
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
              aria-label="Second slide"
              style={{
                listStyle: "none",
              }}
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="2"
              aria-label="Third slide"
              style={{
                listStyle: "none",
              }}
            ></li>
          </ul>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active ">
              <img
                src={Image}
                className="w-100 d-block p-2 rounded-5"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Image}
                className="w-100 d-block p-2 rounded-5"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                src={Image}
                className="w-100 d-block p-2 rounded-5"
                alt="Third slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="card-body px-4">
          <div className="d-flex justify-content-between">
            <h4 className="card-title">{Name}</h4>
            <span
              className="badge rounded-4"
              style={{ border: "dotted  rgb(39 190 190)", color: "black" }}
            >
              {ReleaseYear}
            </span>
          </div>
          <div className="py-2">
            <div className="row row-cols-2">
              <div className="col">
                <div>
                  <i className="fa-solid fa-user-group "></i> 4 people
                </div>
              </div>
              <div className="col">
                <div>
                  {" "}
                  <i className="fa-solid fa-gas-pump px-1"></i> {Type}
                </div>
              </div>
            </div>
            <div className="row row-cols-2 my-1">
              <div className="col">
                <div>
                  <i className="fa-solid fa-gauge"></i> 4 people
                </div>
              </div>
              <div className="col">
                <div>
                  <i className="fa-solid fa-globe px-1"></i> Automatic
                </div>
              </div>
            </div>
          </div>
          {/* <p className="card-text">Text</p> */}
          <div className="card-footer px-0">
            <div className="row row-cols-2">
              <div className="col">
                <i className="fa-brands fa-dollar pl-2"></i>
                <span className="fw-bold">{Price}</span>
                <small>/month</small>
              </div>
              <div className="col">
                <div className="d-flex gap-3">
                  <button className="btn btn-info rounded-4">
                    <span>💗</span>
                  </button>
                  <button className="btn btn-primary rounded-4">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
