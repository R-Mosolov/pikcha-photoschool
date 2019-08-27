import React from 'react';

import '../../../global/css/general.css';
import Image from './image.png';

const Program = () => {
    return (
        <section className="program clearfix">
            <div className="layout-positioner">
                <div className="program-left wow">
                    <img src={Image} alt="Изображение 3" width={303} height={500} />
                </div>
                <div className="program-right wow">
                    <h2>Вы сами составляете программу обучения</h2>
                    <p>Мы понимаем, что обучение будет максимально полезным, когда процесс ориентирован на интересы и пожелания учеников. У вас будет возможность подобрать удобное расписание и посещать занятия именно в те дни и в то время, когда вы можете.</p>
                    <p>Стать профессионалом в определенной сфере вам поможет специализация. Если вы хотите заниматься только свадебной фотографией, вы будете изучать только её.</p>
                    <p>Оставьте имя и телефон, менеджер поможет составить персональную программу.</p>
                    <button className="button button-open">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default Program;