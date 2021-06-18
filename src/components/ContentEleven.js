/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentEleven = () => {
    return (
        <div className="content-eleven d-flex align-items-center">
            <div>
                <h3 className="font-mazzard-semi-bold">Наши преимущества</h3>

                <div className="content-eleven-items d-flex">
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-sale"/>
                        </div>
                        <p>Удобная инфраструктура  и понятная навигация на объекте.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-shipping"/>
                        </div>
                        <p>Продуманная логистика  для удобства покупателей  и владельцев.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-settings"/>
                        </div>
                        <p>Превосходный сервис  и обученный персонал.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-group"/>
                        </div> 
                        <p>Инновационный подход  ко многим задачам для современного рынка.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-hours"/>
                        </div>
                        <p>Контактная поддержка 24/7  и своевременное решение вопросов.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-secure"/>
                        </div>
                        <p>Безопасность хранения товаров как в магазинах, так  и на складских зонах.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentEleven;