import { galleryItems } from "./gallery-items.js";
// Change code below this line

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
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
      `;
    })
    .join(" ");
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const imgNodeName = evt.target.nodeName === "IMG";
  if (!imgNodeName) {
    return;
  } else {
    const originalImg = evt.target.dataset.source;

    createBigImgMarkup(originalImg).show();
  }
}

function createBigImgMarkup(src) {
  const instance = basicLightbox.create(
    `
    <img src="${src}" width="1280" height="800">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscClick);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscClick);
      },
    }
  );
  function onEscClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  return instance;
}
