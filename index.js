import{a as u,i as n,S as d}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m=t=>{const r=new URLSearchParams({key:"48264002-554f1b79d0a5e107f7aa1f349",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`https://pixabay.com/api/?${r}`)},f=t=>`
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
    </li>`,p=document.querySelector(".js-search-form");document.querySelector(".search-btn");const c=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),y=async t=>{try{l.style.display="block",t.preventDefault();const r=t.currentTarget.elements.user_query.value.trim();if(r===""){l.style.display="none",n.warning({message:"Please enter a search term.",position:"topRight"});return}const a=await m(r);if(a.data.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",p.reset();return}const i=a.data.hits.map(s=>f(s)).join("");c.innerHTML=i,new d(".gallery a",{captionsData:"alt",captionDelay:300}).refresh()}catch{l.style.display="none",n.error({title:"Error",message:"Something went wrong, please try again later",position:"topRight"})}};p.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
