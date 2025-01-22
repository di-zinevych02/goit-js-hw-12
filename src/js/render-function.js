export const createGalleryCardTemplate = imgInfo => {
    return `
    <li class="gallery-item">
    <a class="gallery-link" href="${imgInfo.webformatURL}">
    <img class="gallery-img"
    src="${imgInfo.largeImageURL}" 
    alt="${imgInfo.tags}" 
    loading="lazy" />
    <div class="info">
  <div class="info-list">
    <span class="info-item">Likes</span>
    <span class="info-item-value">${imgInfo.likes}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Views</span>
    <span class="info-item-value">${imgInfo.views}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Comments</span>
    <span class="info-item-value">${imgInfo.comments}</span>
  </div>
  <div class="info-list">
    <span class="info-item">Downloads</span>
    <span class="info-item-value">${imgInfo.downloads}</span>
  </div>
</div>
    </a>
    </li>`;
};
