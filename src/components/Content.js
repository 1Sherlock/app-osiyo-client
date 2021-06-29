/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';

const Content = () => {
    return (
        <div className="d-flex content justify-content-between">

            <div className="content-left d-flex align-items-center">
               <div>
                   <h3 className="font-mazzard-bold" data-aos="fade-up" data-aos-duration="2000">Будущее центров
                       оптовой торговли
                       и современных решений</h3>
                   <p data-aos="fade-right" data-aos-duration="2000">Мы рады представить вам проект «OSIYO» </p>
                   <div className="d-flex align-items-center">
                       <button type="button" className="font-mazzard-bold"  data-aos="fade-up" data-aos-duration="2000">ПОСМОТРЕТЬ ГЕНПЛАН</button>
                       <a href="#" className="font-mazzard-bold">Скачать презентацию</a>
                   </div>
                   <div className="construction-process d-flex align-items-center">
                       <div className="construction-icon">
                           <span className="icon icon-play"/>
                       </div>
                       Ход строительства в прямом эфире

                   </div>
               </div>
            </div>
            <div className="content-right d-flex align-items-center">
                <div className="content-right-form" data-aos="flip-left" data-aos-duration="2000">
                    <h3 className="font-mazzard-semi-bold">Заполните форму ниже</h3>
                    <p className="font-mazzard-regular">И мы организуем для вас экскурсию</p>

                    <div className="position-relative">
                        <input type="text" placeholder="Ваше имя" className="font-mazzard-regular"/>
                        {/*<span className="icon icon-user"/>*/}
                    </div>
                    <div className="position-relative">
                        <input type="text" placeholder="Телефон" className="font-mazzard-regular"/>
                        {/*<span className="icon icon-tel"/>*/}
                    </div>
                    <button type="button" className="font-mazzard-bold btn_apply">Оставить заявку</button>
                    <span>Нажимая кнопку “Отправить” вы соглашаетесь <br/> с <a href="#">политикой конфиденциальности</a></span>
                </div>
            </div>
        </div>
    );
};

export default Content;