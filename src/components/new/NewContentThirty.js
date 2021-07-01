import React from 'react';

const NewContentThirty = () => {
    return (
        <div className="new-content new-content-thirty d-flex">
            <img src="/newimages/six-big-line.png" alt="line.png" className="new-content-six-big-line"/>
            <img src="/newimages/six-line.png" alt="line.png" className="new-content-six-line"/>

            <div className="new-content-thirty-left">
                <h3 className="font-gilroy-bold">Наши контакты</h3>
                <p>
                    Уважаемые клиенты! Ждем вас в нашем <br/>
                    офисе ежедневно с 9.00 до 21.00 <br/>
                    <br/>
                    ООО «WORLD BARAKA BUSINESS» <br/>
                    Яшнабадский район Ул. Фаргона Йули, <br/>
                    3 проезд, дом 157-а
                </p>
                <div className="d-flex">
                    <a href="#" className="social">
                        <span className="icon icon-telegram-new"/>
                    </a>
                    <a href="#" className="social">
                        <span className="icon icon-instagram"/>
                    </a>
                    <a href="#" className="social">
                        <span className="icon icon-facebook"/>
                    </a>
                </div>
            </div>
            <div className="new-content-thirty-center">
                <p className="font-gilroy-bold">Телефон</p>

                <a href="tel:+998912345678" className="tel font-gilroy-bold mb">+998 91 123 45 67</a>

                <p className="font-gilroy-bold">EMAIL адрес</p>

                <a href="mailto:info@osiyo.uz" className="tel font-gilroy-bold">info@osiyo.uz</a>
                <a href="mailto:marketing@osiyo.uz" className="tel font-gilroy-bold mb">marketing@osiyo.uz</a>

                <p className="font-gilroy-bold">документы</p>

                <a href="#" className="files font-gilroy-medium">
                    <span className="icon icon-document"/> Сертификат соответствия.pdf
                </a>
                <a href="#" className="files font-gilroy-medium">
                    <span className="icon icon-document"/> Гувохнома.pdf
                </a>
            </div>
            <div className="new-content-thirty-right">
                <h3 className="font-gilroy-bold">Напишите нам</h3>
                <p>Оставьте свои контакты, и мы с вами <br/>
                    свяжемся в ближайшее время.</p>

                <input type="text" placeholder="Ваше имя"/>
                <input type="text" placeholder="+998 "/>
                <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="font-gilroy-bold">Отправить</button>
                    <span>согласие на обработку <br/> персональных данных </span>
                </div>
            </div>
        </div>
    );
};

export default NewContentThirty;