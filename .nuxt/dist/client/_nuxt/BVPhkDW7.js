import{_ as g,a as v,b as p}from"./Bdy_QrQV.js";import{s as _,o,c as l,a as i,F as m,y as M,v as f,d as c,t as r,b as a}from"./Ai3seqkF.js";import{u as x}from"./CHFo5LtD.js";import"./CThbjus8.js";const O=t=>{let e=0,n=0;return t||(t=window.event),t.pageX||t.pageY?(e=t.pageX,n=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:n}};class D{constructor(e){this.DOM={el:e},this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.reveal.innerHTML=`<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`,this.DOM.el.appendChild(this.DOM.reveal),this.DOM.revealInner=this.DOM.reveal.querySelector(".hover-reveal__inner"),this.DOM.revealInner.style.overflow="hidden",this.DOM.revealImg=this.DOM.revealInner.querySelector(".hover-reveal__img"),this.initEvents()}initEvents(){this.positionElement=e=>{const n=O(e),s={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop};this.DOM.reveal.style.top=`${n.y+20-s.top}px`,this.DOM.reveal.style.left=`${n.x+20-s.left}px`},this.mouseenterFn=e=>{this.positionElement(e),this.showImage()},this.mousemoveFn=e=>requestAnimationFrame(()=>{this.positionElement(e)}),this.mouseleaveFn=()=>{this.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}showImage(){TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:()=>{this.DOM.reveal.style.opacity=1,TweenMax.set(this.DOM.el,{zIndex:1e3})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.2,{ease:Sine.easeOut,startAt:{x:"-100%"},x:"0%"}),"begin").add(new TweenMax(this.DOM.revealImg,.2,{ease:Sine.easeOut,startAt:{x:"100%"},x:"0%"}),"begin")}hideImage(){TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:()=>{TweenMax.set(this.DOM.el,{zIndex:999})},onComplete:()=>{TweenMax.set(this.DOM.el,{zIndex:""}),TweenMax.set(this.DOM.reveal,{opacity:0})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.2,{ease:Sine.easeOut,x:"100%"}),"begin").add(new TweenMax(this.DOM.revealImg,.2,{ease:Sine.easeOut,x:"-100%"}),"begin")}}const w=[{id:1,image:"/assets/imgs/works/full/1.jpg",link:"/project1",number:"01",category:"Digital Design",title:"Retouch Photo"},{id:2,image:"/assets/imgs/works/full/2.jpg",link:"/project2",number:"02",category:"Branding",title:"Earthmade Aroma"},{id:3,image:"/assets/imgs/works/full/3.jpg",link:"/project3",number:"03",category:"Branding",title:"Bank Rebranding"},{id:4,image:"/assets/imgs/works/full/4.jpg",link:"/project4",number:"04",category:"Product Design",title:"The joy of music"},{id:5,image:"/assets/imgs/works/full/5.jpg",link:"/project1",number:"05",category:"Product Design",title:"Blue Adobe MAX"},{id:6,image:"/assets/imgs/works/full/6.jpg",link:"/project2",number:"06",category:"Product Design",title:"Carved Wood"},{id:7,image:"/assets/imgs/works/full/8.jpg",link:"/project3",number:"07",category:"Product Design",title:"Blom Air Purifier"}],b={class:"interactive-inline d-flex align-items-end"},y={class:"container"},k=["href","data-img"],I={class:"cont"},T={class:"mb-10 text-u"},E=i("span",{class:"ml-10 mr-10"},"/",-1),j={class:"f-bold"},S={__name:"InteractiveInline",setup(t){return _(()=>{[...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(e=>new D(e))}),(e,n)=>(o(),l("section",b,[i("div",y,[(o(!0),l(m,null,M(f(w),s=>(o(),l("div",{key:s.id,class:"item block","data-fx":"1"},[i("a",{href:s.link,class:"block__link animsition-link","data-img":s.image},null,8,k),i("div",I,[i("span",T,[c(r(s.number),1),E,c(r(s.category),1)]),i("h4",j,r(s.title),1)])]))),128))])]))}},B={__name:"interactive-inline",setup(t){return x({titleTemplate:"%s - Portfolio Interactive Inline",bodyAttrs:{class:"main-bg"},link:[{rel:"stylesheet",href:"/assets/css/base.css"}]}),(e,n)=>{const s=g,d=v,u=p,h=S;return o(),l(m,null,[a(s),a(d),a(u),a(h)],64)}}};export{B as default};