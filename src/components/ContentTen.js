/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentTen = (props) => {
    return (
        <div className="content-ten justify-content-between">
            <div className="content-ten-left d-flex align-items-center ">
                <div>
                    <h3 className="font-mazzard-semi-bold animate-text">Выберите <br/> свой формат</h3>
                    <p className="animate-text animate-text-2">Наши неоспоримые преимущества</p>
                    {/*<a href="#" className="font-montserrat-medium d-flex align-items-center">ВЫБРАТЬ МАГАЗИН <span className="icon icon-right"/></a>*/}
                    <button type="button" className="font-mazzard-bold animate-text animate-text-3">ВЫБРАТЬ МАГАЗИН</button>
                </div>
            </div>
            <div className="content-ten-right d-flex justify-content-between">
                <div>
                    <span className="animate-text">01</span>
                    <h4 className="font-mazzard-semi-bold animate-text animate-text-2">Вместительность</h4>
                    <p className="animate-text animate-text-3">Благодаря своим впечатляющим размерам, на территории центра располагается большое количество объектов, создающих условия для будущих владельцев помещений, арендаторов и клиентов. <br/><br/> Кроме того, «OSIYO» может вместить более 400.000 человек одновременно.</p>
                </div>
                <div>
                    <div className="img-wrap">
                       <div className="img">
                           <img src="/images/shop-img.png" style={{transform: `translateX(${props.scrollWidth/150 + 124}%)`}} alt=""/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentTen;