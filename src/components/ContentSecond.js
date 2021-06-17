/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';

const ContentSecond = () => {
    return (
        <div className="content-second">
            <h3 className="font-mazzard-semi-bold">Osiyo Ways</h3>
            <p className="">Все пути ведут в Osiyo</p>
            <div className="content-second-view d-flex">
                <div className="content-second-view-item">
                    <img src="/images/items/item1.png" alt="" data-aos="flip-left" data-aos-duration="2000"/>
                    <h4 className="font-montserrat-medium">Путь <br/> открытия</h4>
                    <p>о проекте</p>
                </div>
                <div className="content-second-view-item">
                    <img src="/images/items/item2.png" alt=""/>
                    <h4 className="font-montserrat-medium">Путь <br/> соединения</h4>
                    <p>локация</p>
                </div>
                <div className="content-second-view-item">
                    <img src="/images/items/item3.png" alt=""/>
                    <h4 className="font-montserrat-medium">Путь <br/> торговли</h4>
                    <p>магазины</p>
                </div>
                <div className="content-second-view-item">
                    <img src="/images/items/item4.png" alt=""/>
                    <h4 className="font-montserrat-medium">Путь <br/> прекрасного</h4>
                    <p>благоустройство</p>
                </div>
                <div className="content-second-view-item">
                    <img src="/images/items/item5.png" alt=""/>
                    <h4 className="font-montserrat-medium">Путь <br/> умиротворения
                    </h4>
                    <p>сервис</p>
                </div>
            </div>
        </div>
    );
};

export default ContentSecond;