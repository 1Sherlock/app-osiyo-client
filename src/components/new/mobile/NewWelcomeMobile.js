import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewWelcomeMobile = () => {
    return (
        <div className="new-mobile welcome-mobile">

        <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
            <img src="/icons/menu.svg" alt="menu.svg"/>
            <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
            <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
        </div>

        <h3 className="font-gilroy-bold">
            Будущее центров
            оптовой торговли
        </h3>
        <p className="font-gilroy-medium">
            Таргетирование усиливает конструктивный креатив. Узнавание бренда переворачивает фирменный охват аудитории
        </p>
        <button type="button" className="font-gilroy-bold">выбрать помещение</button>

        <NewMobileFooter leftDisabled={false} color="#fff" leftLink="/" rightLink="/about"/>
    </div>
    );
};

export default NewWelcomeMobile;