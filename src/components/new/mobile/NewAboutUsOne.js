import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewAboutUsOne = () => {
    return (
        <div className="new-mobile about-us-one-mobile">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>


                <img src="/newimages/aboutUsOne.png" className="header-img" alt=""/>
            <div className="  new-content-four-items">
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left ">
                        <span className="icon icon-map-pin"/>
                    </div>
                    <p className="font-gilroy-medium  ">
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left  ">
                        <span className="icon icon-car"/>
                    </div>
                    <p className="font-gilroy-medium  ">
                        Продуманная логистика
                        для удобства покупателей
                        и владельцев.
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left  ">
                        <span className="icon icon-amyoba"/>
                    </div>
                    <p className="font-gilroy-medium  ">
                        Инновационный подход ко многим задачам для современного рынка.
                    </p>
                </div>
            </div>
            <div className="  new-content-four-items">
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left  ">
                        <span className="icon icon-map-pin"/>
                    </div>
                    <p className="font-gilroy-medium  ">
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left  ">
                        <span className="icon icon-car"/>
                    </div>
                    <p className="font-gilroy-medium  ">
                        Продуманная логистика
                        для удобства покупателей
                        и владельцев.
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left  ">
                        <span className="icon icon-amyoba"/>
                    </div>
                    <p className="font-gilroy-medium  ">
                        Инновационный подход ко многим задачам для современного рынка.
                    </p>
                </div>
            </div>


            <img src="/newimages/OwalCopy.png" alt="slop.png" className="bottomLine"/>

            <NewMobileFooter leftDisabled={false} position="static" pl="0" leftLink="/welcome"/>

        </div>
    );
};

export default NewAboutUsOne;