/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentTwelve = () => {
    return (
        <div className="content-twelve d-flex">
            <div className="content-twelve-left">
                <img src="/images/shop-map-img.png" alt=""/>
            </div>
            <div className="content-twelve-right">
                <h3 className="font-mazzard-semi-bold">Закажите звонок</h3>

                <p>Мы перезвоним вам в самое ближайшее время</p>

                <select className="font-montserrat-regular">
                    <option disabled selected>Выберите желаемый сектор</option>
                    <option>Сектор 1</option>
                    <option>Сектор 2</option>
                    <option>Сектор 3</option>
                    <option>Сектор 4</option>
                </select>

                <input type="text" placeholder="Ваше имя" className="font-montserrat-regular"/>

                <input type="text" placeholder="Телефон" className="font-montserrat-regular"/>

                <button type="button" className="font-montserrat-medium">Отправить</button>

                <span>Нажимая кнопку “Отправить” вы соглашаетесь с <a href="#">политикой конфиденциальности</a></span>
            </div>
            <div className="content-twelve-info d-flex justify-content-between">
                <div className="content-twelve-info-left">
                    <div className="d-flex align-items-center item">
                        <span className="circle circle-green"/>
                        Потребительские товары
                    </div>
                    <div className="d-flex align-items-center item">
                        <span className="circle circle-red"/>
                        Одежда и обувь
                    </div>
                    <div className="d-flex align-items-center item">
                        <span className="circle circle-blue"/>
                        Бытовая техника <br/>и электроприборы

                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-center item">
                        <span className="circle circle-aqua"/>Ткани и <br/> трикотажные <br/>изделия
                    </div>
                    <div className="d-flex align-items-center item">
                        <span className="circle circle-yellow"/>
                        Строительные <br/>
                        товары
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContentTwelve;