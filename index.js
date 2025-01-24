import{a as h,i as p,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const y=(t,s)=>{const r={params:{key:"48264002-554f1b79d0a5e107f7aa1f349",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}};return h.get("https://pixabay.com/api/",r)},f=t=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${t.webformatURL}">
    <img class="gallery-img"
    src="${t.largeImageURL}" 
    alt="${t.tags}" 
    loading="lazy" />
    <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${t.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${t.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${t.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${t.downloads}</span>
  </div>
</div>
    </a>
    </li>`,g=document.querySelector(".js-search-form");document.querySelector(".search-btn");const m=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let c=1,l="",u;i.style.display="none";const L=async t=>{try{if(i.style.display="block",t.preventDefault(),l=t.currentTarget.elements.user_query.value.trim(),l===""){i.style.display="none",p.warning({message:"Please enter a search term.",position:"topRight"});return}c=1,n.classList.add("is-hidden");const s=await y(l,c);if(i.style.display="none",s.data.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.innerHTML="",g.reset();return}s.data.totalHits>1&&(n.classList.remove("is-hidden"),n.addEventListener("click",b));const r=s.data.hits.map(o=>f(o)).join("");m.innerHTML=r,n.classList.remove("is-hidden"),u=new v(".gallery a",{captionsData:"alt",captionDelay:300}),u.refresh()}catch(s){i.style.display="none",p.error({title:"Error",message:"Something went wrong, please try again later",position:"topRight"}),console.log(s)}};g.addEventListener("submit",L);const b=async t=>{try{c++;const r=(await y(l,c)).data.hits.map(o=>f(o)).join("");m.insertAdjacentHTML("beforeend",r),u.refresh()}catch(s){console.log(s)}};
//# sourceMappingURL=index.js.map
