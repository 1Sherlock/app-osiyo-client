import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewContactsMobileOne = () => {
    return (
        <div className="new-mobile contacts-mobile-one">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile-white.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>

            <img src="/newimages/rightLine.png" className="right-line"/>
            <div className="sub-content">
                <div className="left-eleven-content">
                    <h1 className="font-gilroy-bold ">
                        Выберите <br/> свой формат
                    </h1>
                    <p className="font-gilroy-light  -1">Благодаря своим впечатляющим размерам, на территории центра
                        располагается большое количество объектов, создающих условия для будущих владельцев помещений,
                        арендаторов и клиентов. Кроме того, «OSIYO» может вместить более 400.000 человек
                        одновременно.</p>
                </div>
                <div className="right-img-group">
                    <div className='right-img-group-child'>
                        <img src="/newimages/mobCon3.png"/>
                        <img src="/newimages/mobCon.png"/>

                    </div>
                    <img src="/newimages/mobCon2.png"/>
                </div>
            </div>

            <NewMobileFooter leftDisabled={false} color="#fff" leftLink="/" rightLink="/about"/>

        </div>
    );
};

export default NewContactsMobileOne;