import React from 'react';

const NewContentEight = () => {
    return (
        <div className="new-content new-content-eight">

            <div className="sub-content">
                <h1 className="font-gilroy-bold">
                    Наши неоспоримые преимущества
                </h1>

                <div className="sub-content-childs">
                    <div className="childs">
                        <span>
                            <img src="./icons/bag.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">

                        <h3 className="font-gilroy-medium">
                                Универсальность
                            </h3>
                            <p className="font-gilroy-light">
                                «OSIYO» создает все условия для успешной торговли и максимально <br/> удовлетворит потребности клиентов.
                            </p>
                        </div>

                    </div>



                    <div className="childs">
                        <span>
                            <img src="/icons/geo.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">

                        <h3 className="font-gilroy-medium">
                                Универсальность
                            </h3>
                            <p className="font-gilroy-light">
                                Благодаря своему расположению, «OSIYO» является связующим <br/>
                                пунктом  для торговых путей Узбекистана, Таджикистана, <br/>
                                Казахстана и Кыргызстана.</p>
                        </div>

                    </div>


                    <div className="childs">
                        <span>
                            <img src="/icons/location.svg" alt=""/>
                        </span>

                        <div className="childs-right-content">
                            <h3 className="font-gilroy-medium">
                                Универсальность
                            </h3>
                            <p className="font-gilroy-light">
                                Все объекты будут расположены  с учётом их грамотного <br/>
                                взаимодействия между собой и для удобства наших посетителей.</p>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default NewContentEight;
