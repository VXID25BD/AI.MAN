!function(){"use strict";const e=["RILLCUY","TRUKAHH","ASELII","KOCKGMG","MDITURU"];new Swiper(".tabs-our-technologies",{pagination:{el:".pagination-tabs-our-technologies",type:"bullets",clickable:!0,bulletClass:"pagination-tabs-our-technologies-item",bulletActiveClass:"_active",renderBullet:function(s,t){return`<span class=${t}>${e[s]}</span>`}}}),new Swiper(".slider-things-we-support",{slidesPerView:4.5,navigation:{nextEl:".slider-things-we-support-button-next",prevEl:".slider-things-we-support-button-prev",disabledClass:"_disabled"}}),new Swiper(".slider-what-they-say",{navigation:{nextEl:".slider-what-they-say-button-next",prevEl:".slider-what-they-say-button-prev",disabledClass:"_disabled"}}),new Swiper(".slider-supported-by-upper",{slidesPerView:5,centeredSlides:!0,centeredSlidesBounds:!0}),new Swiper(".slider-supported-by-lower",{slidesPerView:5,centeredSlides:!0,centeredSlidesBounds:!0}),new class{#e;#s;#t;constructor(e,s){this.#e=document.querySelector(e),this.#s=s,this.#i()}#i(){this.#t=document.querySelector(".menu__icon"),this.bindEventListeners()}bindEventListeners(){this.clickHandler=this.clickHandler.bind(this),this.#t.addEventListener("click",this.clickHandler)}get isOpen(){return this.#e.classList.contains("_open")}clickHandler(e){this.isOpen?this.close():this.open()}open(){this.#t.classList.add("_open"),this.#e.classList.add("_open"),document.body.classList.add("_lock")}close(){this.#t.classList.remove("_open"),this.#e.classList.remove("_open"),document.body.classList.remove("_lock")}}(".menu",{})}();