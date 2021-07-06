import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewAboutUsTwoPairMobile = () => {
    return (
        <div className="new-mobile about-us-three-mobile">
            <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                <img src="/icons/menu.svg" alt="menu.svg"/>
                <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
                <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>
            </div>


            <div className="sub-content">
                <div className="left-child-content">

                    <h1 className="font-gilroy-bold ">Просторные помещения и <br/> современный дизайн</h1>
                    <p className="font-gilroy-light  -1">Просторные помещения и современный дизайн дают новый толчок в <br/>
                        Проект начали с 2019 года весной <br/> организация практического <br/>
                        взаимодействия, согласно Ф.Котлеру,  <br/>
                        восстанавливает рекламоноситель, полагаясь <br/>
                        на инсайдерскую информацию. Общество потребления</p>



                </div>


                <div className="right-child-content">
                    <img src="/images/NewContentNineBackgroundImg.png" alt=""/>
                </div>



                <div className="left-child-content">
                    <div className="sub-content-child">
                        <div className="first-child">
                            <h2 className="font-gilroy-medium ">
                                Повторный контакт
                            </h2>
                            <p className="font-gilroy-light  -1">
                                Ассортиментная политика <br/>
                                предприятия упорядочивает <br/>
                                потребительский
                            </p>
                        </div>
                        <div className="second-child">
                            <h2 className="font-gilroy-medium ">
                                Концепция маркетинга
                            </h2>
                            <p className="font-gilroy-light  -1">
                                Экспансия программирует <br/>
                                потребительский рекламный <br/>
                                макет
                            </p>
                        </div>
                    </div>
                </div>

            </div>




            <NewMobileFooter leftDisabled={false} color="#fff" leftLink="/" rightLink="/about"/>

        </div>
    );
};

export default NewAboutUsTwoPairMobile;