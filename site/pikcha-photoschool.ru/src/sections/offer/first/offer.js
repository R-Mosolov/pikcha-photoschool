import React from 'react';

import './offer.css';
import Image from './image.png';

const Offer = () => {
    return (
        <section className="screen1 background clearfix">
            <div className="layout-positioner">
                <div className="screen1-left wow">
                    <img src={Image} alt="Изображение 1" width={314} height={553}/>
                </div>
                <div className="screen1-right wow">
                    <h1>Станьте профессиональным фотографом,<br/>
                        пройдя обучение в международной<br/>
                        сети фотошкол <span>ПИКЧА</span>
                    </h1>
                    <form name="screen1-form" action="http://www.pikcha-photoschool.ru/php/form.php" method="post">
                        <input type="text" name="name" id="name" placeholder="Ваше имя" autoComplete="on" tabIndex={0}
                               autoFocus/><br/>
                        <input type="tel" name="phone" id="phone" placeholder="Номер моб. телефона" pattern="8[0-9]{10}"
                               tabIndex={0} required/><br/>
                        <button type="submit" name="screen1-right-button" id="screen1-right-button">Подробнее</button>
                        <div className="agreement">
                            <input type="checkbox" name="agreement" id="agreement" tabIndex={0} defaultChecked/>
                            <label htmlFor="agreement" tabIndex={0}>Отправляя заявку, я даю согласие на обработку
                                персональных данных</label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Offer;