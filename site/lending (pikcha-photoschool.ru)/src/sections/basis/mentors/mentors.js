import React from 'react';

import '../../../global/css/general.css';

const Mentors = () => {
    return (
        <section className="mentors clearfix">
            <div className="layout-positioner">
                <div className="mentors-left wow">
                    <h2>Уроки ведут действующие<br />
                        фотографы с многолетним опытом</h2>
                    <p>Преподаватели фотошколы ПИКЧА никогда не расстаются со своими камерами. Фотография — это их стиль и образ жизни. Одновременно это и профессия, которая позволяет расти и развиваться. И они с удовольствием делятся своим опытом с учениками!</p>
                    <p>Оставьте имя и телефон, менеджер расскажет больше о вашем преподавателе.</p>
                    <button className="button button-open">Подробнее</button>
                </div>
                <div className="mentors-right wow"/>
            </div>
        </section>
    );
};

export default Mentors;