import React from 'react';

import '../../../global/css/general.css';
import Image from './image.png';

const Practice = () => {
    return (
        <section className="practice clearfix">
            <div className="layout-positioner">
                <div className="practice-left wow">
                    <h2>Теория всегда закрепляется практикой</h2>
                    <p>Только так можно научиться круто фотографировать. Уже на первой встрече вы начнёте делать свои первые снимки в ручном режиме! И все новые знания закрепим серией практических упражнений.</p>
                    <p>Вы прочувствуете на себе, кто такой «профессиональный фотограф». Договоритесь со своей первой моделью, найдёте подходящую локацию и осуществите первую фотосессию.</p>
                    <p>Оставьте имя и телефон, менеджер расскажет подробнее, что будет на практике.</p>
                    <button className="button button-open">Подробнее</button>
                </div>
                <div className="practice-right wow">
                    <img src={Image} alt="Изображение 4" width={221} height={500} />
                </div>
            </div>
        </section>
    );
};

export default Practice;