import React from 'react';

import '../../../global/css/general.css';
import Image from './image.png';

const Result = () => {
    return (
        <section className="result clearfix">
            <div className="layout-positioner">
                <div className="result-left wow">
                    <img src={Image} alt="Изображение 7" width={421} height={300} />
                </div>
                <div className="result-right wow">
                    <h2>После завершения курса</h2>
                    <p>Полностью завершив обучение, вы повысите свои навыки в фотографии. У вас наберется большое портфолио с яркими работами и вы точно будете знать, как сделать фотографию своей профессией.</p>
                    <p>Фоторынок России только набирает обороты и многие направления еще не заняты сильными профессионалами. У вас есть возможность попасть в историю!</p>
                    <p>Оставьте телефон, менеджер опишет все возможности, которые откроются вам.</p>
                    <button className="button button-open">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default Result;