export default function () {
  const sectionNodes = document.querySelectorAll('.main-prods')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.main-prods__slider')
    const pagNode = element.querySelector('.main-prods__pag')
    const prevNode = element.querySelector('.main-prods__prev')
    const nextNode = element.querySelector('.main-prods__next')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 'auto',
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}