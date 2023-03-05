const menu = document.querySelector('#menu')

menu.addEventListener('click',()=>{
  const container = document.querySelector('.container')
  if(menu.classList.contains('fa-bars')){
    menu.classList.remove('fa-bars')
    menu.classList.add('fa-xmark')

    container.classList.remove('active')
    container.classList.add('active')
    return
  }   
    menu.classList.add('fa-bars')
    menu.classList.remove('fa-xmark')

    container.classList.add('active')
    container.classList.remove('active')
})
