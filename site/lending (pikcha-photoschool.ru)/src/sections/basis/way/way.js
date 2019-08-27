import React from 'react';

import '../../../global/css/general.css';
import Image from './image.png';

import GetAlert from '../../../global/js/pop-up';

const Way = () => {
    return (
        <section className="offer clearfix">
            <div className="layout-positioner">
                <div className="offer-left wow">
                    <h2>Выберите свой путь развития</h2>
                    <div className="offer-left-p">
                        <p>В ПИКЧЕ курсы делятся на несколько направлений:<br />
                            — основы фотографии для новичков;<br />
                            — про-курс для любителей;<br />
                            — свадебное фото;<br />
                            — обработка фотографий;<br />
                            — видеография;<br />
                            — студийные интенсивы.</p>
                        <p>Оставьте телефон, и менеджер расскажет подробнее
                            о понравившемся вам курсе.</p>
                        <button className="button button-open" onClick={GetAlert}>Подробнее</button>
                        <div className="modal">
                            <div className="modal__order">
                                <a className="order__close--a button-close" aria-label="Закрыть форму заявки"><img className="order__close--img" src="img/button-close-4.png" width={16} height={16} /></a>
                                <form className="order__form" name="screen1-form" action="http://www.pikcha-photoschool.ru/php/form.php" method="post">
                                    <input className="order__form--general form__name" type="text" name="name" placeholder="Ваше имя" autoComplete="on" tabIndex={0} /><br />
                                    <input className="order__form--general form__phone" type="tel" name="phone" placeholder="Номер моб. телефона" pattern="8[0-9]{10}" tabIndex={0} required /><br />
                                    <input className="order__form--general form__submit" type="submit" name="screen1-right-button" defaultValue="Подробнее" />
                                    <div className="agreement">
                                        <input type="checkbox" name="agreement" id="agreement" tabIndex={0} defaultChecked />
                                        <label htmlFor="agreement" tabIndex={0}>Отправляя заявку, я даю согласие на обработку персональных данных</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-right wow">
                    <img src={Image} alt="Изображение 2" width={247} height={500} />
                </div>
            </div>
        </section>
    );
};

export default Way;