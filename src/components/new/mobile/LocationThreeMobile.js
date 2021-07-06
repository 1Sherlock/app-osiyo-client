import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const LocationThreeMobile = () => {
    return (
        <div className="new-mobile location-three-mobile">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>

            <div className="sub-content">
                <img src="/newimages/mob8Img.png"  className="location-three-mobile"/>

                <img src="/newimages/rightLine.png"   className="rightLine"/>
                <h1 className="font-gilroy-bold  ">
                    Наши неоспоримые
                    преимущества
                </h1>


                <div className="sub-content-childs">
                    <div className="childs">
                        <span className="flex-shrink-0">
                            <img src="./icons/bag.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">

                            <h3 className="font-gilroy-medium  ">
                                Универсальность
                            </h3>
                            <p className="font-gilroy-light    ">
                                «OSIYO» создает все условия для успешной торговли и максимально удовлетворит потребности
                                клиентов.
                            </p>
                        </div>

                    </div>


                    <div className="childs">
                        <span className="flex-shrink-0">
                            <img src="/icons/geo.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">

                            <h3 className="font-gilroy-medium  ">
                                Доступность
                            </h3>
                            <p className="font-gilroy-light    ">
                                Благодаря своему расположению, «OSIYO» является связующим пунктом для торговых путей
                                Узбекистана, Таджикистана, Казахстана и Кыргызстана.
                            </p>
                        </div>

                    </div>


                    <div className="childs">
                        <span className="flex-shrink-0">
                            <img src="/icons/location.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">
                            <h3 className="font-gilroy-medium  ">
                                Локализация
                            </h3>
                            <p className="font-gilroy-light    ">Все объекты будут расположены с учётом их грамотного
                                взаимодействия между собой и для удобства наших посетителей.</p>
                        </div>

                    </div>


                </div>
            </div>
            <NewMobileFooter leftDisabled={false} position="static" pl="0" leftLink="/welcome"/>

        </div>
    );
};

export default LocationThreeMobile;