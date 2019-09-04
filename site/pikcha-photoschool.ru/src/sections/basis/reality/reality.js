import React from 'react';

import '../../../global/css/general.css';

const Reality = () => {
    return (
        <section className="reality clearfix">
            <div className="layout-positioner">
                <div className="reality-left wow">
                    <h2>Первое в России<br />
                        реалити-шоу по фотографии</h2>
                    <p>ПИКЧА стала первой фотошколой в стране, кто запустил собственное реалити-шоу по фотографии.</p>
                    <p>Мы отобрали 15 участников и обучили их искусству фотографии в прямом эфире всего за 3 месяца.</p>
                    <p>Оставьте телефон, менеджер подскажет дату и время первого пробного урока.</p>
                    <button className="button button-open">Подробнее</button>
                </div>
                <div className="reality-right wow"/>
            </div>
        </section>
    );
};

export default Reality;