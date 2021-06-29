/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';

const ContentThird = () => {
    return (
        <div className="content-third">
            <div className="line-one" />
            <div className="line-two d-flex">
                <div className="content-third-left ">
                    <div>
                        {/*<p>OSIYO WAY №1</p>*/}
                        <h3 className="font-mazzard-regular animate-text">Об объекте</h3>
                    </div>
                </div>
                <div className="content-third-right">
                    <p className="animate-text">
                        OSIYO - это новый, современный центр оптовой торговли для вашего бизнеса. Благодаря своим впечатляющим размерам, на территории центра располагается большое количество объектов, создающих условия для будущих владельцев помещений, арендаторов и клиентов.
                    </p>
                </div>
            </div>
            <div className="line-three" />


        </div>
    );
};

export default ContentThird;