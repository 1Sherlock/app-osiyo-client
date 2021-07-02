import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewHistoryMobile = () => {
    return (
        <div className="new-mobile history-mobile">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>

            <h3 className="font-gilroy-bold">История</h3>
            <p className="description">
                Проект начали с 2019 года весной организация практического взаимодействия, согласно Ф.Котлеру,
                восстанавливает рекламоноситель, полагаясь
                на инсайдерскую информацию. Общество потребления
            </p>

            <div className="months d-flex">
                <div className="month-item">
                    <p className="font-gilroy-extra-bold animate-text">2021</p>
                    <h5 className="font-gilroy-bold active animate-text">Январь</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Февраль</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Март</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Апрель</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Май</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Июнь</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Июль</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Август</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Сентябрь</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Октябрь</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Ноябрь</h5>
                </div>
                <div className="month-item">
                    <h5 className="font-gilroy-bold animate-text">Декабрь</h5>
                </div>
            </div>

            <img src="/newimages/four-img.png" alt="img.png"/>

            <h4 className="font-gilroy-bold">
                История
            </h4>
            <p>
                Благодаря своим впечатляющим размерам,  на территории центра располагается большое количество объектов, создающих условия  для будущих владельцев помещений,  арендаторов и клиентов.  Кроме того, «OSIYO» может вместить более 400.000 человек одновременно.
            </p>
            <NewMobileFooter lfetLink="/about" rightLink="/" pl="0" position="static"/>
        </div>
    );
};

export default NewHistoryMobile;