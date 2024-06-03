export default function () {
  const sectionNodes = document.querySelectorAll('.main-dis')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.main-dis__slider')
    const pagNode = element.querySelector('.main-dis__pag')
    const prevNode = element.querySelector('.main-dis__prev')
    const nextNode = element.querySelector('.main-dis__next')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 1,
      pagination: {
        el: pagNode,
        type: 'bullets',
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}