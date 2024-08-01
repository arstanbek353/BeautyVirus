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

  const sectionNodes2 = document.querySelectorAll('.main-dis2__left')
  sectionNodes2.forEach(element => {
    const sliderNode = element.querySelector('.main-dis2__slider')
    const pagNode = element.querySelector('.main-dis2__pag')
    const prevNode = element.querySelector('.main-dis2__prev')
    const nextNode = element.querySelector('.main-dis2__next')
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

  const sectionNodes3 = document.querySelectorAll('.main-dis2__right')
  sectionNodes3.forEach(element => {
    const sliderNode = element.querySelector('.main-dis2__slider')
    const pagNode = element.querySelector('.main-dis2__pag')
    const prevNode = element.querySelector('.main-dis2__prev')
    const nextNode = element.querySelector('.main-dis2__next')
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