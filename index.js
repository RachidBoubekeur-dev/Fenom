const iconBurger = document.querySelector('.iconBurger');
const barNavigation = document.querySelector('.barNavigation');
const iconClose = document.querySelector('.iconClose');

const slide = document.querySelector('#slide');
const slideImg = document.querySelector('#slide > img');

let slideNumber = 1;
const imgSrc = 'ressources/img/img-chaussure-';
const imgType = '.jpg';
const imgAlt = 'chaussure';

const slideScroll = document.querySelector('#slideScroll');
const scrollRight = document.querySelector('#scrollRight');
const scrollLeft = document.querySelector('#scrollLeft');

const footerNav1 = document.querySelector('#footerNav1');
const footerNav2 = document.querySelector('#footerNav2');
const footerNav3 = document.querySelector('#footerNav3');

const arrayEvent = ['click', 'keypress'];

arrayEvent.forEach(element => {
    iconBurger.addEventListener(element, () => {
        barNavigation.style.left = 0;
    });

    iconClose.addEventListener(element, () => {
        barNavigation.style.left = '-100%';
    });

    slide.addEventListener(element, () => {
        if (slide.className !== 'slide4') nextImg('next');
        else nextImg('previous');
    });

    if (screen.width <= 1023) {
        scrollRight.addEventListener(element, () => {
            if (slideScroll.style.width !== '277%') {
                switch (slideScroll.style.width) {
                    case '95%':
                        slideScroll.style.width = '138%'
                        scrollLeft.style.opacity = 1;
                        break;
                    case '138%':
                        slideScroll.style.width = '206%'
                        break;
                    case '206%':
                        slideScroll.style.width = '277%'
                        scrollRight.style.opacity = 0.6;
                        break;
                    default:
                        break;
                }
            }
        });

        scrollLeft.addEventListener(element, () => {
            if (slideScroll.style.width !== '95%') {
                switch (slideScroll.style.width) {
                    case '138%':
                        slideScroll.style.width = '95%'
                        scrollLeft.style.opacity = 0.6;
                        break;
                    case '206%':
                        slideScroll.style.width = '138%'
                        break;
                    case '277%':
                        slideScroll.style.width = '206%'
                        scrollRight.style.opacity = 1;
                        break;
                    default:
                        break;
                }
            }
        });
    } else {
        slideScroll.style.width = '86.5%';
        scrollRight.addEventListener(element, () => {
            if (slideScroll.style.width !== '153.5%') {
                switch (slideScroll.style.width) {
                    case '86.5%':
                        slideScroll.style.left = '-14.5%';
                        slideScroll.style.width = '114.5%';
                        scrollLeft.style.opacity = 1;
                        break;
                    case '114.5%':
                        slideScroll.style.left = '-53.5%';
                        slideScroll.style.width = '153.5%';
                        scrollRight.style.opacity = 0.6;
                        break;
                    default:
                        break;
                }
            }
        });

        scrollLeft.addEventListener(element, () => {
            if (slideScroll.style.width !== '86.5%') {
                switch (slideScroll.style.width) {
                    case '114.5%':
                        slideScroll.style.left = '13.5%';
                        slideScroll.style.width = '86.5%';
                        scrollLeft.style.opacity = 0.6;
                        break;
                    case '153.5%':
                        slideScroll.style.left = '-14.5%';
                        slideScroll.style.width = '114.5%';
                        scrollRight.style.opacity = 1;
                        break;
                    default:
                        break;
                }
            }
        });
    }

    footerNav1.querySelector('img').addEventListener(element, () => {
        footerNav(footerNav1, '90px');
    });

    footerNav2.querySelector('img').addEventListener(element, () => {
        footerNav(footerNav2, '173px');
    });

    footerNav3.querySelector('img').addEventListener(element, () => {
        footerNav(footerNav3, '90px');
    });
});

/**
 * nextImg - go to the next image or to the previous image
 * @param  {String} action next or previous
 */
const nextImg = (action) => {
    if (action === 'next') slideNumber++;
    else slideNumber = '1';
    slideImg.src = `${imgSrc}${slideNumber}${imgType}`;
    slideImg.alt = `${imgAlt} ${slideNumber}`;
    slide.className = `slide${slideNumber}`;
    if (slideNumber === '1') {
        document.querySelector(`#slideActive > hr:nth-of-type(4)`).style.background = '#999999';
        document.querySelector(`#slideActive > hr:nth-of-type(1)`).style.background = 'black';
    } else {
        document.querySelector(`#slideActive > hr:nth-of-type(${slideNumber - 1})`).style.background = '#999999';
        document.querySelector(`#slideActive > hr:nth-of-type(${slideNumber})`).style.background = 'black';
    }

};

/**
 * footerNav - manipulate the style of the received element
 * @param  {String} element element to handle
 * @param  {String} height height to be applied to the element
 */
const footerNav = (element, height) => {
    if (element.querySelector('img').style.transform !== 'rotate(180deg)')
    {
        element.querySelector('img').style.transform = 'rotate(180deg)';
        element.querySelector('ul').style.height = height;
        element.querySelector('ul').style.padding = '1em 0 0 1em';
    } else {
        element.querySelector('img').style.transform = 'rotate(0deg)';
        element.querySelector('ul').style.height = 0;
        element.querySelector('ul').style.padding = 0;
    }
};
