import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import "../sesion.css"

export const Carrusel = () => {
  return (
    <div className="carrusel">
      <Carousel
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showStatus={false}
      >
        <div>
          <img src="/foto_sesion/foto1.jpg" />
        </div>
        <div>
          <img src="/foto_sesion/foto2.jpg"/>
        </div>
        <div>
          <img src="/foto_sesion/foto3.jpg" />
        </div>
        <div>
          <img src="/foto_sesion/foto4.jpg" />
        </div>
      </Carousel>
    </div>
  );
};