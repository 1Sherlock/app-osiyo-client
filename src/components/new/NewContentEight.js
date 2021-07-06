import React from 'react';

const NewContentEight = () => {
    return (
        <div className="new-content new-content-eight">

            <div className="sub-content">
                <h1 className="font-gilroy-bold animate-text">
                    Наши неоспоримые
                    преимущества
                </h1>

                <div className="sub-content-childs">
                    <div className="childs">
                        <span className="flex-shrink-0">
                            <img src="./icons/bag.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">

                            <h3 className="font-gilroy-medium animate-text">
                                Универсальность
                            </h3>
                            <p className="font-gilroy-light animate-text animate-text-1">«OSIYO» создает все условия для
                                успешной торговли и максимально удовлетворит потребности клиентов. </p>
                        </div>

                    </div>


                    <div className="childs">
                        <span className="flex-shrink-0">
                            <img src="/icons/geo.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">

                            <h3 className="font-gilroy-medium animate-text">
                                Доступность
                            </h3>
                            <p className="font-gilroy-light animate-text animate-text-1">
                                Благодаря своему расположению, «OSIYO» является связующим
                                пунктом для торговых путей Узбекистана, Таджикистана,
                                Казахстана и Кыргызстана. </p>
                        </div>

                    </div>


                    <div className="childs">
                        <span className="flex-shrink-0">
                            <img src="/icons/location.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">
                            <h3 className="font-gilroy-medium animate-text">
                                Локализация
                            </h3>
                            <p className="font-gilroy-light animate-text animate-text-1">
                                Все объекты будут расположены с учётом их грамотного взаимодействия между собой и для
                                удобства наших посетителей.</p>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default NewContentEight;
