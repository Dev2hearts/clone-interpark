/**
 * 작성자 : 박지성
 * 연락처 : 비밀
 * 작성일 : 23-05-22
 * 기능 : 북스 리스트 슬라이드 코드
 * 업데이트 : 각 북스 리스트 목록
 */

window.addEventListener("load", function () {
    // 선택된 출력 리스트 인덱스
    let showIndex = 0;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            let data = JSON.parse(req.response);
            parseBooks(data);
        }
    };
    xhr.open("GET", "data/books.json");
    xhr.send();

    // json data 보관
    let jsondata;
    // 버튼들
    let btns = document.querySelector(".books .btns");
    function parseBooks(_data) {
        jsondata = _data;
        // a 태그 만들기
        let btHtml = ``;
        for (let i = 0; i < _data.books.length; i++) {
            let obj = _data.books[i];
            let temp = `<a href="#">${obj.catename}</a>`;
            btHtml += temp;
        }
        btns.innerHTML = btHtml;

        let aTags = document.querySelectorAll(".books .btns a");
        for (let i = 0; i < _data.books.length; i++) {
            aTags[i].onclick = function (e) {
                e.preventDefault();
                makeList(i);
            };
        }
        makeList(0);
    }
    // 목록 html 만들기
    let booksSwiper;

    function makeList(_idx) {
        let html = ``;
        let listData = jsondata.books[_idx].list;
        let listTotal = listData.length;
        for (let i = 0; i < listTotal; i++) {
            let obj = listData[i];
            let temp = `
            <div class="swiper-slide">
            <a href="${obj.link}" class="books-link">
              <div class="books-img">
                <img src="images/${obj.img}" alt="${obj.alt}" />
              </div>
              <div class="books-info">
                <p class="books-info-title">${obj.title}</p>
                <p class="books-info-price"><em>${obj.price}</em>원</p>
              </div>
            </a>
          </div>
          `;
            html += temp;
        }
        let swWrap = document.querySelector(".sw-books .swiper-wrapper");
        swWrap.innerHTML = html;
        if (booksSwiper) {
            booksSwiper.destroy();
        }
        booksSwiper = new Swiper(".sw-books", {
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
});
