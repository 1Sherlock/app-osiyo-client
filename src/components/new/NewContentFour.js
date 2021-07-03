/**
 * Created by Sherlock on 30.06.2021.
 */

import React from 'react';

const NewContentFour = () => {
    return (
        <div className="new-content new-content-four">
            <img src="/newimages/four-img.png" alt=""/>
            <div className="d-flex new-content-four-items">
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left animate-text">
                        <span className="icon icon-map-pin"/>
                    </div>
                    <p className="font-gilroy-medium animate-text">
                        Удобная инфраструктура и понятная навигация на объекте
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left animate-text">
                        <span className="icon icon-car"/>
                    </div>
                    <p className="font-gilroy-medium animate-text">
                        Превосходный сервис и обученный персонал
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left animate-text">
                        <span className="icon icon-amyoba"/>
                    </div>
                    <p className="font-gilroy-medium animate-text">
                        Продуманная логистика для удобства покупателей и клиентов
                    </p>
                </div>
            </div>
            <div className="d-flex new-content-four-items">
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left animate-text">
                        <span className="icon icon-map-pin"/>
                    </div>
                    <p className="font-gilroy-medium animate-text">
                        Контактная поддержка 24/7 и своевременное решение вопросов
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left animate-text">
                        <span className="icon icon-car"/>
                    </div>
                    <p className="font-gilroy-medium animate-text">
                        Инновационный подход ко многим задачам
                    </p>
                </div>
                <div className="new-content-four-item">
                    <div className="new-content-four-item-left animate-text">
                        <span className="icon icon-amyoba"/>
                    </div>
                    <p className="font-gilroy-medium animate-text">
                        Безопасность хранения товаров в торговых точках и на складских зонах
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewContentFour;