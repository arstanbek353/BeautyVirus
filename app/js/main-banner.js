export default function () {
  const sectionNodes = document.querySelectorAll('.main-banner')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.main-banner__slider')
    const pagNode = element.querySelector('.main-banner__pag')
    const prevNode = element.querySelector('.main-banner__prev')
    const nextNode = element.querySelector('.main-banner__next')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 1,
      loop: true,
      effect: 'fade',
      loopedSlides: 4,
      autoplay: {
        delay: delay,
      },
      pagination: {
        el: pagNode,
        type: "fraction",
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' / ' +
                   '<span class="' + totalClass + '"></span>';
        }
      },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}