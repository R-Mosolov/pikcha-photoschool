import React from 'react';

import Database from '../photographers/database';
import createOnePhotographer from '../photographers';

const Sorting = () => {
    const filterByName = () => {
        let result = [];
        for (let i = Database.length - 1; i > 0; i--) {
            result.push(createOnePhotographer(Database[i].name, Database[i].price, Database[i].name));
        }
        return result;
    };

    return(
        <div className="sorting container mb-4 p-0">
            {/*<div className="d-flex justify-content-end">*/}
            {/*    <button*/}
            {/*        className="btn shadow"*/}
            {/*        onClick={filterByName}>*/}
            {/*        Сортировка по имени*/}
            {/*    </button>*/}

            {/*    <button*/}
            {/*        className="btn shadow ml-3">*/}
            {/*        Сортировка по цене*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
};

export default Sorting;