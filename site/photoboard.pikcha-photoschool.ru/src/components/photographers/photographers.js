import React from 'react';

import OlegVaidner from './img/oleg-vaidner.jpg';
import Database from './database';
import createOnePhotographer from './index';

const Photographers = () => {
    const createOnePhotographer = (name, price, altName) => {
        return(
            <div className="card shadow mb-5" style={{"width": "350px"}}>
                <img src={OlegVaidner} className="card-img-top" alt={altName}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Цена часа (руб.): {price}</p>
                    <a href="#" className="btn btn-secondary">Портфолио</a>
                    <a href="#" className="btn btn-success ml-3">Контакты</a>
                </div>
            </div>
        )
    };

    const createPhotographersArray = () => {
        let result = [];
        for (let i = 0; i < Database.length; i++) {
            result.push(createOnePhotographer(Database[i].name, Database[i].price, Database[i].name));
        }
        return result;
    };

    const filterByName = () => {
        return(
            Database.sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                } if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
        )
    };

    return(
        <div>
            <button
                className="btn shadow mb-4"
                onClick={filterByName}>
                Сортировка по имени
            </button>
            <div className="photographers d-flex justify-content-around flex-wrap">
                {createPhotographersArray()}
            </div>
        </div>
    )
};

export default Photographers;