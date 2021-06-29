/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentSeven = () => {
    return (
        <div className="content-seven d-flex">
            <div className="content-seven-left d-flex align-items-center">
                <div>
                    <h3 className="font-mazzard-bold animate-text">Расположение</h3>
                    <p className="animate-text animate-text-3">Наши неоспоримые преимущества</p>
                </div>
            </div>
         
            <div className="content-seven-right">
                <div className="d-flex justify-content-between">
                    <div className="content-seven-right-element">
                        <h4 className="font-mazzard-semi-bold animate-text">Универсальность <br/>
                             <span className="icon icon-shopping-bag" /></h4>
                        <p className="animate-text animate-text-3">«OSIYO» создает все условия для успешной торговли и максимально удовлетворит потребности клиентов. Профессиональный подход команды центра оптовой торговли обеспечивает баланс интересов всех сторон – арендаторов и посетителей, что гарантирует ему популярность и высокую доходность. </p>
                    </div>
                    <div className="content-seven-right-element">
                        <h4 className="font-mazzard-semi-bold animate-text">Доступность <br/>
                             <span className="icon icon-location">02</span></h4>
                        <p className="animate-text animate-text-3">Благодаря своему расположению, «OSIYO» является связующим пунктом для торговых путей Узбекистана, Таджикистана, Казахстана и Кыргызстана. Более того, данное место очень удобно для многочисленных жителей южных районов Республики. </p>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="content-seven-right-element">
                        <h4 className="font-mazzard-semi-bold animate-text">Богатство выбора <br/>
                           <span className="icon icon-shopping-cart">03</span></h4>
                        <p className="animate-text animate-text-3">Огромное количество торговых точек с широким охватом типов ассортимента дают возможность каждому покупателю найти то, что необходимо именно ему. Более того, круглосуточный режим работы позволяет сделать это в любое удобное время.</p>
                    </div>
                    <div className="content-seven-right-element">
                        <h4 className="font-mazzard-semi-bold animate-text">Локализация <br/>
                             <span className="icon icon-shoe">04</span></h4>
                        <p className="animate-text animate-text-3">Все объекты будут расположены
                           с учётом их грамотного взаимодействия между собой 
                           и для удобства наших посетителей. Мы учитываем каждую деталь 
                           в инфраструктуре центра.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSeven;