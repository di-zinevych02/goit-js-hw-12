import{a as h,i as l,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const m=(s,e)=>{const r={params:{key:"48264002-554f1b79d0a5e107f7aa1f349",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return h.get("https://pixabay.com/api/",r)},f=s=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${s.webformatURL}">
    <img class="gallery-img"
    src="${s.largeImageURL}" 
    alt="${s.tags}" 
    loading="lazy" />
    <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${s.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${s.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${s.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${s.downloads}</span>
  </div>
</div>
    </a>
    </li>`,g=document.querySelector(".js-search-form");document.querySelector(".search-btn");const y=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-more-btn");let c=1,p="",u;const b=15;n.style.display="none";i.style.display="none";const L=async s=>{if(n.style.display="block",s.preventDefault(),p=s.currentTarget.elements.user_query.value.trim(),p===""){n.style.display="none",l.warning({message:"Please enter a search term.",position:"topRight"});return}c=1,i.style.display="none";try{const{data:e}=await m(p,c);if(e.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y.innerHTML="",g.reset();return}e.totalHits>1&&(i.style.display="block",i.addEventListener("click",w));const r=e.hits.map(o=>f(o)).join("");y.innerHTML=r,i.style.display="block",u=new v(".gallery a",{captionsData:"alt",captionDelay:300}),u.refresh()}catch(e){l.error({title:"Error",message:"Something went wrong, please try again later",position:"topRight"}),console.log(e)}finally{n.style.display="none"}};g.addEventListener("submit",L);const w=async s=>{n.style.display="block",c++;try{const{data:e}=await m(p,c);n.style.display="none";const r=e.hits.map(o=>f(o)).join("");y.insertAdjacentHTML("beforeend",r),u.refresh(),c*b>=e.totalHits&&(l.info({message:"Were sorry, but you've reached the end of search results.",position:"topRight"}),i.style.display="none")}catch{l.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."})}};
//# sourceMappingURL=index.js.map
