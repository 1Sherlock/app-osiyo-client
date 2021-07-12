import React from 'react';
import NewMobileFooter from "./NewMobileFooter";

const NewMainMobile = () => {
    return (
       <>
           <div className="new-mobile main-mobile">
               <div className="new-navbar-mobile d-flex align-items-center justify-content-between">
                   <img src="/icons/menu.svg" alt="menu.svg"/>
                   <img src="/icons/logo-mobile.svg" alt="logo-mobile.svg"/>
                   <a href="tel:0968"><img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/></a>
               </div>

               <h3 className="font-gilroy-bold">
                   Будущее центров
                   оптовой торговли
               </h3>
               <p className="font-gilroy-medium">
                   Таргетирование усиливает конструктивный креатив. Узнавание бренда переворачивает фирменный охват аудитории
               </p>
               <button type="button" className="font-gilroy-bold">выбрать помещение</button>

               {/*<NewMobileFooter leftDisabled={true} rightLink="/welcome"/>*/}
           </div>
           <div className="new-mobile welcome-mobile">

               {/*<div className="new-navbar-mobile d-flex align-items-center justify-content-between">*/}
               {/*    <img src="/icons/menu.svg" alt="menu.svg"/>*/}
               {/*    <img src="/icons/logo-mobile-white.svg" alt="logo-mobile.svg"/>*/}
               {/*    <img src="icons/phone-mobile.svg" alt="phone-mobile.svg"/>*/}
               {/*</div>*/}

             <div>
                 <h3 className="font-gilroy-bold">
                     Будущее центров
                     оптовой торговли
                 </h3>
                 <p className="font-gilroy-medium">
                     Таргетирование усиливает конструктивный креатив. Узнавание бренда переворачивает фирменный охват аудитории
                 </p>
                 <button type="button" className="font-gilroy-bold">выбрать помещение</button>
             </div>

               {/*<NewMobileFooter leftDisabled={false} color="#fff" leftLink="/" rightLink="/about"/>*/}
           </div>
           <div className="new-mobile about-us-one-mobile">
               <img src="/newimages/aboutUsOne.png" className="header-img" alt=""/>
               <div className="  new-content-four-items">
                   <div className="new-content-four-item">
                       <div className="new-content-four-item-left ">
                           <span className="icon icon-map-pin"/>
                       </div>
                       <p className="font-gilroy-medium  ">
                           Удобная инфраструктура и понятная навигация на объекте
                       </p>
                   </div>
                   <div className="new-content-four-item">
                       <div className="new-content-four-item-left  ">
                           <span className="icon icon-car"/>
                       </div>
                       <p className="font-gilroy-medium  ">
                           Превосходный сервис и обученный персонал
                       </p>
                   </div>
                   <div className="new-content-four-item">
                       <div className="new-content-four-item-left  ">
                           <span className="icon icon-amyoba"/>
                       </div>
                       <p className="font-gilroy-medium  ">
                           Продуманная логистика для удобства покупателей и клиентов
                       </p>
                   </div>
               </div>
               <div className="  new-content-four-items">
                   <div className="new-content-four-item">
                       <div className="new-content-four-item-left  ">
                           <span className="icon icon-map-pin"/>
                       </div>
                       <p className="font-gilroy-medium  ">
                           Контактная поддержка 24/7 и своевременное решение вопросов
                       </p>
                   </div>
                   <div className="new-content-four-item">
                       <div className="new-content-four-item-left  ">
                           <span className="icon icon-car"/>
                       </div>
                       <p className="font-gilroy-medium  ">
                           Инновационный подход ко многим задачам
                       </p>
                   </div>
                   <div className="new-content-four-item">
                       <div className="new-content-four-item-left  ">
                           <span className="icon icon-amyoba"/>
                       </div>
                       <p className="font-gilroy-medium  ">
                           Безопасность хранения товаров в торговых точках и на складских зонах
                       </p>
                   </div>
               </div>

               <img src="/newimages/OwalCopy.png" alt="slop.png" className="bottomLine"/>

           </div>
           <div className="new-mobile about-us-two-mobile">
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
           </div>

           <div className="new-mobile history-mobile">

               <h3 className="font-gilroy-bold">История</h3>
               <p className="description">
                   Проект начали с 2019 года весной организация практического взаимодействия, согласно Ф.Котлеру,
                   восстанавливает рекламоноситель, полагаясь
                   на инсайдерскую информацию. Общество потребления
               </p>

               {/*<div className="months d-flex">*/}
               {/*    <div className="month-item">*/}
               {/*        <p className="font-gilroy-extra-bold animate-text">2021</p>*/}
               {/*        <h5 className="font-gilroy-bold active animate-text">Январь</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Февраль</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Март</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Апрель</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Май</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Июнь</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Июль</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Август</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Сентябрь</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Октябрь</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Ноябрь</h5>*/}
               {/*    </div>*/}
               {/*    <div className="month-item">*/}
               {/*        <h5 className="font-gilroy-bold animate-text">Декабрь</h5>*/}
               {/*    </div>*/}
               {/*</div>*/}

               <img src="/newimages/four-img.png" alt="img.png"/>

               <h4 className="font-gilroy-bold">
                   История
               </h4>
               <p className="text">
                   Благодаря своим впечатляющим размерам,  на территории центра располагается большое количество объектов, создающих условия  для будущих владельцев помещений,  арендаторов и клиентов.  Кроме того, «OSIYO» может вместить более 400.000 человек одновременно.
               </p>
           </div>

           <div className="new-mobile location-three-mobile">
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
           </div>
           <div className="new-mobile about-us-three-mobile">
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
           </div>
           <div className="new-mobile contacts-mobile-one">
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
           </div>
           <div className="new-mobile contacts-mobile-two  ">

               <div className="new-content-thirty-left">
                   <h3 className="font-gilroy-bold ">Наши контакты</h3>
                   <p className="">
                       Уважаемые клиенты! Ждем вас в нашем <br/>
                       офисе ежедневно с 9.00 до 21.00 <br/>
                       <br/>
                       ООО «WORLD BARAKA BUSINESS» <br/>
                       Яшнабадский район Ул. Фаргона Йули, <br/>
                       3 проезд, дом 157-а
                   </p>
                   <div className="d-flex">
                       <a href="#" className="social ">
                           <span className="icon icon-telegram-new"/>
                       </a>
                       <a href="#" className="social ">
                           <span className="icon icon-instagram"/>
                       </a>
                       <a href="#" className="social ">
                           <span className="icon icon-facebook"/>
                       </a>
                   </div>
               </div>
               <div className="new-content-thirty-center">
                   <p className="font-gilroy-bold ">Телефон</p>

                   <a href="tel:+998912345678" className="tel font-gilroy-bold mb ">+998 91 123 45 67</a>

                   <p className="font-gilroy-bold ">EMAIL адрес</p>

                   <a href="mailto:info@osiyo.uz" className="tel font-gilroy-bold ">info@osiyo.uz</a>
                   <a href="mailto:marketing@osiyo.uz" className="tel font-gilroy-bold mb ">marketing@osiyo.uz</a>

                   <p className="font-gilroy-bold ">документы</p>

                   <a href="#" className="files font-gilroy-medium ">
                       <span className="icon icon-document"/> Сертификат соответствия.pdf
                   </a>
                   <a href="#" className="files font-gilroy-medium ">
                       <span className="icon icon-document"/> Гувохнома.pdf
                   </a>
               </div>
               <div className="new-content-thirty-right">
                   <h3 className="font-gilroy-bold ">Напишите нам</h3>
                   <p className="">Оставьте свои контакты, и мы с вами <br/>
                       свяжемся в ближайшее время.</p>

                   <input type="text" placeholder="Ваше имя" className=""/>
                   <input type="text" placeholder="+998 " className=""/>
                   <div className=" justify-content-between align-items-center ">
                       <button type="button" className="font-gilroy-bold">Отправить</button>
                       <p className="footer-con">согласие на обработку <br/> персональных данных </p>
                   </div>
               </div>
           </div>
       </>
    );
};

export default NewMainMobile;