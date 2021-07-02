import React from 'react';

const NewFooter = (props) => {
    const {scroll, count, setScroll} = props;
    const condition = (scroll <= 0 && scroll >= -count * 0.5) || (scroll <= -count * 2.9 && scroll >= -count * 5.5) || (scroll <= -count * 6.9 && scroll >= - count * 18);
    return (
        <div className="d-flex align-items-center new-footer">
            <div className="new-mobile-footer-left">
                <img src="/newimages/home-img-2.png" alt="img.png"/>
                <div className="new-mobile-footer-icon">
                    <span className="icon icon-play"/>
                </div>
            </div>
            <div>
                <h4 className={`${condition ? 'theme' : ''}`}>Ход <br/> строительства</h4>
                <span className="font-gilroy-bold">Прямой эфир </span>
            </div>
        </div>
    );
};

export default NewFooter;