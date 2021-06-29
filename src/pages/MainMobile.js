/**
 * Created by Sherlock on 23.06.2021.
 */

import React, {useState} from 'react';

const MainMobile = () => {
    const [open, setOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);

    return (
        <div className="mobile">
            <div className="home">
                <div>
                    <div className="navbar-mobile d-flex align-items-center justify-content-between">
                        <img src="/icons/logo-mobile.svg" alt=""/>
                        <span className="icon icon-menu" onClick={() => setOpen(true)}/>
                    </div>

                    <div className="construction-process d-flex align-items-center font-mazzard-medium">
                        <div className="construction-icon">
                            <span className="icon icon-play"/>
                        </div>
                        Ход строительства <br/> в прямом эфире
                    </div>

                    <h3 className="font-mazzard-semi-bold">
                        Будущее центров
                        оптовой торговли <br/>
                        и современных <br/>
                        решений
                    </h3>

                    <p>
                        Мы рады представить <br/>
                        вам проект «OSIYO»
                    </p>
                </div>

                <div>
                    <div className="wrap">
                        <button type="button" className="font-mazzard-semi-bold">ПОСМОТРЕТЬ ГЕНПЛАН</button>
                    </div>
                    <div className="link-wrap">
                        <a href="#" className="font-mazzard-semi-bold">Скачать презентацию</a>
                    </div>
                    <div className="scroll-mobile d-flex align-items-center">
                        <span className="icon icon-mouse"/> скролл
                    </div>
                </div>

            </div>
            <div className="about">
                <div>
                    <h3 className="font-mazzard-semi-bold">
                        О проекте
                    </h3>
                    <p>
                        Для успешного ведения любого бизнеса очень важна развитость инфраструктуры и создание
                        благоприятных для Ваших
                        клиентов условий. «Osiyo» позаботился и об этом.
                    </p>
                </div>
            </div>
            <div className="torg">
                <div>
                    <span>01</span>
                    <h3 className="font-mazzard-medium">
                        Здесь зарождается <br/>
                        торговля
                    </h3>
                    <p>
                        На территории объекта будут расположены кафе, рестораны
                        и другие точки общепита, обеспечивающие клиентам возможность подкрепить свои силы для
                        дальнейшего времяпровождения
                        в центре оптовой торговли «Osiyo»
                    </p>
                </div>
                <div>
                    <img src="/images/torg-img-mobile.png" alt=""/>
                </div>
            </div>
            <div className="features">
                <h3 className="font-mazzard-semi-bold">
                    Наши <br/>
                    преимущества
                </h3>

                <div>
                    <div className="features-item d-flex align-items-center">
                        <div className="features-item-icon">
                            <span className="icon icon-sale"/>
                        </div>
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </div>
                    <div className="features-item d-flex align-items-center">
                        <div className="features-item-icon">
                            <span className="icon icon-shipping"/>
                        </div>
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </div>
                    <div className="features-item d-flex align-items-center">
                        <div className="features-item-icon">
                            <span className="icon icon-settings"/>
                        </div>
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </div>
                    <div className="features-item d-flex align-items-center">
                        <div className="features-item-icon">
                            <span className="icon icon-group"/>
                        </div>
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </div>
                    <div className="features-item d-flex align-items-center">
                        <div className="features-item-icon">
                            <span className="icon icon-hours"/>
                        </div>
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </div>
                    <div className="features-item d-flex align-items-center">
                        <div className="features-item-icon">
                            <span className="icon icon-secure"/>
                        </div>
                        Удобная инфраструктура
                        и понятная навигация
                        на объекте.
                    </div>
                </div>
            </div>
            <div className="its">
                <h3 className="font-mazzard-semi-bold">
                    OSIYO - это:
                </h3>
                <div className="its-item">
                    <h1 className="font-montserrat-extra-light">247</h1>
                    <p>торговых повильонов</p>
                </div>
                <div className="its-item">
                    <h1 className="font-montserrat-extra-light">9000+</h1>
                    <p>парковочных мест</p>
                </div>
                <div className="its-item">
                    <h1 className="font-montserrat-extra-light">8</h1>
                    <p>таможеных складов</p>
                </div>
                <div className="its-item">
                    <h1 className="font-montserrat-extra-light">88</h1>
                    <p>складских помещений</p>
                </div>
            </div>
            <div className={`swipe-menu ${open ? 'active' : ''}`}>
                <div>
                    <div className="navbar-mobile d-flex align-items-center justify-content-between">
                        <img src="/icons/logo-mobile.svg" alt=""/>
                        <span className="icon icon-line" onClick={() => setOpen(false)}/>
                    </div>

                    <div className="info d-flex justify-content-between align-items-center">
                        <a href="tel:0698" className="font-montserrat-bold d-flex align-items-center">
                            <span className="icon icon-phone"/>
                            0698
                        </a>
                        <p className="font-mazzard-semi-bold">RU</p>
                    </div>
                </div>

                <ul>
                    <li><a href="#">О компании</a></li>
                    <li><a href="#">Локация</a></li>
                    <li><a href="#">Магазины</a></li>
                    <li><a href="#">Администрация и поддержка</a></li>
                    <li><a href="#">Сервис</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>

                <button type="button" className="font-mazzard-semi-bold" onClick={() => {setFormOpen(true); setOpen(false)}}>Оставить заявку на экскурсию</button>

            </div>
            <div className={`swipe-form ${formOpen ? 'active' : ''}`}>
                <span className="icon icon-x" onClick={() => setFormOpen(false)}/>
               <div style={{width: "100%"}}>
                   <h3 className="font-mazzard-semi-bold">Заполните форму ниже</h3>
                   <p>И мы организуем для вас экскурсию</p>
                   <input type="text" placeholder="Ваше имя" className="font-mazzard-regular"/>
                   <input type="text" placeholder="Телефон" className="font-mazzard-regular"/>
                   <button type="button" className="font-mazzard-semi-bold">Оставить заявку на экскурсию</button>
                   <span className="policy">
                    Нажимая кнопку “Отправить” вы соглашаетесь <br/>
                    с <a href="#">политикой конфиденциальности</a>
                </span>
               </div>
            </div>
        </div>
    );
};

export default MainMobile;