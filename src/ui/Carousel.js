import React from 'react'

import imagen1 from "../photos/1p.jpg"
import imagen2 from "../photos/2p.jpg"
import imagen3 from "../photos/3p.jpg"

export const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade swiper my-5" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active pictures">
                    <img src={imagen1} className="d-block w-100 images" alt="1"/>
                </div>
                <div className="carousel-item pictures">
                    <img src={imagen2} className="d-block w-100 images" alt="2"/>
                </div>
                <div className="carousel-item pictures">
                    <img src={imagen3} className="d-block w-100 images " alt="3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}
