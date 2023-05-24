window.addEventListener("load", function () {
    // 라이브 슬라이더
    let liveData;
    const liveXhttp = new XMLHttpRequest();
    liveXhttp.onreadystatechange = function (e) {
        let req = e.target;
        if (req.readyState === XMLHttpRequest.DONE) {
            liveData = JSON.parse(req.response);
            makeLiveSlide();
        }
    };
    liveXhttp.open("GET", "data/livedata.json");
    liveXhttp.send();
    function makeLiveSlide() {
        let swLiveHtml = ``;
        for (let i = 0; i < liveData.live_count; i++) {
            let obj = liveData[`live_${i + 1}`];
            let temp = `
    <div class="swiper-slide">
                                <a href="${obj.link}" class="live-link">
                                    <div class="live-img">
                                        <img src="images/${obj.pic}" alt="${obj.alt}" />
                                    </div>
                                    <div class="live-info">
                                        <div class="live-info-top">
                                            <span class="live-info-cate"${obj.category ? "style=display:ineline-block" : "style=display:none"}>${obj.category}</span>
                                            <p class="live-info-title">${obj.title}</p>
                                        </div>
                                        <div class="live-info-main">
                                            <p class="live-info-date">${obj.date}</p>
                                            <p class="live-info-time">${obj.time}</p>
                                        </div>
                                        <div class="live-info-bottom clearfix">
                                            <div class="live-info-thumb" ${obj.thumbImg ? "style=display:ineline-block" : "style=display:none"}>
                                                <img src="images/${obj.thumbImg}" alt="${obj.thumbAlt}" />
                                            </div>
                                            <div class="live-info-desc">
                                                <p class="live-info-desc-title">${obj.descTitle}</p>
                                                <p class="live-info-desc-price"${obj.ratio ? "style=display:ineline-block" : "style=display:none"}><em>${obj.ratio}%</em> <b>${obj.price}</b>원</p>
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
});
