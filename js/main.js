// comment slider
let swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".comment-button-next",
        prevEl: ".comment-button-prev",
    },
    breakpoints: {
        993: {
            slidesPerView: 2,
        },
    },
});
// comment slider

// partner slider
let swiper2 = new Swiper(".partnerSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".partner-button-next",
        prevEl: ".partner-button-prev",
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
          },
        993: {
            slidesPerView: 3,
          },
    }
});
// partner slider

// clients slider
let swiper3 = new Swiper(".clientsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".clients-button-next",
        prevEl: ".clients-button-prev",
    },
    breakpoints: {
        577: {
            slidesPerView: 4,
          },
        769: {
            slidesPerView: 5,
          },
        993: {
            slidesPerView: 6,
          },
        1201: {
          slidesPerView: 7,
        },
      },
});
// clients slider

// accardion
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
// accardion

// Range slider
let rangeInp = document.querySelectorAll('.range_inp');

if (rangeInp.length) {
    rangeInp.forEach(el => {
        let inp = el.querySelector('input[type="range"]');
        let line = el.querySelector('.range_inp__slide_line');
        let spn = el.querySelector('.range_inp__slide span');
        let maxVal = Number(el.querySelector('input[type="range"]').getAttribute('max'));

        spn.textContent = inp.value;
        line.style.width = 100 * inp.value / maxVal + '%';
        spn.style.left = 100 * inp.value / maxVal + '%';

        inp.oninput = () => {
            spn.textContent = inp.value;
            line.style.width = 100 * inp.value / maxVal + '%';
            spn.style.left = 100 * inp.value / maxVal + '%';
        }

        spn.addEventListener('mousedown', mouseDown);

        function mouseDown (e) {
            e.preventDefault();
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
        }

        function mouseMove (e) {
            let block = el.getBoundingClientRect();
            if (e.clientX > block.left && e.clientX < block.left + block.width) {
                const elClientX = el.getBoundingClientRect().left;
                const clientX = e.clientX - elClientX;
                let val = clientX * 100 / el.getBoundingClientRect().width;
                inp.value = maxVal * val / 100;
                line.style.width = val + '%';
                spn.style.left = val + '%';
                spn.textContent = inp.value;
            }
        }

        function mouseUp (e) {
            e.preventDefault();
            document.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseup", mouseUp);
        }

        spn.addEventListener('touchstart', onTouchStart);

        function onTouchStart (e) {
            e.preventDefault();
            spn.addEventListener("touchmove", onTouchMove);
            spn.addEventListener("touchend", onTouchEnd);
        }

        function onTouchMove (e) {
            let block = el.getBoundingClientRect();
            if (e.touches[0].clientX > block.left && e.touches[0].clientX < block.left + block.width) {
                const elClientX = block.left;
                const clientX = e.touches[0].clientX - elClientX;
                let val = clientX * 100 / block.width;
                inp.value = maxVal * val / 100;
                line.style.width = val + '%';
                spn.style.left = val + '%';
                spn.textContent = inp.value;
            }
        }

        function onTouchEnd (e) {
            e.preventDefault();
            spn.removeEventListener("touchmove", onTouchMove);
            spn.removeEventListener("touchend", onTouchEnd);
        }


    })
}
// Range slider end

let quizSlider = new Swiper('.modal_quiz .swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'fade',
})

