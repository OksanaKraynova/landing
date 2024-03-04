const tabsBtn = document.querySelectorAll('.tabs-btn ')
const tabsItem = document.querySelectorAll('.tabs-item ')
const link = document.querySelector('.header-dropdown ')
const dropdown = document.querySelector('.dropdown ')
const burger = document.querySelector('.header-burger ')
const submenu = document.querySelector('.submenu ')
const filter = document.querySelector('.filter ')
const closeMenu = document.querySelector('.close-submenu ')
const menu = document.querySelector('.header-mobile ')
const closeHeader = document.querySelector('.header-close ')

tabsBtn.forEach((btn,i) => {
    btn.addEventListener('click', () => {
        tabsBtn.forEach(el => el.classList.remove('active'));
        btn.classList.add('active')
         tabsItem.forEach(item => item.classList.remove('active'))
    tabsItem[i].classList.add('active')
    })
   
})

link.addEventListener('click',(e)=> {
    e.preventDefault()
    dropdown.classList.toggle('active')
})

burger.addEventListener('click',()=>   menu.classList.add('active'))

filter.addEventListener('click',()=>  submenu.classList.add('active'))

closeHeader.addEventListener('click',()=> menu.classList.remove('active'))

closeMenu.addEventListener('click',()=> submenu.classList.remove('active'))

