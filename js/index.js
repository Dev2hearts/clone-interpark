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
    let data = {
        good_1: { name: "제품1", img: "promotion1.jpg", link: "#" },
        good_2: { name: "제품2", img: "promotion2.png", link: "#" },
        good_3: { name: "제품3", img: "promotion3.jpg", link: "#" },
        good_4: { name: "제품4", img: "promotion4.jpg", link: "#" },
        good_5: { name: "제품5", img: "promotion5.jpg", link: "#" },
        good_6: { name: "제품6", img: "promotion6.jpg", link: "#" },
    };
    let swPromotionHtml = ``;
    for (let i = 0; i < 6; i++) {
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

    // <!-- Shopping Swiper -->
    let shoppingData = {
        good_count: 5,
        good_1: { link: "#", pic: "good1.png", product: "맥 MAC 립스틱", ratio: 5, price: "11,950" },
        good_2: { link: "#", pic: "good2.jpg", product: "[장터할매]2023년 햇양파 중품/짱아치용 특품 3kg~10kg", ratio: 5, price: "11,950" },
        good_3: { link: "#", pic: "good3.jpg", product: " QCY GTS 스마트워치 2세대 블랙/ 블루투스 통화가능/실리콘 스트랩 메탈 스트랩 TPU 보호필름 추가구매", ratio: 5, price: "11,950" },
        good_4: { link: "#", pic: "good4.jpg", product: "[베베당] 유기농 롱스틱 골고루 10봉 세트", ratio: 5, price: "11,950" },
        good_5: { link: "#", pic: "good4.jpg", product: "[베베당] 유기농 롱스틱 골고루 10봉 세트", ratio: 5, price: "11,950" },
    };
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

    let tourData = {
        tour_total: 4,
        tour_1: {
            link: "#",
            pic: "tour1.jpg",
            alt: "toru",
            category: "반짝특가",
            title: "[미동부/캐나다 10일] 밤 출발 에어프레미아 10일 [퀘벡숙박/3대야경/보스턴]",
            place: "웨스틴 리조트 괌",
            price: "350,300",
        },
        tour_2: {
            link: "#",
            pic: "tour2.jpg",
            alt: "toru",
            category: "",
            title: "[미동부/캐나다 10일] 밤 출발 에어프레미아 10일 [퀘벡숙박/3대야경/보스턴]",
            place: "웨스틴 리조트 괌",
            price: "350,300",
        },
        tour_3: {
            link: "#",
            pic: "tour3.jpg",
            alt: "toru",
            category: "반짝특가",
            title: "[미동부/캐나다 10일] 밤 출발 에어프레미아 10일 [퀘벡숙박/3대야경/보스턴]",
            place: "웨스틴 리조트 괌",
            price: "350,300",
        },
        tour_4: {
            link: "#",
            pic: "tour2.jpg",
            alt: "toru",
            category: "",
            title: "[미동부/캐나다 10일] 밤 출발 에어프레미아 10일 [퀘벡숙박/3대야경/보스턴]",
            place: "웨스틴 리조트 괌",
            price: "350,300",
        },
    };
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
    let swTicketData = {
        totalCount: 5,
        good_1: { link: "#", pic: "musical1.gif", lank: 1, product: "뮤지컬〈영웅〉- 블루스퀘어", hall: "블루스퀘어 신한카드홀", date: "2023.03.17 ~ 2023.05.21", sale: "단독판매" },
        good_2: { link: "#", pic: "musical2.gif", lank: 2, product: "뮤지컬〈영웅〉- 블루스퀘어", hall: "블루스퀘어 신한카드홀", date: "2023.03.17 ~ 2023.05.21", sale: "" },
        good_3: { link: "#", pic: "musical3.gif", lank: 3, product: "뮤지컬〈영웅〉- 블루스퀘어", hall: "블루스퀘어 신한카드홀", date: "2023.03.17 ~ 2023.05.21", sale: "단독판매" },
        good_4: { link: "#", pic: "musical4.gif", lank: 4, product: "뮤지컬〈영웅〉- 블루스퀘어", hall: "블루스퀘어 신한카드홀", date: "2023.03.17 ~ 2023.05.21", sale: "" },
        good_5: { link: "#", pic: "musical1.gif", lank: 5, product: "뮤지컬〈영웅〉- 블루스퀘어", hall: "블루스퀘어 신한카드홀", date: "2023.03.17 ~ 2023.05.21", sale: "단독판매" },
    };
    let swTicketHtml = ``;
    for (let i = 0; i < swTicketData.totalCount; i++) {
        let obj = swTicketData[`good_${i + 1}`];
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
    let swLiveData = {
        totalCount: 7,
        good_1: { link: "#", pic: "live1.jpg", alt: "라이브1", cate: "방송예정", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
        good_2: { link: "#", pic: "live2.jpg", alt: "라이브2", cate: "", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
        good_3: { link: "#", pic: "live3.jpg", alt: "라이브3", cate: "방송예정", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
        good_4: { link: "#", pic: "live4.jpg", alt: "라이브4", cate: "", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
        good_5: { link: "#", pic: "live1.jpg", alt: "라이브5", cate: "방송예정", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
        good_6: { link: "#", pic: "live2.jpg", alt: "라이브6", cate: "", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
        good_7: { link: "#", pic: "live3.jpg", alt: "라이브7", cate: "방송예정", title: "2박 3일로 떠나는 후쿠오카 여행✈ 패키지VS자유여행 다 준비했어요😆", date: "4월 27일 (목요일)", time: "16:00", descTitle: "[미미의밥상] 감자탕 4.7kg(국내산등뼈 100% 10인분)+라면사리", discount: 22, price: "19,840" },
    };
    let swLiveHtml = ``;
    for (let i = 0; i < swLiveData.totalCount; i++) {
        let obj = swLiveData[`good_${i + 1}`];
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
    let swBooksData = {
        totalCount: 10,
        good_1: { link: "#", pic: "book1.jpg", alt: "book1", title: "New 대한민국 청약지도", price: "18,000" },
        good_2: { link: "#", pic: "book2.jpg", alt: "book2", title: "New 대한민국 청약지도", price: "18,000" },
        good_3: { link: "#", pic: "book3.jpg", alt: "book3", title: "New 대한민국 청약지도", price: "18,000" },
        good_4: { link: "#", pic: "book4.jpg", alt: "book4", title: "New 대한민국 청약지도", price: "18,000" },
        good_5: { link: "#", pic: "book5.jpg", alt: "book5", title: "New 대한민국 청약지도", price: "18,000" },
        good_6: { link: "#", pic: "book1.jpg", alt: "book6", title: "New 대한민국 청약지도", price: "18,000" },
        good_7: { link: "#", pic: "book2.jpg", alt: "book7", title: "New 대한민국 청약지도", price: "18,000" },
        good_8: { link: "#", pic: "book3.jpg", alt: "book8", title: "New 대한민국 청약지도", price: "18,000" },
        good_9: { link: "#", pic: "book4.jpg", alt: "book9", title: "New 대한민국 청약지도", price: "18,000" },
        good_10: { link: "#", pic: "book5.jpg", alt: "book10", title: "New 대한민국 청약지도", price: "18,000" },
    };
    let swBooksHtml = ``;
    for (let i = 0; i < swBooksData.totalCount; i++) {
        let obj = swBooksData[`good_${i + 1}`];
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
    let swEventsData = {
        totalCount: 8,
        good_1: { link: "#", pic: "banner1.jpg", alt: "이벤트1" },
        good_2: { link: "#", pic: "banner2.jpg", alt: "이벤트2" },
        good_3: { link: "#", pic: "banner3.jpg", alt: "이벤트3" },
        good_4: { link: "#", pic: "banner4.jpg", alt: "이벤트4" },
        good_5: { link: "#", pic: "banner1.jpg", alt: "이벤트5" },
        good_6: { link: "#", pic: "banner2.jpg", alt: "이벤트6" },
        good_7: { link: "#", pic: "banner3.jpg", alt: "이벤트7" },
        good_8: { link: "#", pic: "banner4.jpg", alt: "이벤트8" },
    };
    let swEventsHtml = ``;
    for (let i = 0; i < swEventsData.totalCount; i++) {
        let obj = swEventsData[`good_${i + 1}`];
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
};
