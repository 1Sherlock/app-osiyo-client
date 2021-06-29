/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentNine = () => {
    return (
        <div className="content-nine content-third">
            <div className="line-one" />
            <div className="line-two d-flex">
                <div className="content-third-left ">
                    <div>
                        {/*<p>OSIYO WAY №1</p>*/}
                        <h3 className="font-mazzard-regular animate-text">Магазины</h3>
                    </div>
                </div>
                <div className="content-third-right">
                    <p className="animate-text animate-text-3">
                        Просторные помещения и современный дизайн дают <br/> новый толчок в торговле для развития вашего бизнеса. <br/> Панорамные окна создают ясность и открытость. <br/><br/>

                        То, что так важно в современном бизнесе. Создавайте <br/> интерьер как только пожелаете.
                    </p>
                </div>
            </div>
            <div className="line-three" />

        </div>
    );
};

export default ContentNine;