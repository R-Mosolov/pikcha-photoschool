import React from 'react';

import OlegVaidner from './img/oleg-vaidner.jpg';
import Database from './database';

const Photographers = () => {
    return(
        <div className="photographers d-flex justify-content-between mb-5">
            <div className="card shadow" style={{width: '20rem'}}>
                <img src={OlegVaidner} className="card-img-top" alt="Олег Вайднер"/>
                <div className="card-body">
                    <h5 className="card-title">{Database[0].name}</h5>
                    <p className="card-text">Цена часа (руб.): {Database[0].price}</p>
                    <a href="#" className="btn btn-secondary">Портфолио</a>
                    <a href="#" className="btn btn-success ml-3">Контакты</a>
                </div>
            </div>
            <div className="card shadow" style={{width: '20rem'}}>
                <img src={OlegVaidner} className="card-img-top" alt="Олег Вайднер"/>
                <div className="card-body">
                    <h5 className="card-title">{Database[1].name}</h5>
                    <p className="card-text">Цена часа (руб.): {Database[1].price}</p>
                    <a href="#" className="btn btn-secondary">Портфолио</a>
                    <a href="#" className="btn btn-success ml-3">Контакты</a>
                </div>
            </div>
            <div className="card shadow" style={{width: '20rem'}}>
                <img src={OlegVaidner} className="card-img-top" alt="Олег Вайднер"/>
                <div className="card-body">
                    <h5 className="card-title">{Database[2].name}</h5>
                    <p className="card-text">Цена часа (руб.): {Database[2].price}</p>
                    <a href="#" className="btn btn-secondary">Портфолио</a>
                    <a href="#" className="btn btn-success ml-3">Контакты</a>
                </div>
            </div>
        </div>
    )
};

export default Photographers;