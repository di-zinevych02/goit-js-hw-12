import{a as h,i,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const m=(a,e)=>{const l={params:{key:"48264002-554f1b79d0a5e107f7aa1f349",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}};return h.get("https://pixabay.com/api/",l)},f=a=>a.map(e=>`
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
    </li>`).join(""),g=document.querySelector(".js-search-form");document.querySelector(".search-btn");const y=document.querySelector(".js-gallery"),o=document.querySelector(".loader"),r=document.querySelector(".load-more-btn");let n=1,d="",u;const b=15;o.style.display="none";r.style.display="none";const L=async a=>{if(o.style.display="block",a.preventDefault(),d=a.currentTarget.elements.user_query.value.trim(),d===""){o.style.display="none",i.warning({message:"Please enter a search term.",position:"topRight"});return}n=1,r.style.display="none";try{const{data:e}=await m(d,n);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),y.innerHTML="",g.reset();return}e.totalHits>1&&(r.style.display="block",r.addEventListener("click",w)),y.innerHTML=f(e.hits),r.style.display="block",u=new v(".gallery a",{captionsData:"alt",captionDelay:300}),u.refresh()}catch(e){i.error({title:"Error",message:"Something went wrong, please try again later",position:"topRight"}),console.log(e)}finally{o.style.display="none"}};g.addEventListener("submit",L);const w=async a=>{o.style.display="block",n++;try{const{data:e}=await m(d,n);o.style.display="none",y.insertAdjacentHTML("beforeend",f(e.hits)),u.refresh(),n*b>=e.totalHits&&(r.disabled=!0,r.style.display="none",i.info({message:"Were sorry, but you've reached the end of search results.",position:"topRight"}));const c=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}catch{r.style.display="none",i.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again later."})}};
//# sourceMappingURL=index.js.map
