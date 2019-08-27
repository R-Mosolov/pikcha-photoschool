import React from 'react';

import '../../../global/css/general.css';

const Facts = () => {
    return (
        <section className="facts clearfix">
            <div className="layout-positioner">
                <h2>Почему доверяют качеству<br />
                    нашего фотообучения</h2>
                <ul className="facts-advantages">
                    <li className="icons icon1"><div className="facts-advantages-1"><h3>Более 6 лет обучаем <br />людей фотографии</h3></div></li>
                    <li className="icons icon2"><div className="facts-advantages-2"><h3>Филиалы ПИКЧИ есть в <br />32 городах России и СНГ</h3></div></li>
                    <li className="icons icon3"><div className="facts-advantages-3"><h3>Мы выпустили <br />70 000 фотографов</h3></div></li>
                    <li className="icons icon4"><div className="facts-advantages-4"><h3>Вы получаете сертификат <br />об обучении</h3></div></li>
                    <li className="icons icon5"><div className="facts-advantages-5"><h3>Есть специализация <br />знаний</h3></div></li>
                </ul>
                <button className="button button-open">Подробнее</button>
                <div className="facts-right"/>
            </div>
        </section>
    );
};

export default Facts;