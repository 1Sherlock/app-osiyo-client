import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewContactMobileTwo = () => {
    return (
        <div className="new-mobile contacts-mobile-two  ">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile-white.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>

            <div className="new-content-thirty-left">
                <h3 className="font-gilroy-bold ">Наши контакты</h3>
                <p className="">
                    Уважаемые клиенты! Ждем вас в нашем <br/>
                    офисе ежедневно с 9.00 до 21.00 <br/>
                    <br/>
                    ООО «WORLD BARAKA BUSINESS» <br/>
                    Яшнабадский район Ул. Фаргона Йули, <br/>
                    3 проезд, дом 157-а
                </p>
                <div className="d-flex">
                    <a href="#" className="social ">
                        <span className="icon icon-telegram-new"/>
                    </a>
                    <a href="#" className="social ">
                        <span className="icon icon-instagram"/>
                    </a>
                    <a href="#" className="social ">
                        <span className="icon icon-facebook"/>
                    </a>
                </div>
            </div>
            <div className="new-content-thirty-center">
                <p className="font-gilroy-bold ">Телефон</p>

                <a href="tel:+998912345678" className="tel font-gilroy-bold mb ">+998 91 123 45 67</a>

                <p className="font-gilroy-bold ">EMAIL адрес</p>

                <a href="mailto:info@osiyo.uz" className="tel font-gilroy-bold ">info@osiyo.uz</a>
                <a href="mailto:marketing@osiyo.uz" className="tel font-gilroy-bold mb ">marketing@osiyo.uz</a>

                <p className="font-gilroy-bold ">документы</p>

                <a href="#" className="files font-gilroy-medium ">
                    <span className="icon icon-document"/> Сертификат соответствия.pdf
                </a>
                <a href="#" className="files font-gilroy-medium ">
                    <span className="icon icon-document"/> Гувохнома.pdf
                </a>
            </div>
            <div className="new-content-thirty-right">
                <h3 className="font-gilroy-bold ">Напишите нам</h3>
                <p className="">Оставьте свои контакты, и мы с вами <br/>
                    свяжемся в ближайшее время.</p>

                <input type="text" placeholder="Ваше имя" className=""/>
                <input type="text" placeholder="+998 " className=""/>
                <div className=" justify-content-between align-items-center ">
                    <button type="button" className="font-gilroy-bold">Отправить</button>
                    <p className="footer-con">согласие на обработку <br/> персональных данных </p>
                </div>
            </div>
            <NewMobileFooter leftDisabled={false} color="#fff" leftLink="/" rightLink="/about"/>

        </div>
    );
};

export default NewContactMobileTwo;