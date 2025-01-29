import{a as L,S as b,i}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const h of t.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();const u=(r,e)=>{const l={params:{key:"48264002-554f1b79d0a5e107f7aa1f349",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return L.get("https://pixabay.com/api/",l)},f=r=>r.map(e=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${e.webformatURL}">
    <img class="gallery-img"
    src="${e.largeImageURL}" 
    alt="${e.tags}" 
    loading="lazy" />
    <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${e.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${e.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${e.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${e.downloads}</span>
  </div>
</div>
    </a>
    </li>`).join(""),g=document.querySelector(".js-search-form");document.querySelector(".search-btn");const m=document.querySelector(".js-gallery"),o=document.querySelector(".loader"),a=document.querySelector(".load-more-btn");let n=1,d="",y=new b(".gallery a",{captionsData:"alt",captionDelay:300});const v=15;a.classList.add("is-hidden");o.classList.add("loader-hidden");const w=async r=>{if(r.preventDefault(),d=r.currentTarget.elements.user_query.value.trim(),d===""){i.warning({message:"Please enter a search term.",position:"topRight"});return}n=1,a.classList.add("is-hidden"),m.innerHTML="",o.classList.remove("loader-hidden");try{const{data:e}=await u(d,n);if(o.classList.add("loader-hidden"),e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),g.reset();return}e.totalHits>1&&(a.classList.remove("is-hidden"),a.addEventListener("click",p)),m.innerHTML=f(e.hits),n*v>=e.totalHits&&(a.classList.add("is-hidden"),a.removeEventListener("click",p),i.info({message:"Were sorry, but you've reached the end of search results.",position:"topRight"})),y.refresh()}catch(e){i.error({title:"Error",message:"Something went wrong, please try again later",position:"topRight"}),console.log(e)}finally{o.classList.add("loader-hidden")}};g.addEventListener("submit",w);const p=async r=>{o.classList.remove("loader-hidden"),n++;try{const{data:e}=await u(d,n);m.insertAdjacentHTML("beforeend",f(e.hits)),y.refresh(),n*v>=e.totalHits&&(a.classList.add("is-hidden"),a.removeEventListener("click",p),i.info({message:"Were sorry, but you've reached the end of search results.",position:"topRight"}));const c=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}catch(e){a.classList.add("is-hidden"),i.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."}),console.log(e.message)}finally{o.classList.add("loader-hidden")}};
//# sourceMappingURL=index.js.map
