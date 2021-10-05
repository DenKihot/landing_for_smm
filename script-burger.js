$(document).ready(function(){
  let burger = document.querySelector('.main-window__burger')
  let select = document.querySelector('.main-window__select')
  let cross = document.querySelector('.main-window__cross')


  burger.addEventListener('click',() => {
    select.style.display = 'flex'
    setTimeout(() => {
          select.style.width = '100%'
          select.style.opacity = 1
    }, 0);

  })

  cross.addEventListener('click',() => {
    select.style.width = '0%'
    select.style.opacity = 0
    setTimeout(() => {
          select.style.display = 'none'
    },200);
  })
    
});
