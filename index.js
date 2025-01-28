import{a as v,i as o,S as L}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const f=(a,e)=>{const l={params:{key:"48264002-554f1b79d0a5e107f7aa1f349",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return v.get("https://pixabay.com/api/",l)},g=a=>a.map(e=>`
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
    </li>`).join(""),y=document.querySelector(".js-search-form");document.querySelector(".search-btn");const m=document.querySelector(".js-gallery"),i=document.querySelector(".loader"),r=document.querySelector(".load-more-btn");let n=1,d="",u;const b=15;r.classList.add("is-hidden");i.classList.add("loader-hidden");const w=async a=>{if(a.preventDefault(),d=a.currentTarget.elements.user_query.value.trim(),d===""){o.warning({message:"Please enter a search term.",position:"topRight"});return}n=1,r.classList.add("is-hidden"),m.innerHTML="",i.classList.remove("loader-hidden");try{const{data:e}=await f(d,n);if(i.classList.add("loader-hidden"),e.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y.reset();return}m.innerHTML=g(e.hits),e.totalHits>1&&(r.classList.remove("is-hidden"),r.addEventListener("click",h)),n*b>=e.total&&(r.classList.add("is-hidden"),r.removeEventListener("click",h),o.info({message:"Were sorry, but you've reached the end of search results.",position:"topRight"})),u=new L(".gallery a",{captionsData:"alt",captionDelay:300}),u.refresh()}catch(e){o.error({title:"Error",message:"Something went wrong, please try again later",position:"topRight"}),console.log(e)}finally{i.classList.add("loader-hidden")}};y.addEventListener("submit",w);const h=async a=>{i.classList.remove("loader-hidden"),n++;try{const{data:e}=await f(d,n);m.insertAdjacentHTML("beforeend",g(e.hits)),u.refresh();const c=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}catch{r.classList.add("is-hidden"),o.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."})}finally{i.classList.add("loader-hidden")}};
//# sourceMappingURL=index.js.map
