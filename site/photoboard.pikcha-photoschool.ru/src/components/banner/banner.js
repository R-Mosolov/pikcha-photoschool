import React from 'react';

import './banner.css';
import Image from './img/banner.png';

const Banner = () => {
    return(
        <div className="banner bd-example shadow">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active"/>
                    <li data-target="#carouselExampleCaptions" data-slide-to={1}/>
                    <li data-target="#carouselExampleCaptions" data-slide-to={2}/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                            <img src={Image} className="d-block" alt="..."/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Преимущество №1</h5>
                            <p>Делитесь информацией о предстоящих фотосессиях!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Преимущество №2</h5>
                            <p>Договаривайтесь о месте встречи с понравившимся Вам фотографом!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Преимущество №3</h5>
                            <p>Будьте в курсе современных фототрендов!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};

export default Banner;