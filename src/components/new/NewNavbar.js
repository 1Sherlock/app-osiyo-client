/**
 * Created by Sherlock on 29.06.2021.
 */

import React from 'react';

const NewNavbar = (props) => {
    const {scroll, count, setScroll} = props;
    const condition = (scroll <= 0 && scroll >= -count * 0.5) || (scroll <= -count * 2.9 && scroll >= -count * 5.5) || (scroll <= -count * 6.9 && scroll >= - count * 18);
    return (
        <div className={`new-navbar d-flex justify-content-between ${condition ? '' : 'theme'}`}>
            <a href="#">
                {condition ? <img src="/newimages/logo.svg" alt="logo.svg" className="logo"/> : <img src="/newimages/logo-white.svg" alt="logo.svg" className="logo"/>}
            </a>
            <ul className="menus">
                <li><a href="#" className="font-gilroy-bold" onClick={() => setScroll(6)}>Локация</a></li>
                <li><a href="#" className="font-gilroy-bold" onClick={() => setScroll(1)}>Об объекте</a></li>
                <li><a href="#" className="font-gilroy-bold" onClick={() => setScroll(7)}>Магазины</a></li>
                <li><a href="#" className="font-gilroy-bold" onClick={() => setScroll(9)}>Сервис</a></li>
                <li><a href="#" className="font-gilroy-bold" onClick={() => setScroll(10)}>Контакты</a></li>
            </ul>

            <div className="d-flex">
                {scroll <= -count * 0.5 ?  <button type="button" className="select">
                    выбрать помещение
                </button> : ""}
                <a href="tel:0698" className={`d-flex align-items-center phone font-gilroy-extra-bold ${scroll <= -count * 0.5 ? 'theme' : ""}`}>
                    <span className="icon icon-phone"/> {scroll <= -count * 0.5 ? "" : "0698"}
                </a>
            </div>
        </div>
    );
};

export default NewNavbar;