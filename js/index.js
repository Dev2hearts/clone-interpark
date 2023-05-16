// html, css, js, image, font, video...
// 사용되는 리소스가 모두 로드가 완료되고 나서 형
// js 를 실행하여야 정상적인 처리가 가능하다.

window.onload = function () {
    // 위로 이동하기
    // .gotop 을 js에 저장하자.
    const goTop = document.querySelector(".gotop");
    // goTop 클릭을 처리한다.
    // goTop.addEventListener("click", function () {
    //   // 위로 슬라이등 코드
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // });

    // anime.js
    const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
    goTop.addEventListener("click", function () {
        anime({
            targets: scrollElement,
            scrollTop: 0,
            duration: 500,
            easing: "easeInOutQuad",
        });
    });
    // <!-- Initialize Swiper -->

    // 2번. json 데이터로 뽑아보기
    // 1번. 백틱을 이용한 html 생성
    // .sw-promotion 에 출력할 html 생성
    // for 문을 이용한 데이터 html 구성
    // json 형태의 데이터가 전달
    // pordata.json 을 불러와서 배치한다.
    let data;
    const proXhttp = new XMLHttpRequest();
    proXhttp.onreadystatechange = function (ew) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            // console.log(req.response);
            // 현재 전달된 문자들언 json 이 아닙니다.
            // req.response 는 데이터 타입이 문자열 입니다.
            // 문자열을 json 객체로 변경하는 작업을 해야 함.
            data = JSON.parse(req.response);
            makePromotionslide();
        }
    };
    proXhttp.open("GET", "prodata.json");
    proXhttp.send();

    function makePromotionslide() {
        let swPromotionHtml = ``;
        for (let i = 0; i < data.good_count; i++) {
            let obj = data[`good_${i + 1}`];
            let html = `
        <div class="swiper-slide">
            <a href="${obj.link}">
                <img src="images/${obj.img}" alt="${obj.name}"
            </a>
        </div>`;
            swPromotionHtml += html;
        }

        // 위의 백틱 내용을 넣어줄 장소를 저장
        let swPromotionWrapper = document.querySelector(".sw-promotion .swiper-wrapper");
        swPromotionWrapper.innerHTML = swPromotionHtml;

        let promotionSwiper = new Swiper(".sw-promotion", {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".promotion .sw-next",
                prevEl: ".promotion .sw-prev",
            },
            pagination: {
                el: ".sw-promotion-pg",
                clickable: true,
            },
            breakpoints: {
                760: {
                    slidesPerView: 2,
                },
            },
        });
    }

    // <!-- Shopping Swiper -->
    let shoppingData;
    const shopXhttp = new XMLHttpRequest();
    shopXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            shoppingData = JSON.parse(req.response);
            makeShoppingSlide();
        }
    };
    shopXhttp.open("GET", "shoppingdata.json");
    shopXhttp.send();
    function makeShoppingSlide() {
        let swShoppingHtml = ``;
        for (let i = 0; i < shoppingData.good_count; i++) {
            let obj = shoppingData[`good_${i + 1}`];
            let temp = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="good">
              <img src="images/${obj.pic}" alt="${obj.product}" />
              <div class="good-info">
                <ul class="good-info-list">
                  <li>
                    <b><span>${obj.ratio}%</span> ${obj.price}원</b>
                  </li>
                  <li><p>${obj.product}</p></li>
                </ul>
              </div>
            </a>
          </div>
        `;
            swShoppingHtml += temp;
        }

        let swShoppingWrapper = document.querySelector(".sw-shopping .swiper-wrapper");
        swShoppingWrapper.innerHTML = swShoppingHtml;

        let shoppingSwiper = new Swiper(".sw-shopping", {
            slidesPerView: 5,
            grid: {
                rows: 2,
                fill: "row",
            },
            spaceBetween: 10,
            navigation: {
                nextEl: ".shopping .sw-next",
                prevEl: ".shopping .sw-prev",
            },
            breakpoints: {
                1024: {
                    spaceBetween: 32,
                    slidesPerView: 3,
                    // 화면당 3개씩 슬라이드 이동
                    slidesPerGroup: 3,
                    grid: {
                        rows: 1,
                    },
                },
                1280: {
                    spaceBetween: 26,
                    slidesPerView: 4,
                    // 화면당 4개씩 슬라이드 이동
                    slidesPerGroup: 4,
                    grid: {
                        rows: 1,
                    },
                },
            },
        });
    }

    let tourData;
    const tourXhttp = new XMLHttpRequest();
    tourXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            tourData = JSON.parse(req.response);
            makeTourSlide();
        }
    };
    tourXhttp.open("GET", "tourdata.json");
    tourXhttp.send();
    function makeTourSlide() {
        let swTourHtml = ``;
        for (let i = 0; i < tourData.tour_total; i++) {
            let obj = tourData[`tour_${i + 1}`];
            let temp = `
            <div class="swiper-slide">
              <a href="${obj.link}" class="tour-link">
                <div class="tour-img">
                  <img src="images/${obj.pic}" alt="${obj.alt}" />
                </div>
                <div class="tour-info">
                  <ul class="tour-info-list">
                <li ${obj.category ? "style=display:block" : "style=display:none"}><span class="tour-cate">${obj.category}</span></li>
                <li>
                      <span class="tour-title">${obj.title}</span>
                    </li>
                    <li>
                      <span class="tour-place">${obj.place}</span>
                    </li>
                    <li>
                      <span class="tour-price"><b>${obj.price}</b>원~</span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
            `;
            swTourHtml += temp;
        }

        let swTourWrapper = document.querySelector(".sw-tour .swiper-wrapper");
        swTourWrapper.innerHTML = swTourHtml;

        let tourSwiper = new Swiper(".sw-tour", {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: "row",
            },
            spaceBetween: 10,
            navigation: {
                nextEl: ".tour .sw-next",
                prevEl: ".tour .sw-prev",
            },
            breakpoints: {
                1024: {
                    spaceBetween: 32,
                    slidesPerView: 2,
                    // 화면당 2개씩 슬라이드 이동
                    slidesPerGroup: 2,
                    grid: {
                        rows: 1,
                    },
                },
                1280: {
                    spaceBetween: 26,
                    slidesPerView: 3,
                    // 화면당 4개씩 슬라이드 이동
                    slidesPerGroup: 3,
                    grid: {
                        rows: 1,
                    },
                },
            },
        });
    }

    let ticketData;
    const ticketXhttp = new XMLHttpRequest();
    ticketXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            ticketData = JSON.parse(req.response);
            makeTicketSlide();
        }
    };
    ticketXhttp.open("GET", "ticketdata.json");
    ticketXhttp.send();
    function makeTicketSlide() {
        let swTicketHtml = ``;
        for (let i = 0; i < ticketData.totalCount; i++) {
            let obj = ticketData[`good_${i + 1}`];
            let temp = `
        <div class="swiper-slide">
        <a href="${obj.link}" class="ticket-link">
            <div class="ticket-img">
                <img src="images/${obj.pic}" alt="${obj.product}" />
                <span class="ticket-rank">${obj.rank}</span>
            </div>
            <div class="ticket-info">
                <ul class="ticket-info-list">
                    <li>
                        <span class="ticket-title"><b>${obj.product}</b></span>
                    </li>
                    <li>
                        <span class="ticket-hall">${obj.hall}</span>
                    </li>
                    <li>
                        <span class="ticket-date">${obj.date}</span>
                    </li>
                    <li ${obj.sale ? "style=display:block" : "style=display:none"}><span class="ticket-sale">${obj.sale}</span></li>
                </ul>
            </div>
        </a>
    </div>`;
            swTicketHtml += temp;
        }

        let swTicketWrapper = document.querySelector(".sw-ticket .swiper-wrapper");
        swTicketWrapper.innerHTML = swTicketHtml;

        let ticketSwiper = new Swiper(".sw-ticket", {
            slidesPerView: "auto",
            spaceBetween: 10,
            navigation: {
                nextEl: ".ticket .sw-next",
                prevEl: ".ticket .sw-prev",
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 27,
                },
            },
        });
    }

    let liveData;
    const liveXhttp = new XMLHttpRequest();
    liveXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            liveData = JSON.parse(req.response);
            makeLiveSlide();
        }
    };
    liveXhttp.open("GET", "livedata.json");
    liveXhttp.send();
    function makeLiveSlide() {
        let swLiveHtml = ``;
        for (let i = 0; i < liveData.totalCount; i++) {
            let obj = liveData[`good_${i + 1}`];
            let temp = `
        <div class="swiper-slide">
                                    <a href="${obj.link}" class="live-link">
                                        <div class="live-img">
                                            <img src="images/${obj.pic}" alt="${obj.lat}" />
                                        </div>
                                        <div class="live-info">
                                            <div class="live-info-top">
                                                <span class="live-info-cate"${obj.cate ? "style=display:ineline-block" : "style=display:none"}>${obj.cate}</span>
                                                <p class="live-info-title">${obj.title}</p>
                                            </div>
                                            <div class="live-info-main">
                                                <p class="live-info-date">${obj.date}</p>
                                                <p class="live-info-time">${obj.time}</p>
                                            </div>
                                            <div class="live-info-bottom clearfix">
                                                <div class="live-info-thumb">
                                                    <img src="images/${obj.pic}" alt="${obj.alt}" />
                                                </div>
                                                <div class="live-info-desc">
                                                    <p class="live-info-desc-title">${obj.descTitle}</p>
                                                    <p class="live-info-desc-price"><em>${obj.discount}%</em> <b>${obj.price}</b>원</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
        `;
            swLiveHtml += temp;
        }
        let swLiveWrapper = document.querySelector(".sw-live .swiper-wrapper");
        swLiveWrapper.innerHTML = swLiveHtml;

        let liveSwiper = new Swiper(".sw-live", {
            slidesPerView: 4,
            spaceBetween: 10,
            navigation: {
                nextEl: ".live .sw-next",
                prevEl: ".live .sw-prev",
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 27,
                },
            },
        });
    }

    let booksData;
    const booksXhttp = new XMLHttpRequest();
    booksXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            booksData = JSON.parse(req.response);
            makeBooksSlide();
        }
    };
    booksXhttp.open("GET", "booksdata.json");
    booksXhttp.send();
    function makeBooksSlide() {
        let swBooksHtml = ``;
        for (let i = 0; i < booksData.totalCount; i++) {
            let obj = booksData[`good_${i + 1}`];
            let temp = `<div class="swiper-slide">
            <a href="${obj.link}" class="books-link">
                <div class="books-img">
                    <img src="images/${obj.pic}" alt="${obj.alt}" />
                </div>
                <div class="books-info">
                    <p class="books-info-title">${obj.title}</p>
                    <p class="books-info-price"><em>${obj.price}</em>원</p>
                </div>
            </a>
        </div>`;
            swBooksHtml += temp;
        }

        let swBooksWrapper = document.querySelector(".sw-books .swiper-wrapper");
        swBooksWrapper.innerHTML = swBooksHtml;
        let booksSwiper = new Swiper(".sw-books", {
            slidesPerView: 3,
            grid: {
                rows: 4,
                fill: "row",
            },
            spaceBetween: 19,
            navigation: {
                nextEl: ".books .sw-next",
                prevEl: ".books .sw-prev",
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                    grid: {
                        rows: 1,
                    },
                },
                1280: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 27,
                    grid: {
                        rows: 1,
                    },
                },
            },
        });
    }

    let eventsData;
    const eventsXhttp = new XMLHttpRequest();
    eventsXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            eventsData = JSON.parse(req.response);
            makeEventsSlide();
        }
    };
    eventsXhttp.open("GET", "eventsdata.json");
    eventsXhttp.send();
    function makeEventsSlide() {
        let swEventsHtml = ``;
        for (let i = 0; i < eventsData.totalCount; i++) {
            let obj = eventsData[`good_${i + 1}`];
            let temp = `
        <div class="swiper-slide">
                                    <a href="${obj.link}" class="events-link">
                                        <img src="images/${obj.pic}" alt="${obj.alt}" />
                                    </a>
                                </div>
        `;
            swEventsHtml += temp;
        }
        let swEventsWrapper = document.querySelector(".sw-events .swiper-wrapper");
        swEventsWrapper.innerHTML = swEventsHtml;
        let eventsSwiper = new Swiper(".sw-events", {
            slidesPerView: 3,
            spaceBetween: 27,
            navigation: {
                nextEl: ".event .sw-next",
                prevEl: ".event .sw-prev",
            },
            breakpoints: {
                1280: {
                    slidesPerView: 4,
                },
            },
        });
    }
};
