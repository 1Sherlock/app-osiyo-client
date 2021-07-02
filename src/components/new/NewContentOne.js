/**
 * Created by Sherlock on 29.06.2021.
 */

import React from 'react';

const NewContentOne = () => {
    return (
        <div className="new-content new-content-one">
            <div className="new-content-one-content">
                <h3 className="font-gilroy-bold" data-aos="fade-up" data-aos-duration="2000">Будущее центров <br/>
                    оптовой торговли</h3>

                <p className="font-gilroy-medium" data-aos="fade-right" data-aos-duration="2000">
                    Таргетирование усиливает конструктивный <br/> креатив. Узнавание бренда переворачивает <br/> фирменный охват аудитории
                </p>

                <div className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="2000">
                    <button type="button" className="font-gilroy-bold" >выбрать помещение </button>
                    <div className="d-flex align-items-center ">
                        <div className="play-item">
                            <img src="/newimages/home-img-2.png" alt="home-img-2.png"/>
                            <div className="play-item-content">
                                <span className="icon icon-play"/>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-gilroy-bold">Ход <br/> строительства</h4>
                            <h6 className="font-gilroy-bold">Прямой эфир </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewContentOne;