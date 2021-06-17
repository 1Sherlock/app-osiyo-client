/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentTen = () => {
    return (
        <div className="content-ten justify-content-between">
            <div className="content-ten-left d-flex align-items-center ">
                <div>
                    <h3 className="font-mazzard-semi-bold" data-aos="fade-up">Выберите <br/> свой формат</h3>
                    <p>Наши неоспоримые преимущества</p>
                    <a href="#" className="font-montserrat-medium d-flex align-items-center">ВЫБРАТЬ МАГАЗИН <span className="icon icon-right"/></a>
                </div>
            </div>
            <div className="content-ten-right d-flex justify-content-between">
                <div>
                    <span>01</span>
                    <h4 className="font-mazzard-semi-bold">Здесь зарождается торговля</h4>
                    <p>На территории объекта будут расположены кафе, рестораны и другие точки общепита, обеспечивающие клиентам возможность подкрепить свои силы для дальнейшего времяпровождения в центре оптовой торговли «Osiyo»</p>
                </div>
                <div>
                    <img src="/images/shop-img.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ContentTen;