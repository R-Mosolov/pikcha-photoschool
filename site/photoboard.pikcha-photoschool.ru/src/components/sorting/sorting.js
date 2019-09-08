import React from 'react';

const Sorting = () => {
    return(
        <div className="sorting container mb-4 p-0">
            <div className="d-flex justify-content-end">
                <button className="btn shadow">Сортировка по имени</button>
                <button className="btn shadow ml-3">Сортировка по цене</button>
            </div>
        </div>
    )
};

export default Sorting;