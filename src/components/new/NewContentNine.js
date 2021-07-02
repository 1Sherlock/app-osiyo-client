import React from 'react';

const NewContentNine = () => {
    return (
        <div className="new-content new-content-nine">
            <img src="/images/longLine.png" alt="" className="longLine"/>
            <img src="/images/shortLine.png" alt="" className="shortLine"/>
            <div className="sub-content">
                <div className="left-child-content">

                    <h1 className="font-gilroy-bold animate-text">Просторные помещения и <br/> современный дизайн</h1>
                    <p className="font-gilroy-light animate-text animate-text-1">Просторные помещения и современный дизайн дают новый толчок в <br/>
                        торговле для развития вашего бизнеса. Панорамные окна создают ясность и <br/> открытость. То, что так
                        важно в современном бизнесе. Создавайте интерьер <br/> как только пожелаете.</p>

                    <div className="sub-content-child">
                        <div className="first-child">
                            <h2 className="font-gilroy-medium animate-text">
                                Повторный контакт
                            </h2>
                            <p className="font-gilroy-light animate-text animate-text-1">
                                Ассортиментная политика <br/>
                                предприятия упорядочивает <br/>
                                потребительский
                            </p>
                        </div>
                        <div className="second-child">
                            <h2 className="font-gilroy-medium animate-text">
                                Концепция маркетинга
                            </h2>
                            <p className="font-gilroy-light animate-text animate-text-1">
                                Экспансия программирует <br/>
                                потребительский рекламный <br/>
                                макет
                            </p>
                        </div>
                    </div>

                </div>


                <div className="right-child-content">
                    <img src="/images/NewContentNineBackgroundImg.png" alt=""/>
                </div>

            </div>
        </div>
    );
};

export default NewContentNine;
