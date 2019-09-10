import React from 'react';

import OlegVaidner from './img/oleg-vaidner.jpg';
import Database from './database';

const Photographers = () => {

    let createOnePhotographer = (name, price) => {
        return(
            <div className="card shadow" style={{width: "20rem"}}>
                <img src={OlegVaidner} className="card-img-top" alt="Олег Вайднер"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Цена часа (руб.): {price}</p>
                    <a href="#" className="btn btn-secondary">Портфолио</a>
                    <a href="#" className="btn btn-success ml-3">Контакты</a>
                </div>
            </div>
        )
    };

    let createPhotographersArray = () => {
        let result = [];
        for (let i = 0; i < Database.length; i++) {
            result.push(createOnePhotographer(Database[i].name, Database[i].price));
        }
        return result;
    };

    return(
        <div className="photographers d-flex justify-content-between mb-5">
            {createPhotographersArray()}
        </div>
    )
};

export default Photographers;