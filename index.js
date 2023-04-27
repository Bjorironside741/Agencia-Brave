function menuShow(){
  let menuMobile = document.querySelector('.menu-mobile')
  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open')
    document.querySelector('.icon').src = "/menu_FILL0_wght400_GRAD0_opsz48.png"
  } else{
    menuMobile.classList.add('open')
    document.querySelector('.icon').src = "/close_FILL0_wght400_GRAD0_opsz48.png"
  }
}