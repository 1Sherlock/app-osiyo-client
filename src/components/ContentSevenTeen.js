/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentSevenTeen = () => {
    return (
        <div className="content-seventeen d-flex justify-content-between">
            <div className="content-seventeen-left d-flex align-items-center">
                <div>
                    <h3 className="font-mazzard-semi-bold">Контакты</h3>
                    <p>
                        Уважаемые клиенты! <br/>
                        Ждем вас в нашем офисе <br/>
                        ежедневно с 9.00 до 21.00
                    </p>
                </div>
            </div>
            <div className="content-seventeen-center">
                <div className="d-flex margin-bottom">
                    <h4>АДРЕС</h4>
                    <div>
                        <h5 className="font-mazzard-semi-bold">ООО «WORLD BARAKA BUSINESS»</h5>
                        <p>Яшнабадский район Ул. Фаргона Йули, <br/>
                            3 проезд, дом 157-а</p>
                        <a href="tel:+998912345678" className="phone-number">+998 (91) 234-56-78</a>
                        <a href="#" className="font-montserrat-medium hover">ПОСМОТРЕТЬ НА КАРТЕ</a>
                    </div>
                </div>
                <div className="d-flex margin-bottom">
                    <div>
                        <h4>EMAIL</h4>

                    </div>
                    <div>
                        <a href="mailto:marketing@osiyo.uz" className="mail">marketing@osiyo.uz</a>
                        <a href="mailto:info@osiyo.uz" className="mail">info@osiyo.uz</a>

                    </div>
                </div>
                <div className="d-flex">
                    <h4>СОЦ. СЕТИ</h4>
                    <div>
                        <a href="mailto:marketing@osiyo.uz" className="mail">Facebook</a>
                        <a href="mailto:info@osiyo.uz" className="mail">Instagram</a>
                        <a href="mailto:info@osiyo.uz" className="mail">Telegram</a>
                    </div>
                </div>
            </div>
            <div className="content-seventeen-right">
                <h3 className="font-mazzard-semi-bold">Обратный звонок</h3>
                <p>Мы перезвоним вам в самое ближайшее время</p>

                <div className="position-relative">
                    <input type="text" placeholder="Ваше имя" className="font-montserrat-regular"/>
                    <span className="icon icon-user"/>
                </div>
                <div className="position-relative">
                    <input type="text" placeholder="Ваш телефон" className="font-montserrat-regular"/>
                    <span className="icon icon-tel"/>
                </div>

                <button type="button" className="font-montserrat-semi-bold">Отправить сообщение</button>
                <span>Нажимая кнопку “Отправить” вы соглашаетесь  <br/> с <a href="#">политикой конфиденциальности</a></span>
                <h4>ДОКУМЕНТЫ</h4>
                <a href="#" className="d-flex align-items-center files"><span className="icon icon-file"/> Сертификат соответствия.pdf</a>
                <a href="#" className="d-flex align-items-center files"><span className="icon icon-file"/> Гувохнома.pdf</a>
            </div>
        </div>
    );
};

export default ContentSevenTeen;