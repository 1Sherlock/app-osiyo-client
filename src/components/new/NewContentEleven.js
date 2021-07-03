import React from 'react';

const NewContentEleven = () => {
    return (
        <div className="new-content new-content-eleven">
            <div className="sub-content">
                <div className="left-eleven-content">
                    <h1 className="font-gilroy-bold animate-text">
                        Выберите <br/> свой формат
                    </h1>
                    <p className="font-gilroy-light animate-text animate-text-1">
                        Широкий охват ассортимента дают возможность каждому покупателю найти то, что необходимо именно ему. Более того, круглосуточный режим работы позволяет сделать это в любое удобное время. Центр оптовой торговли OSIYO будет разделён на 5 основных сегментов для удобства каждой из сторон.
                    </p>
                </div>
                <div className="right-img-group">
                    <img src="/images/pairLeft.png"  className='right-img-group-child'/>
                    <div  className='right-img-group-child'>
                        <img src="/images/pairTop.png" alt=""/>
                        <img src="/images/pairBottom.png" alt=""/>

                    </div>
                    <img src="/images/pairRight.png"  className='right-img-group-child'/>
                </div>
            </div>

        </div>
    );
};

export default NewContentEleven;
