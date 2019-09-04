import React from 'react';

import '../../../global/css/offer.css';
import Image from './image.png';

const Final = () => {
    return (
        <section className="final background clearfix">
            <div className="layout-positioner">
                <div className="final-left wow">
                    <img src={Image} alt="Изображение 13" width={257} height={550} />
                </div>
                <div className="final-right wow">
                    <h2>
                        Запись на бесплатный,<br />
                        пробный урок <span>по фотографии:</span>
                    </h2>
                    <form name="screen1-form" action="http://www.pikcha-photoschool.ru/php/form.php" method="post">
                        <input type="text" name="name" id="name" placeholder="Ваше имя" autoComplete="on" tabIndex={0} /><br />
                        <input type="tel" name="phone" id="phone" placeholder="Номер моб. телефона" pattern="8[0-9]{10}" tabIndex={0} required /><br />
                        <button type="submit" name="screen1-right-button" id="screen1-right-button">Подробнее</button>
                        <div className="agreement">
                            <input type="checkbox" name="agreement" id="agreement" tabIndex={0} defaultChecked />
                            <label htmlFor="agreement" tabIndex={0}>Отправляя заявку, я даю согласие на обработку персональных данных</label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Final;