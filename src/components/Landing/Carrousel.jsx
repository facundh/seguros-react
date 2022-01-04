import React from "react";
import auto7 from '../../assets/imgs/auto7.jpg'
import auto5 from '../../assets/imgs/auto5.jpg'
import auto4 from '../../assets/imgs/auto4.jpg'

const Carrousel = () => {
  return (

    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={auto7} className="d-block w-100" alt="clasico" />
        </div>
        <div className="carousel-item">
          <img src={auto5} className="d-block w-100" alt="clasico" />
        </div>
        <div className="carousel-item">
          <img src={auto4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
