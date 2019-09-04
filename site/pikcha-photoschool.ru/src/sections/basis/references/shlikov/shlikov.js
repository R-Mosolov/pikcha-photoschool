import React from 'react';

import '../../../../global/css/general.css';
import Image from './image.png';

const Shlikov = () => {
    return (
        <div>
            <h2>Что говорят выпускники школы</h2>
            <div className="shlikov clearfix">
                <div className="shlikov-left">
                    <img src={Image} alt="Изображение 9-1" width={445} height={300} />
                </div>
                <div className="shlikov-right">
                    <cite>Слава Шлыков</cite>
                    <blockquote>
                        <p>«ПИКЧА — лучшее, что могло случиться со мной за последнее время.</p>
                        <p>Это сильная фотошкола, потому что там работают прекрасные люди, каждый из которых горит своим делом. Преподаватели просто и понятно доносили все от теории до практики.</p>
                        <p>Видно, как они хотят сделать из тебя профессионала даже больше, чем ты сам. Обучение строилось таким образом, чтобы человек, который никогда не держал в руках зеркалку в итоге делал прекрасные кадры».</p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Shlikov;