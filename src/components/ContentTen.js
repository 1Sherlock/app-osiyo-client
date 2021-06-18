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
                    <h4 className="font-mazzard-semi-bold">Вместительность</h4>
                    <p>Благодаря своим впечатляющим размерам, на территории центра располагается большое количество объектов, создающих условия для будущих владельцев помещений, арендаторов и клиентов. Кроме того, «OSIYO» может вместить более 400.000 человек одновременно.</p>
                </div>
                <div>
                    <img src="/images/shop-img.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ContentTen;