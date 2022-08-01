import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imgCardMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgCardMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </div>
      `;
    })
    .join(" ");
}

const gallery = new SimpleLightbox(".gallery  a", {
  scrollZoom: false,
  captionsData: "alt",
  captionDelay: 250,
});

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const imgNodeName = evt.target.nodeName;
  if (!imgNodeName) {
    return;
  } else {
    gallery;
  }
}
