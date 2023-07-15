'use strict'
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:false,
    dots: true,
    touchDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
const TabBtns = document.querySelectorAll('.tab-btn')
const Tabs = document.querySelectorAll('.tabs')
for (let i = 0; i < TabBtns.length; i++) {
  TabBtns[i].addEventListener('click', function() {
    TabBtns.forEach(btn => btn.classList.remove('active'))
    Tabs.forEach(tab => tab.classList.add('hide'))
    TabBtns[i].classList.add('active')
    Tabs[i].classList.remove('hide')
  })
}

