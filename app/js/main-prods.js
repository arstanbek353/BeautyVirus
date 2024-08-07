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
  const sectionNodes2 = document.querySelectorAll('.main-prods-num')
  sectionNodes2.forEach(element => {
    const sliderNode = element.querySelector('.main-prods-num__slider')
    const pagNode = element.querySelector('.main-prods-num__pag')
    const prevNode = element.querySelector('.main-prods-num__prev')
    const nextNode = element.querySelector('.main-prods-num__next')
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