let quizSelect = document.querySelectorAll('.modal_quiz__select_card');
if (quizSelect.length) {
    quizSelect.forEach(item => {
        item.onclick = () => {
            quizSelect.forEach(el => {
                if (item == el) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

let priceSelect = document.querySelectorAll('.modal_quiz__prices_card');
if (priceSelect.length) {
    priceSelect.forEach(item => {
        item.onclick = () => {
            priceSelect.forEach(el => {
                if (el == item) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active')
                }
            })
        }
    })
}

let mainModal = document.querySelectorAll('.main_modal'),
    quizModal = document.querySelector('.modal_quiz'),
    quizModalOpen = document.querySelectorAll('.modal_quiz__open'),
    modalClose = document.querySelectorAll('.main_modal__bg');

quizModalOpen.forEach(el => {
    el.onclick = e => {
        e.preventDefault();
        quizModal.classList.add('active');
        document.body.style.overflow = 'hidden'
    }
})

function allModalclose() {
    document.body.style.overflow = 'visible'
    mainModal.forEach(modal => {
        modal.classList.remove('active');
    })
}

modalClose.forEach(el => {
    el.onclick = () => {
        allModalclose();
    }
})

let quizPrevBtn = document.querySelectorAll('.modal_quiz .btn-gray');
quizPrevBtn.forEach((el, idx) => {
    el.onclick = () => {
        if (idx == 0) {
            allModalclose();
        } else {
            quizSlider.slidePrev();
        }
    }
})

let quizNextBtn = document.querySelectorAll('.modal_quiz .btn-red');
quizNextBtn.forEach((el, idx) => {
    el.onclick = () => {
        if (idx == quizNextBtn.length - 1) {
            allModalclose();
        } else {
            quizSlider.slideNext();
        }
    }
})

let menuSlider = new Swiper('.menu .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    mousewheel: true,
})
let menu = document.querySelector('.menu')

function toggleMenu() {
    if (window.scrollY > 300) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active');
    }
}

toggleMenu();

window.addEventListener('scroll', function () {
    toggleMenu();
})

let cocktailList = document.querySelectorAll('.cocktail__card'),
    cocktailShowMore = document.querySelector('.cocktail .btn-red'),
    cocktailLength = 10;

function sortCocktailList() {
    cocktailList.forEach((el, idx) => {
        if (idx + 1 <= cocktailLength) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    })
}

sortCocktailList();

cocktailShowMore.onclick = e => {
    e.preventDefault();
    cocktailLength += 5;
    sortCocktailList();
}

let orderSwiper = new Swiper('.modal_order .swiper', {
    slidesPerView: 1,
    // initialSlide: 1,
    effect: 'fade',
    allowTouchMove: false,
})

let orderModal = document.querySelector('.modal_order'),
    orderModalOpen = document.querySelectorAll('.modal_order__open'),
    orderModalPrev = document.querySelector('.modal_order .btn-gray'),
    orderModalNext = document.querySelectorAll('.modal_order .btn-red');

if (orderModal) {
    orderModalOpen.forEach(el => {
        el.onclick = e => {
            e.preventDefault();
            orderModal.classList.add('active')
        }
    })

    orderModalPrev.onclick = () => {
        allModalclose();
    }

    orderModalNext.forEach((el, idx) => {
        el.onclick = () => {
            if (idx == orderModalNext.length - 1) {
                allModalclose();
            } else {
                orderSwiper.slideNext();
            }
        }
    })
}

var init = false;
var swiper4;
function swiperCard() {
    if (window.innerWidth <= 1399) {
        if (!init) {
            init = true;
            swiper4 = new Swiper(".cocktail .swiper", {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                },
                spaceBetween: 10,
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        grid: {
                            rows: 2,
                        },
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        grid: {
                            rows: 2,
                        },
                    },
                    767: {
                        spaceBetween: 20,
                        grid: {
                            rows: 2,
                        },
                    }
                },
                navigation: {
                    nextEl: ".cocktail .swp_btn__next",
                    prevEl: ".cocktail .swp_btn__prev"
                }
            });
        }
    } else if (init) {
        swiper4.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

let tel = document.querySelectorAll('input[type="tel"]')
if (tel.length) {
    tel.forEach(i => {
        IMask(i, { mask: '+{7} (000) 000-00-00' });
    })
}

const cocktailCards = document.querySelectorAll('.cocktail__card');
if (cocktailCards.length) {
    cocktailCards.forEach(card => {
        let calculate = card.querySelector('.card__calculate'),
            minusBtn = card.querySelectorAll('.card__calculate button')[0],
            plusBtn = card.querySelectorAll('.card__calculate button')[1],
            text = card.querySelector('.card__calculate span');
        calculate.onclick = e => {
            e.stopImmediatePropagation();
        }

        minusBtn.onclick = e => {
            if (text.textContent != 0) {
                text.textContent = Number(text.textContent) - 1;
            }
        }

        plusBtn.onclick = e => {
            text.textContent = Number(text.textContent) + 1;
        }
    })
}