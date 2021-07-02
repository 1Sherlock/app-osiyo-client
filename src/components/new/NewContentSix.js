/**
 * Created by Sherlock on 01.07.2021.
 */

import React from 'react';

const NewContentSix = () => {
    return (
        <div className="new-content new-content-six">
            <img src="/newimages/six-big-line.png" alt="line.png" className="new-content-six-big-line"/>
            <img src="/newimages/six-line.png" alt="line.png" className="new-content-six-line"/>
            <div className="d-flex justify-content-between align-items-end">
                <div>
                    <h3 className="font-gilroy-bold animate-text">История</h3>
                    <p className="content-description animate-text animate-text-1">
                        Проект начали с 2019 года весной организация практического взаимодействия, <br/> согласно Ф.Котлеру, восстанавливает рекламоноситель, полагаясь <br/>
                        на инсайдерскую информацию. Общество потребления
                    </p>
                </div>
                <div>
                    <button type="button" className="arrow-button">
                        <span className="icon icon-arrow-left"/>
                    </button>
                    <button type="button" className="arrow-button">
                        <span className="icon icon-arrow-right"/>
                    </button>
                </div>
            </div>

            <div className="month d-flex">
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


            <div className="info d-flex justify-content-between">
                <div>
                    <h4 className="font-gilroy-bold animate-text">
                        Этап катлована
                    </h4>
                    <p className="animate-text animate-text-1">Благодаря своим впечатляющим размерам,  на территории центра <br/>
                        располагается большое количество объектов, создающих условия  для будущих <br/>
                        владельцев помещений,  арендаторов и клиентов.  Кроме того, «OSIYO» может <br/>
                        вместить более 400.000 человек одновременно.</p>
                </div>
                <div>
                    <img src="/newimages/four-img.png" alt="img.png"/>
                </div>
            </div>
        </div>
    );
};

export default NewContentSix;