import React from 'react';

import '../../../global/css/general.css';
import Image from './image.png';

const Creators = () => {
    return (
        <section className="creators clearfix">
            <div className="layout-positioner">
                <div className="creators-left wow">
                    <img src={Image} alt="Изображение 5" width={396} height={500} />
                </div>
                <div className="creators-right wow">
                    <h2>Окружите себя творческими людьми</h2>
                    <p>Широко известно, что окружение влияет на человека. Поэтому если вы являетесь творческим человеком, вам важно учиться в окружении таких же творческих личностей.</p>
                    <p>В ПИКЧЕ вы найдете тех, кто развивается в том же направлении, что и вы — в фотографии. Здесь вы обретете свою творческую семью. Она станет для вас основой на долгие годы.</p>
                    <p>Оставьте имя и телефон, менеджер познакомит вас с вашей новой группой.</p>
                    <button className="button button-open">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default Creators;