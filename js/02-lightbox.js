import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) { 
    return galleryItems.map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
        </a>
    </li>
  `).join("");
  }

galleryRef.insertAdjacentHTML("beforeend", markup);
// gallery.addEventListener('click', clickOnImage);

// function clickOnImage(event) {
//     event.preventDefault();
//     if (event.target === event.currentTarget) return;

//     const modalImgSrc = event.target.dataset.source;

    const lightbox = new SimpleLightbox('.gallery a',{
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
