/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentSevenTeen = () => {
    return (
        <div className="content-seventeen d-flex justify-content-between">
            <div className="content-seventeen-left d-flex align-items-center">
                <div>
                    <h3 className="font-mazzard-bold animate-text">Контакты</h3>
                    <p className="animate-text animate-text-1">
                        Уважаемые клиенты! <br/>
                        Ждем вас в нашем офисе <br/>
                        ежедневно с 9.00 до 21.00
                    </p>
                    <a href="#" className="animate-text animate-text-2">Скачать презентацию</a>
                </div>
            </div>
            <div className="content-seventeen-center">
                <div className="d-flex margin-bottom">
                    <h4 className="animate-text">АДРЕС</h4>
                    <div>
                        <h5 className="font-mazzard-semi-bold animate-text animate-text-1">ООО «WORLD BARAKA BUSINESS»</h5>
                        <p className="animate-text animate-text-2">Яшнабадский район Ул. Фаргона Йули, <br/>
                            3 проезд, дом 157-а</p>
                        <a href="tel:+998912345678" className="phone-number animate-text animate-text-3">+998 (91) 234-56-78</a>
                        <a href="#" className="font-montserrat-medium hover animate-text animate-text-4">ПОСМОТРЕТЬ НА КАРТЕ</a>
                    </div>
                </div>
                <div className="d-flex margin-bottom">
                    <div>
                        <h4 className="animate-text">EMAIL</h4>

                    </div>
                    <div>
                        <a href="mailto:marketing@osiyo.uz" className="mail animate-text animate-text-1">marketing@osiyo.uz</a>
                        <a href="mailto:info@osiyo.uz" className="mail animate-text animate-text-2">info@osiyo.uz</a>

                    </div>
                </div>
                <div className="d-flex">
                    <h4 className="animate-text">СОЦ. СЕТИ</h4>
                    <div>
                        <a href="mailto:marketing@osiyo.uz" className="mail animate-text animate-text-1">Facebook</a>
                        <a href="mailto:info@osiyo.uz" className="mail animate-text animate-text-2">Instagram</a>
                        <a href="mailto:info@osiyo.uz" className="mail animate-text animate-text-3">Telegram</a>
                    </div>
                </div>
            </div>
            <div className="content-seventeen-right">
                <h3 className="font-mazzard-semi-bold animate-text">Обратный звонок</h3>
                <p className="animate-text animate-text-1">Мы перезвоним вам в самое ближайшее время</p>

                <div className="position-relative">
                    <input type="text" placeholder="Ваше имя" className="font-montserrat-regular animate-text animate-text-2"/>
                    {/*<span className="icon icon-user"/>*/}
                </div>
                <div className="position-relative">
                    <input type="text" placeholder="Ваш телефон" className="font-montserrat-regular animate-text animate-text-3"/>
                    {/*<span className="icon icon-tel"/>*/}
                </div>

                <button type="button" className="font-mazzard-semi-bold animate-text animate-text-4">Отправить сообщение</button>
                <span className="animate-text animate-text-5">Нажимая кнопку “Отправить” вы соглашаетесь  <br/> с <a href="#">политикой конфиденциальности</a></span>
                <h4 className="animate-text">ДОКУМЕНТЫ</h4>
                <a href="#" className="d-flex align-items-center files animate-text animate-text-1"><span className="icon icon-file"/> Сертификат соответствия.pdf</a>
                <a href="#" className="d-flex align-items-center files animate-text animate-text-2"><span className="icon icon-file"/> Гувохнома.pdf</a>
            </div>
        </div>
    );
};

export default ContentSevenTeen;