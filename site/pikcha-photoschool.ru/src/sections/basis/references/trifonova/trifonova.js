import React from 'react';

import '../../../../global/css/general.css';
import Image from './image.png';

const Trifonova = () => {
    return (
        <div>
            <div className="trifonova clearfix">
                <div className="trifonova-left">
                    <img src={Image} alt="Изображение 9-3" width={445} height={300} />
                </div>
                <div className="trifonova-right">
                    <cite>Даша Трифонова</cite>
                    <blockquote>
                        <p>«Хочу выразитель благодарность всему коллективу фотошколы!</p>
                        <p>очень хорошее отношение к каждому ученику!всё подробно расскажут и всегда помогут!Увлекаясь фотографией понимаешь,что вокруг так много всего интересного и увлекательного!Просто начинаешь узнавать себя с другой стороны!</p>
                        <p>Для меня это как новый этап в жизни!Спасибо вам большое за всё!».</p>
                    </blockquote>
                </div>
            </div>
            <button className="button button-open">Подробнее</button>
        </div>
    );
};

export default Trifonova;