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
                <h3 className="font-mazzard-semi-bold animate-text">Закажите звонок</h3>

                <p className="animate-text animate-text-1">Мы перезвоним вам в самое ближайшее время</p>

                <select className="font-montserrat-regular animate-text animate-text-2">
                    <option disabled selected>Выберите желаемый сектор</option>
                    <option>Сектор 1</option>
                    <option>Сектор 2</option>
                    <option>Сектор 3</option>
                    <option>Сектор 4</option>
                </select>

                <input type="text" placeholder="Ваше имя" className="font-montserrat-regular animate-text animate-text-3"/>

                <input type="text" placeholder="Телефон" className="font-montserrat-regular animate-text animate-text-4"/>

                <button type="button" className="font-montserrat-medium animate-text animate-text-5">ОТПРАВИТЬ СООБЩЕНИЕ</button>

                <span className="animate-text animate-text-6">Нажимая кнопку “Отправить” вы соглашаетесь с <a href="#">политикой конфиденциальности</a></span>
            </div>
            <div className="content-twelve-info d-flex">
                <div className="content-twelve-info-left">
                    <div className="d-flex align-items-center item animate-text">
                        <span className="circle circle-green"/>
                        Потребительские товары
                    </div>
                    <div className="d-flex align-items-center item animate-text">
                        <span className="circle circle-red"/>
                        Одежда и обувь
                    </div>
                    <div className="d-flex align-items-center item animate-text">
                        <span className="circle circle-blue"/>
                        Бытовая техника <br/>и электроприборы

                    </div>
                </div>
                <div>
                    <div className="d-flex align-items-center item animate-text">
                        <span className="circle circle-aqua"/>Ткани и трикотажные <br/>изделия
                    </div>
                    <div className="d-flex align-items-center item animate-text">
                        <span className="circle circle-yellow"/>
                        Строительные
                        товары
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContentTwelve;