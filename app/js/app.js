
import mainBanner from '~/app/js/main-banner.js'
import mainProds from '~/app/js/main-prods.js'
import mainDis from '~/app/js/main-dis.js'
import address from '~/app/js/address.js'

document.addEventListener('DOMContentLoaded', () => {
  mainBanner()
  mainProds()
  mainDis()
  address()
  

  document.querySelector(".header__burger").addEventListener('click', () => {
    document.querySelector(".header__nav").classList.toggle("active")
  })
  document.querySelector(".header__close").addEventListener('click', () => {
    document.querySelector(".header__nav").classList.toggle("active")
  })
})
