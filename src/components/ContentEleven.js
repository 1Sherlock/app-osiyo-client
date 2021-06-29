/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentEleven = () => {
    return (
        <div className="content-eleven d-flex align-items-center">
            <div>
                <h3 className="font-mazzard-bold animate-text">Наши преимущества</h3>

                <div className="content-eleven-items d-flex">
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-sale"/>
                        </div>
                        <p className="animate-text animate-text-1">Удобная инфраструктура <br/>  и понятная навигация <br/> на объекте.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-shipping"/>
                        </div>
                        <p className="animate-text animate-text-2">Продуманная логистика <br/>  для удобства покупателей <br/>  и владельцев.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-settings"/>
                        </div>
                        <p className="animate-text animate-text-3">Инновационный подход <br/>
                            ко многим задачам для <br/> современного рынка.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-group"/>
                        </div> 
                        <p className="animate-text animate-text-4">Превосходный сервис <br/>
                            и обученный персонал.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-hours"/>
                        </div>
                        <p className="animate-text animate-text-5">Контактная поддержка 24/7 <br/>  и своевременное решение <br/> вопросов.</p>
                    </div>
                    <div className="content-eleven-item d-flex align-items-center">
                        <div className="eleven-icon">
                            <span className="icon icon-secure"/>
                        </div>
                        <p className="animate-text animate-text-6">Безопасность хранения <br/> товаров как в магазинах, так <br/>  и на складских зонах.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentEleven;