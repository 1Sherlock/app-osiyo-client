import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewAboutUsTwo = () => {
    return (
        <div className="new-mobile about-us-two-mobile">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>
            <div className="sub-content">
                <img src='/newimages/mob4Img.png' className="left-img" />

                <div className="right-content">
                    <h1 className="font-gilroy-medium ">А вот по мнению аналитиков </h1>
                    <p className="font-gilroy-light -1 ">
                        Организация практического взаимодействия, согласно Ф.Котлеру, восстанавливает
                        <br/> рекламоноситель,
                        полагаясь на инсайдерскую информацию. Общество потребления
                        <br/> отталкивает культурный BTL
                    </p>


                    <div className="right-content-numbers">
                        <div className="numbers-child">
                            <h3 className="font-gilroy-bold ">247</h3>
                            <span></span>
                            <p className="font-gilroy-medium  -1">
                                торговых <br/>
                                повильонов
                            </p>
                        </div>

                        <div className="numbers-child">
                            <h3 className="font-gilroy-bold ">9000+</h3>
                            <span></span>
                            <p className="font-gilroy-medium  -1">
                                парковочных <br/>
                                мест
                            </p>
                        </div>
                        <div className="numbers-child">
                            <h3 className="font-gilroy-bold ">8</h3>
                            <span></span>
                            <p className="font-gilroy-medium  -1">
                                таможенных <br/>
                                складов
                            </p>
                        </div>
                        <div className="numbers-child">
                            <h3 className="font-gilroy-bold ">88</h3>
                            <span></span>
                            <p className="font-gilroy-medium  -1">
                                складских <br/>
                                хранилищ
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <NewMobileFooter leftDisabled={true}/>

        </div>
    );
};

export default NewAboutUsTwo;